<?php

namespace App\Policies;

use App\Models\MenuItem;
use App\Models\User;

class MenuItemPolicy
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
        return $user->hasAnyRole(['Manager', 'Cashier', 'Kitchen Staff', 'Waiter']);
    }

    public function create(User $user): bool
    {
        return $user->hasRole('Manager');
    }

    public function update(User $user, MenuItem $menuItem): bool
    {
        return $user->restaurant_branch_id === $menuItem->restaurant_branch_id
            && $user->hasRole('Manager');
    }
}
