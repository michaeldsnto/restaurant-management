<?php

namespace App\Interfaces\Repositories;

interface DashboardRepositoryInterface
{
    public function getOverview(array $filters = []): array;
}
