import {
    useQuery,
} from "@tanstack/react-query";

import {
    inventoryService,
} from "../services/inventory-service";

export function useInventory() {

    return useQuery({

        queryKey: [
            "ingredients",
        ],

        queryFn:
            inventoryService.getIngredients,

    });
}