import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    inventoryService,
} from "../services/inventory-service";

export function useUpdateIngredient() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            data,
        }: any) =>
            inventoryService.updateIngredient(
                id,
                data
            ),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "ingredients",
                ],

            });

        },

    });
}