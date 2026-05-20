<?php

namespace App\Repositories\Eloquent;

use App\Interfaces\Repositories\MenuItemRepositoryInterface;
use App\Models\MenuItem;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class MenuItemRepository implements MenuItemRepositoryInterface
{
    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return MenuItem::query()
            ->with(['category', 'variants'])
            ->when($filters['restaurant_branch_id'] ?? null, fn ($query, $branchId) => $query->where('restaurant_branch_id', $branchId))
            ->when($filters['menu_category_id'] ?? null, fn ($query, $categoryId) => $query->where('menu_category_id', $categoryId))
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->where('name', 'like', "%{$search}%"))
            ->orderByDesc('is_featured')
            ->orderBy('name')
            ->paginate($filters['per_page'] ?? 15);
    }

    public function create(array $data): MenuItem
    {
        return MenuItem::query()->create($data);
    }

    public function update(MenuItem $menuItem, array $data): MenuItem
    {
        $menuItem->update($data);

        return $menuItem->refresh();
    }
}
