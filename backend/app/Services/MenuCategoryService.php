<?php

namespace App\Services;

use App\Interfaces\Repositories\MenuCategoryRepositoryInterface;
use App\Models\MenuCategory;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

class MenuCategoryService
{
    public function __construct(
        private readonly MenuCategoryRepositoryInterface $menuCategoryRepository,
    ) {
    }

    public function paginate(array $filters = []): LengthAwarePaginator
    {
        return $this->menuCategoryRepository->paginate($filters);
    }

    public function create(array $data): MenuCategory
    {
        $data['slug'] = Str::slug($data['name']);

        return $this->menuCategoryRepository->create($data);
    }

    public function update(MenuCategory $menuCategory, array $data): MenuCategory
    {
        if (isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        return $this->menuCategoryRepository->update($menuCategory, $data);
    }

    public function delete(MenuCategory $menuCategory): void
    {
        $this->menuCategoryRepository->delete($menuCategory);
    }
}
