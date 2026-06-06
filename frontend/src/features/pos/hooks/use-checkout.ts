import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    PosService,
} from "../services/pos-service";

export function
    useCheckout() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            PosService.checkout,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "orders",
                ],

            });

            queryClient.invalidateQueries({

                queryKey: [
                    "dashboard",
                ],

            });

        },

    });

}