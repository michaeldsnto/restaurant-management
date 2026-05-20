<?php

namespace App\Http\Controllers\API\V1;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\MenuCategory\StoreMenuCategoryRequest;
use App\Http\Requests\MenuCategory\UpdateMenuCategoryRequest;
use App\Http\Resources\MenuCategoryResource;
use App\Models\MenuCategory;
use App\Services\MenuCategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MenuCategoryController extends Controller
{
    public function __construct(
        private readonly MenuCategoryService $menuCategoryService,
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', MenuCategory::class);

        $categories = $this->menuCategoryService->paginate($request->only([
            'restaurant_branch_id',
            'search',
            'per_page',
        ]));

        return ApiResponse::success(
            MenuCategoryResource::collection($categories),
            'Menu categories retrieved successfully.'
        );
    }

    public function store(StoreMenuCategoryRequest $request): JsonResponse
    {
        $this->authorize('create', MenuCategory::class);

        $category = $this->menuCategoryService->create($request->validated());

        return ApiResponse::success(
            MenuCategoryResource::make($category),
            'Menu category created successfully.',
            201
        );
    }

    public function update(UpdateMenuCategoryRequest $request, MenuCategory $menuCategory): JsonResponse
    {
        $this->authorize('update', $menuCategory);

        $category = $this->menuCategoryService->update($menuCategory, $request->validated());

        return ApiResponse::success(
            MenuCategoryResource::make($category),
            'Menu category updated successfully.'
        );
    }

    public function destroy(MenuCategory $menuCategory): JsonResponse
    {
        $this->authorize('delete', $menuCategory);

        $this->menuCategoryService->delete($menuCategory);

        return ApiResponse::success(null, 'Menu category deleted successfully.');
    }
}
