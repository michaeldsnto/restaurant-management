<?php

namespace App\Services;

use App\Interfaces\Repositories\MenuItemRepositoryInterface;
use App\Models\MenuItem;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MenuItemService
{
    public function __construct(
        private readonly MenuItemRepositoryInterface $menuItemRepository,
    ) {
    }

    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return $this->menuItemRepository->paginate($filters);
    }

    public function create(array $data): MenuItem
    {
        return DB::transaction(function () use ($data): MenuItem {
            $variants = $data['variants'] ?? [];
            unset($data['variants']);

            $data['slug'] = Str::slug($data['name']);

            $menuItem = $this->menuItemRepository->create($data);
            $menuItem->variants()->createMany($variants);

            return $menuItem->load(['category', 'variants']);
        });
    }

    public function update(MenuItem $menuItem, array $data): MenuItem
    {
        return DB::transaction(function () use ($menuItem, $data): MenuItem {
            $variants = $data['variants'] ?? null;
            unset($data['variants']);

            if (isset($data['name'])) {
                $data['slug'] = Str::slug($data['name']);
            }

            $menuItem = $this->menuItemRepository->update($menuItem, $data);

            if (is_array($variants)) {
                $menuItem->variants()->delete();
                $menuItem->variants()->createMany($variants);
            }

            return $menuItem->load(['category', 'variants']);
        });
    }
}
