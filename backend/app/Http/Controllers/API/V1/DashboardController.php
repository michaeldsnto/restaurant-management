<?php

namespace App\Http\Controllers\API\V1;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\DashboardOverviewResource;
use App\Services\DashboardService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct(
        private readonly DashboardService $dashboardService,
    ) {
    }

    public function overview(Request $request): JsonResponse
    {
        $overview = $this->dashboardService->overview($request->only([
            'restaurant_branch_id',
            'date_from',
            'date_to',
        ]));

        return ApiResponse::success(
            DashboardOverviewResource::make($overview),
            'Dashboard overview retrieved successfully.'
        );
    }
}
