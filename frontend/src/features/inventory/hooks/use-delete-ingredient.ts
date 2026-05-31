import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    inventoryService,
} from "../services/inventory-service";

export function useDeleteIngredient() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            inventoryService.deleteIngredient,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "ingredients",
                ],

            });

        },

    });
}