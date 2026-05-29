export interface RevenueStats {

    total_revenue: number;

    today_revenue: number;

    weekly_revenue: number;

    monthly_revenue: number;

}

export interface OrderStats {

    total_orders: number;

    pending_orders: number;

    completed_orders: number;

    cancelled_orders: number;

}

export interface DashboardStats {

    revenue: RevenueStats;

    orders: OrderStats;

    customers: number;

    reservations: number;

}

export interface LiveOrder {

    id: number;

    customer_name: string;

    total: number;

    status: string;

    created_at: string;

}

export interface LowStockItem {

    id: number;

    ingredient_name: string;

    current_stock: number;

    minimum_stock: number;

}