import {
    useQuery,
} from "@tanstack/react-query";

import {
    PosService,
} from "../services/pos-service";

export function
    usePaymentMethods() {

    return useQuery({

        queryKey: [
            "payment-methods",
        ],

        queryFn:
            PosService.paymentMethods,

    });

}