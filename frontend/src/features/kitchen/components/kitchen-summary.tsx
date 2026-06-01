import KitchenStatsCard
    from "./kitchen-stats-card";

import {
    useKitchenSummary,
} from "../hooks/use-kitchen-summary";

export default function KitchenSummary() {

    const summary =
        useKitchenSummary();

    return (

        <div
            className="
      grid
      gap-4
      md:grid-cols-5
    "
        >

            <KitchenStatsCard
                title="Pending"
                value={
                    summary.pending
                }
            />

            <KitchenStatsCard
                title="Preparing"
                value={
                    summary.preparing
                }
            />

            <KitchenStatsCard
                title="Ready"
                value={
                    summary.ready
                }
            />

            <KitchenStatsCard
                title="Served"
                value={
                    summary.served
                }
            />

            <KitchenStatsCard
                title="Total"
                value={
                    summary.total_orders
                }
            />

        </div>

    );

}