import RevenueCard
    from "../components/revenue-card";

import OrderSummary
    from "../components/order-summary";

import LiveOrders
    from "../components/live-orders";

import {
    useDashboardStats,
} from "../hooks/use-dashboard-stats";

import {
    useLiveOrders,
} from "../hooks/use-live-orders";

export default function DashboardPage() {

    const {
        data: stats,
    } = useDashboardStats();

    const {
        data: orders,
    } = useLiveOrders();

    return (

        <div className="
      space-y-8
    ">

            <div className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      ">

                <RevenueCard
                    title="Today's Revenue"
                    amount={
                        stats?.data
                            ?.revenue
                            ?.today_revenue || 0
                    }
                    growth="+12.5%"
                />

                <RevenueCard
                    title="Monthly Revenue"
                    amount={
                        stats?.data
                            ?.revenue
                            ?.monthly_revenue || 0
                    }
                    growth="+18.2%"
                />

            </div>

            <div className="
        grid
        gap-6
        xl:grid-cols-3
      ">

                <div className="
          xl:col-span-2
        ">

                    <LiveOrders
                        orders={
                            orders?.data || []
                        }
                    />

                </div>

                <OrderSummary
                    total={
                        stats?.data
                            ?.orders
                            ?.total_orders || 0
                    }
                    pending={
                        stats?.data
                            ?.orders
                            ?.pending_orders || 0
                    }
                    completed={
                        stats?.data
                            ?.orders
                            ?.completed_orders || 0
                    }
                />

            </div>

        </div>

    );
}