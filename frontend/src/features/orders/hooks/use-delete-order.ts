import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function
    useDeleteOrder() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            orderApi.deleteOrder,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "orders",
                ],

            });

        },

    });

}