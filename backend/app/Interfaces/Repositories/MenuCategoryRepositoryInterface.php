<?php

namespace App\Interfaces\Repositories;

use App\Models\MenuCategory;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface MenuCategoryRepositoryInterface
{
    public function paginate(array $filters = []): LengthAwarePaginator;

    public function create(array $data): MenuCategory;

    public function update(MenuCategory $menuCategory, array $data): MenuCategory;

    public function delete(MenuCategory $menuCategory): void;
}
