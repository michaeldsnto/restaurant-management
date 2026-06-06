import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function
    useCancelOrder() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            orderApi.cancelOrder,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "orders",
                ],

            });

        },

    });

}