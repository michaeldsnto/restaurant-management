<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'channel' => $this->channel,
            'service_type' => $this->service_type,
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            'customer_name' => $this->customer_name,
            'customer_phone' => $this->customer_phone,
            'notes' => $this->notes,
            'subtotal' => $this->subtotal,
            'discount_total' => $this->discount_total,
            'tax_total' => $this->tax_total,
            'grand_total' => $this->grand_total,
            'placed_at' => $this->placed_at,
            'table' => $this->whenLoaded('table', fn () => [
                'id' => $this->table?->id,
                'name' => $this->table?->name,
            ]),
            'creator' => $this->whenLoaded('creator', fn () => [
                'id' => $this->creator?->id,
                'name' => $this->creator?->name,
            ]),
            'items' => $this->whenLoaded('items', fn () => $this->items->map(fn ($item) => [
                'id' => $item->id,
                'item_name' => $item->item_name,
                'variant_name' => $item->variant_name,
                'quantity' => $item->quantity,
                'unit_price' => $item->unit_price,
                'line_total' => $item->line_total,
                'notes' => $item->notes,
            ])),
            'kitchen_orders' => $this->whenLoaded('kitchenOrders', fn () => $this->kitchenOrders->map(fn ($kitchenOrder) => [
                'id' => $kitchenOrder->id,
                'station' => $kitchenOrder->station,
                'status' => $kitchenOrder->status,
            ])),
        ];
    }
}
