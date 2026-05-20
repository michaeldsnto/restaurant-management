<?php

use App\Http\Controllers\API\V1\AuthController;
use App\Http\Controllers\API\V1\DashboardController;
use App\Http\Controllers\API\V1\MenuCategoryController;
use App\Http\Controllers\API\V1\MenuItemController;
use App\Http\Controllers\API\V1\OrderController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::post('auth/login', [AuthController::class, 'login']);
    Route::post('auth/register', [AuthController::class, 'register']);

    Route::middleware('auth:sanctum')->group(function (): void {
        Route::get('auth/me', [AuthController::class, 'me']);
        Route::post('auth/logout', [AuthController::class, 'logout']);

        Route::get('dashboard/overview', [DashboardController::class, 'overview']);

        Route::apiResource('menu-categories', MenuCategoryController::class)
            ->except(['create', 'edit', 'show']);

        Route::apiResource('menu-items', MenuItemController::class)
            ->except(['create', 'edit', 'show']);

        Route::apiResource('orders', OrderController::class)
            ->only(['index', 'store', 'show', 'update']);
    });
});
