<?php

namespace App\Services;

use App\DTOs\Orders\StoreOrderData;
use App\Events\OrderPlaced;
use App\Interfaces\Repositories\OrderRepositoryInterface;
use App\Models\Discount;
use App\Models\MenuItem;
use App\Models\Order;
use App\Models\Tax;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderService
{
    public function __construct(
        private readonly OrderRepositoryInterface $orderRepository,
    ) {
    }

    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return $this->orderRepository->paginate($filters);
    }

    public function create(StoreOrderData $data, ?int $createdBy = null): Order
    {
        return DB::transaction(function () use ($data, $createdBy): Order {
            $subtotal = 0;

            $resolvedItems = collect($data->items)->map(function (array $item) use (&$subtotal): array {
                $menuItem = MenuItem::query()->findOrFail($item['menu_item_id']);
                $variant = isset($item['menu_item_variant_id'])
                    ? $menuItem->variants()->findOrFail($item['menu_item_variant_id'])
                    : null;

                $unitPrice = (float) $menuItem->price + (float) ($variant?->price_delta ?? 0);
                $quantity = (int) $item['quantity'];
                $lineTotal = $unitPrice * $quantity;
                $subtotal += $lineTotal;

                return [
                    'menu_item_id' => $menuItem->id,
                    'menu_item_variant_id' => $variant?->id,
                    'item_name' => $menuItem->name,
                    'variant_name' => $variant?->name,
                    'quantity' => $quantity,
                    'unit_price' => $unitPrice,
                    'line_total' => $lineTotal,
                    'notes' => $item['notes'] ?? null,
                ];
            });

            $discount = $data->discountId ? Discount::query()->find($data->discountId) : null;
            $tax = $data->taxId ? Tax::query()->find($data->taxId) : null;

            $discountTotal = $discount ? $this->calculateDiscount($subtotal, $discount) : 0;
            $taxableAmount = max($subtotal - $discountTotal, 0);
            $taxTotal = $tax ? $this->calculateTax($taxableAmount, $tax) : 0;
            $grandTotal = $taxableAmount + $taxTotal;

            $order = $this->orderRepository->create([
                'restaurant_id' => $data->restaurantId,
                'restaurant_branch_id' => $data->branchId,
                'restaurant_table_id' => $data->tableId,
                'customer_id' => $data->customerId,
                'created_by' => $createdBy,
                'order_number' => $this->generateOrderNumber(),
                'channel' => $data->channel,
                'service_type' => $data->serviceType,
                'status' => 'pending',
                'payment_status' => $data->payment ? 'paid' : 'unpaid',
                'customer_name' => $data->customerName,
                'customer_phone' => $data->customerPhone,
                'delivery_address' => $data->deliveryAddress,
                'notes' => $data->notes,
                'subtotal' => $subtotal,
                'discount_total' => $discountTotal,
                'tax_total' => $taxTotal,
                'grand_total' => $grandTotal,
                'placed_at' => now(),
            ]);

            $order->items()->createMany($resolvedItems->all());
            $order->kitchenOrders()->create([
                'station' => 'main',
                'status' => 'pending',
            ]);

            if ($data->payment) {
                $payment = $order->payments()->create([
                    'method' => $data->payment['method'],
                    'status' => 'paid',
                    'reference_number' => $data->payment['reference_number'] ?? null,
                    'amount' => $grandTotal,
                    'paid_at' => now(),
                ]);

                $order->transactions()->create([
                    'payment_id' => $payment->id,
                    'type' => 'payment_capture',
                    'reference_number' => $payment->reference_number,
                    'amount' => $grandTotal,
                    'status' => 'success',
                    'processed_at' => now(),
                ]);
            }

            $order->load(['items', 'kitchenOrders', 'table', 'creator']);

            event(new OrderPlaced($order));

            return $order;
        });
    }

    public function updateStatus(Order $order, array $payload): Order
    {
        return DB::transaction(function () use ($order, $payload): Order {
            $order = $this->orderRepository->update($order, $payload);

            if (isset($payload['status'])) {
                $order->kitchenOrders()->update([
                    'status' => $payload['status'],
                ]);
            }

            return $order->load(['items', 'kitchenOrders', 'table', 'creator']);
        });
    }

    private function generateOrderNumber(): string
    {
        return 'ORD-'.now()->format('YmdHis').'-'.Str::upper(Str::random(4));
    }

    private function calculateDiscount(float $subtotal, Discount $discount): float
    {
        if ($discount->type === 'percentage') {
            return round($subtotal * ((float) $discount->value / 100), 2);
        }

        return min((float) $discount->value, $subtotal);
    }

    private function calculateTax(float $taxableAmount, Tax $tax): float
    {
        return round($taxableAmount * ((float) $tax->rate / 100), 2);
    }
}
