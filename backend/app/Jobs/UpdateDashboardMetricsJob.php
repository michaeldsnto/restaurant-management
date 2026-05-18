<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Cache;

class UpdateDashboardMetricsJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        private readonly ?int $branchId = null,
    ) {
    }

    public function handle(): void
    {
        if ($this->branchId) {
            Cache::forget("dashboard.overview.branch.{$this->branchId}");
        }
    }
}
