import {
    useQuery,
} from "@tanstack/react-query";

import {
    kitchenService,
} from "../services/kitchen-service";

export function useKitchenOrder(
    id: number
) {

    return useQuery({

        queryKey: [
            "kitchen-order",
            id,
        ],

        queryFn: () =>
            kitchenService.getOrder(
                id
            ),

        enabled: !!id,

    });

}