import {
    useQuery,
} from "@tanstack/react-query";

import {
    inventoryService,
} from "../services/inventory-service";

export function useIngredient(
    id: number
) {

    return useQuery({

        queryKey: [
            "ingredient",
            id,
        ],

        queryFn: () =>
            inventoryService.getIngredient(id),

        enabled: !!id,

    });
}