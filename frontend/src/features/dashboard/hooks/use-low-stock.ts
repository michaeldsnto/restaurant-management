import {
    useQuery,
} from "@tanstack/react-query";

import {
    dashboardService,
} from "../services/dashboard-service";

export function useLowStock() {

    return useQuery({

        queryKey: [
            "low-stock",
        ],

        queryFn:
            dashboardService.getLowStock,

    });
}