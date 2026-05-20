<?php

namespace App\Http\Controllers\API\V1;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\MenuItem\StoreMenuItemRequest;
use App\Http\Requests\MenuItem\UpdateMenuItemRequest;
use App\Http\Resources\MenuItemResource;
use App\Models\MenuItem;
use App\Services\MenuItemService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    public function __construct(
        private readonly MenuItemService $menuItemService,
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', MenuItem::class);

        $items = $this->menuItemService->paginate($request->only([
            'restaurant_branch_id',
            'menu_category_id',
            'search',
            'per_page',
        ]));

        return ApiResponse::success(
            MenuItemResource::collection($items),
            'Menu items retrieved successfully.'
        );
    }

    public function store(StoreMenuItemRequest $request): JsonResponse
    {
        $this->authorize('create', MenuItem::class);

        $item = $this->menuItemService->create($request->validated());

        return ApiResponse::success(
            MenuItemResource::make($item),
            'Menu item created successfully.',
            201
        );
    }

    public function update(UpdateMenuItemRequest $request, MenuItem $menuItem): JsonResponse
    {
        $this->authorize('update', $menuItem);

        $item = $this->menuItemService->update($menuItem, $request->validated());

        return ApiResponse::success(
            MenuItemResource::make($item),
            'Menu item updated successfully.'
        );
    }
}
