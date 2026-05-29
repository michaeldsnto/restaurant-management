import {
    useQuery,
} from "@tanstack/react-query";

import {
    dashboardService,
} from "../services/dashboard-service";

export function useLiveOrders() {

    return useQuery({

        queryKey: [
            "live-orders",
        ],

        queryFn:
            dashboardService.getLiveOrders,

        refetchInterval:
            5000,

    });
}