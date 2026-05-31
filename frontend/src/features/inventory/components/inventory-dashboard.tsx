import InventorySummary
    from "./inventory-summary";

import LowStockCard
    from "./low-stock-card";

interface Props {

    totalItems: number;

    totalValue: number;

    lowStock: number;

    outOfStock: number;

}

export default function InventoryDashboard({
    totalItems,
    totalValue,
    lowStock,
    outOfStock,
}: Props) {

    return (

        <div
            className="
      space-y-6
    "
        >

            <InventorySummary
                totalItems={
                    totalItems
                }
                totalValue={
                    totalValue
                }
                lowStock={
                    lowStock
                }
                outOfStock={
                    outOfStock
                }
            />

            <LowStockCard
                total={lowStock}
            />

        </div>

    );

}