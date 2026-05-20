<?php

namespace App\Policies;

use App\Models\MenuCategory;
use App\Models\User;

class MenuCategoryPolicy
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
        return $user->hasAnyRole(['Manager', 'Cashier']);
    }

    public function create(User $user): bool
    {
        return $user->hasAnyRole(['Manager']);
    }

    public function update(User $user, MenuCategory $menuCategory): bool
    {
        return $user->restaurant_branch_id === $menuCategory->restaurant_branch_id
            && $user->hasAnyRole(['Manager']);
    }

    public function delete(User $user, MenuCategory $menuCategory): bool
    {
        return $this->update($user, $menuCategory);
    }
}
