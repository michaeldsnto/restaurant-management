import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function
    useUpdateOrderStatus() {

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
            orderApi.updateOrderStatus(
                id,
                status
            ),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "orders",
                ],

            });

        },

    });

}