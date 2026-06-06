import {
    useQuery,
} from "@tanstack/react-query";

import {
    PosService,
} from "../services/pos-service";

export function
    useDiscounts() {

    return useQuery({

        queryKey: [
            "discounts",
        ],

        queryFn:
            PosService.discounts,

    });

}