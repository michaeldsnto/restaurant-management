<?php

namespace App\Repositories\Eloquent;

use App\Interfaces\Repositories\MenuCategoryRepositoryInterface;
use App\Models\MenuCategory;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class MenuCategoryRepository implements MenuCategoryRepositoryInterface
{
    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return MenuCategory::query()
            ->when($filters['restaurant_branch_id'] ?? null, fn ($query, $branchId) => $query->where('restaurant_branch_id', $branchId))
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->where('name', 'like', "%{$search}%"))
            ->orderBy('sort_order')
            ->orderBy('name')
            ->paginate($filters['per_page'] ?? 15);
    }

    public function create(array $data): MenuCategory
    {
        return MenuCategory::query()->create($data);
    }

    public function update(MenuCategory $menuCategory, array $data): MenuCategory
    {
        $menuCategory->update($data);

        return $menuCategory->refresh();
    }

    public function delete(MenuCategory $menuCategory): void
    {
        $menuCategory->delete();
    }
}
