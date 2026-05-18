<?php

namespace App\Repositories\Eloquent;

use App\Interfaces\Repositories\OrderRepositoryInterface;
use App\Models\Order;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class OrderRepository implements OrderRepositoryInterface
{
    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return Order::query()
            ->with(['items', 'kitchenOrders', 'table', 'creator'])
            ->when($filters['restaurant_branch_id'] ?? null, fn ($query, $branchId) => $query->where('restaurant_branch_id', $branchId))
            ->when($filters['status'] ?? null, fn ($query, $status) => $query->where('status', $status))
            ->when($filters['channel'] ?? null, fn ($query, $channel) => $query->where('channel', $channel))
            ->when($filters['search'] ?? null, function ($query, $search): void {
                $query->where(function ($nestedQuery) use ($search): void {
                    $nestedQuery
                        ->where('order_number', 'like', "%{$search}%")
                        ->orWhere('customer_name', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate($filters['per_page'] ?? 15);
    }

    public function create(array $data): Order
    {
        return Order::query()->create($data);
    }

    public function update(Order $order, array $data): Order
    {
        $order->update($data);

        return $order->refresh();
    }
}
