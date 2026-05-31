import { useMemo } from "react";

import { useInventory } from "./use-inventory";

export function useLowStock() {

    const {
        data,
        isLoading,
        error,
    } = useInventory();

    const lowStockItems =
        useMemo(() => {

            const ingredients =
                data?.data ?? [];

            return ingredients.filter(
                (ingredient: any) =>
                    ingredient.current_stock <=
                    ingredient.minimum_stock
            );

        }, [data]);

    return {

        isLoading,

        error,

        lowStockItems,

        totalLowStock:
            lowStockItems.length,

    };

}