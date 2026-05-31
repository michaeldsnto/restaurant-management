import StockTable
    from "../components/stock-table";

import InventorySummary
    from "../components/inventory-summary";

import InventorySearch
    from "../components/inventory-search";

import InventoryFilter
    from "../components/inventory-filter";

import {
    useInventory,
} from "../hooks/use-inventory";

import {
    useInventoryStore,
} from "../store/inventory-store";

import {

    calculateInventoryValue,

    countLowStockItems,

    countOutOfStockItems,

} from "../utils/inventory-helpers";

export default function InventoryPage() {

    const {
        data,
    } = useInventory();

    const {
        search,
        status,
        setSearch,
        setStatus,
    } =
        useInventoryStore();

    const ingredients =
        data?.data ?? [];

    const filtered =
        ingredients.filter(
            (item: any) => {

                const matchSearch =
                    item.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const matchStatus =
                    status === ""
                        ? true
                        : item.status ===
                        status;

                return (
                    matchSearch &&
                    matchStatus
                );

            }
        );

    return (

        <div className="
      space-y-6
    ">

            <InventorySummary
                totalItems={
                    ingredients.length
                }
                totalValue={
                    calculateInventoryValue(
                        ingredients
                    )
                }
                lowStock={
                    countLowStockItems(
                        ingredients
                    )
                }
                outOfStock={
                    countOutOfStockItems(
                        ingredients
                    )
                }
            />

            <div className="
        flex
        flex-col
        gap-4
        md:flex-row
      ">

                <InventorySearch
                    value={search}
                    onChange={
                        setSearch
                    }
                />

                <InventoryFilter
                    value={status}
                    onChange={
                        setStatus
                    }
                />

            </div>

            <StockTable
                ingredients={
                    filtered
                }
            />

        </div>

    );

}