<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;

class OrderPolicy
{
    public function before(User $user, string $ability): ?bool
    {
        if ($user->hasAnyRole(['Super Admin', 'Restaurant Owner'])) {
            return true;
        }

        return null;
    }

    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole(['Manager', 'Cashier', 'Waiter', 'Kitchen Staff']);
    }

    public function create(User $user): bool
    {
        return $user->hasAnyRole(['Manager', 'Cashier', 'Waiter']);
    }

    public function update(User $user, Order $order): bool
    {
        return $user->restaurant_branch_id === $order->restaurant_branch_id
            && $user->hasAnyRole(['Manager', 'Cashier', 'Waiter', 'Kitchen Staff']);
    }
}
