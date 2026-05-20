<?php

namespace App\Repositories\Eloquent;

use App\Interfaces\Repositories\DashboardRepositoryInterface;
use App\Models\IngredientStock;
use App\Models\Order;
use App\Models\Reservation;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardRepository implements DashboardRepositoryInterface
{
    public function getOverview(array $filters = []): array
    {
        $branchId = $filters['restaurant_branch_id'] ?? null;
        $dateFrom = isset($filters['date_from']) ? Carbon::parse($filters['date_from'])->startOfDay() : now()->startOfMonth();
        $dateTo = isset($filters['date_to']) ? Carbon::parse($filters['date_to'])->endOfDay() : now()->endOfDay();

        $orders = Order::query()
            ->when($branchId, fn ($query) => $query->where('restaurant_branch_id', $branchId))
            ->whereBetween('created_at', [$dateFrom, $dateTo]);

        $salesSeries = (clone $orders)
            ->selectRaw('DATE(created_at) as sales_date, SUM(grand_total) as revenue, COUNT(*) as orders_count')
            ->groupBy('sales_date')
            ->orderBy('sales_date')
            ->get();

        $topItems = DB::table('order_items')
            ->join('orders', 'orders.id', '=', 'order_items.order_id')
            ->when($branchId, fn ($query) => $query->where('orders.restaurant_branch_id', $branchId))
            ->whereBetween('orders.created_at', [$dateFrom, $dateTo])
            ->selectRaw('order_items.item_name, SUM(order_items.quantity) as quantity_sold, SUM(order_items.line_total) as revenue')
            ->groupBy('order_items.item_name')
            ->orderByDesc('quantity_sold')
            ->limit(5)
            ->get();

        $lowStockCount = IngredientStock::query()
            ->join('ingredients', 'ingredients.id', '=', 'ingredient_stocks.ingredient_id')
            ->when($branchId, fn ($query) => $query->where('ingredients.restaurant_branch_id', $branchId))
            ->whereColumn('ingredient_stocks.quantity', '<=', 'ingredients.minimum_stock')
            ->count();

        $reservationCount = Reservation::query()
            ->when($branchId, fn ($query) => $query->where('restaurant_branch_id', $branchId))
            ->whereBetween('reserved_at', [$dateFrom, $dateTo])
            ->count();

        return [
            'metrics' => [
                'gross_revenue' => (float) (clone $orders)->sum('grand_total'),
                'orders_count' => (clone $orders)->count(),
                'average_order_value' => (float) ((clone $orders)->avg('grand_total') ?? 0),
                'pending_orders' => (clone $orders)->where('status', 'pending')->count(),
                'low_stock_items' => $lowStockCount,
                'reservations_count' => $reservationCount,
            ],
            'sales_series' => $salesSeries,
            'top_items' => $topItems,
        ];
    }
}
