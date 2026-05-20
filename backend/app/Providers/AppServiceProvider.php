<?php

namespace App\Providers;

use App\Interfaces\Repositories\DashboardRepositoryInterface;
use App\Interfaces\Repositories\MenuCategoryRepositoryInterface;
use App\Interfaces\Repositories\MenuItemRepositoryInterface;
use App\Interfaces\Repositories\OrderRepositoryInterface;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\Order;
use App\Policies\MenuCategoryPolicy;
use App\Policies\MenuItemPolicy;
use App\Policies\OrderPolicy;
use App\Repositories\Eloquent\DashboardRepository;
use App\Repositories\Eloquent\MenuCategoryRepository;
use App\Repositories\Eloquent\MenuItemRepository;
use App\Repositories\Eloquent\OrderRepository;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(DashboardRepositoryInterface::class, DashboardRepository::class);
        $this->app->bind(MenuCategoryRepositoryInterface::class, MenuCategoryRepository::class);
        $this->app->bind(MenuItemRepositoryInterface::class, MenuItemRepository::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::policy(MenuCategory::class, MenuCategoryPolicy::class);
        Gate::policy(MenuItem::class, MenuItemPolicy::class);
        Gate::policy(Order::class, OrderPolicy::class);
    }
}
