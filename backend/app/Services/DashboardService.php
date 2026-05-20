<?php

namespace App\Services;

use App\Interfaces\Repositories\DashboardRepositoryInterface;

class DashboardService
{
    public function __construct(
        private readonly DashboardRepositoryInterface $dashboardRepository,
    ) {
    }

    public function overview(array $filters = []): array
    {
        return $this->dashboardRepository->getOverview($filters);
    }
}
