<?php

namespace App\Listeners;

use App\Events\OrderPlaced;
use App\Jobs\UpdateDashboardMetricsJob;
use App\Models\ActivityLog;
use App\Models\User;
use App\Notifications\OrderPlacedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

class HandleOrderPlaced implements ShouldQueue
{
    public function handle(OrderPlaced $event): void
    {
        ActivityLog::query()->create([
            'loggable_type' => $event->order::class,
            'loggable_id' => $event->order->id,
            'user_id' => $event->order->created_by,
            'event' => 'order.placed',
            'description' => "Order {$event->order->order_number} created.",
            'properties' => [
                'status' => $event->order->status,
                'grand_total' => $event->order->grand_total,
            ],
        ]);

        User::query()
            ->role(['Super Admin', 'Restaurant Owner', 'Manager', 'Kitchen Staff'])
            ->where('restaurant_branch_id', $event->order->restaurant_branch_id)
            ->get()
            ->each(fn (User $user) => $user->notify(new OrderPlacedNotification($event->order)));

        UpdateDashboardMetricsJob::dispatch($event->order->restaurant_branch_id);
    }
}
