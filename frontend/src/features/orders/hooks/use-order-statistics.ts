import { useQuery }
    from "@tanstack/react-query";

import { orderApi }
    from "../api/order-api";

export function
    useOrderStatistics() {

    return useQuery({

        queryKey: [
            "order-statistics",
        ],

        queryFn:
            orderApi.statistics,

    });

}