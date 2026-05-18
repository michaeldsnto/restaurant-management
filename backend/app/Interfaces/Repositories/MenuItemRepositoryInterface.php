<?php

namespace App\Interfaces\Repositories;

use App\Models\MenuItem;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface MenuItemRepositoryInterface
{
    public function paginate(array $filters = []): LengthAwarePaginator;

    public function create(array $data): MenuItem;

    public function update(MenuItem $menuItem, array $data): MenuItem;
}
