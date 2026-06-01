import {

    useMutation,

    useQueryClient,

} from "@tanstack/react-query";

import {
    kitchenService,
} from "../services/kitchen-service";

export function useUpdateOrderStatus() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            status,
        }: {
            id: number;
            status: string;
        }) =>
            kitchenService.updateStatus(
                id,
                status
            ),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "kitchen-orders",
                ],

            });

        },

    });

}