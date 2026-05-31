import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    inventoryService,
} from "../services/inventory-service";

export function useCreateIngredient() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            inventoryService.createIngredient,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "ingredients",
                ],

            });

        },

    });
}