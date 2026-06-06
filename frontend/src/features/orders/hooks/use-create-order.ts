import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function
    useCreateOrder() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            orderApi.createOrder,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "orders",
                ],

            });

        },

    });

}