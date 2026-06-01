import {
    useQuery,
} from "@tanstack/react-query";

import {
    kitchenService,
} from "../services/kitchen-service";

export function useKitchenOrders() {

    return useQuery({

        queryKey: [
            "kitchen-orders",
        ],

        queryFn:
            kitchenService.getOrders,

        refetchInterval:
            10000,

    });

}   