import {
    useQuery,
} from "@tanstack/react-query";

import {
    PosService,
} from "../services/pos-service";

export function
    usePosProducts(
        filters?: any
    ) {

    return useQuery({

        queryKey: [
            "pos-products",
            filters,
        ],

        queryFn: () =>
            PosService.products(
                filters
            ),

    });

}