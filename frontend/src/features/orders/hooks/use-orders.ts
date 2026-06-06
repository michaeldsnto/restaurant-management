import { useQuery }
    from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function useOrders(
    filters?: any
) {

    return useQuery({

        queryKey: [
            "orders",
            filters,
        ],

        queryFn: () =>
            orderApi.getOrders(
                filters
            ),

    });

}