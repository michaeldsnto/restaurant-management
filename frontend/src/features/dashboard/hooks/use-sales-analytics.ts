import {
    useQuery,
} from "@tanstack/react-query";

import {
    dashboardService,
} from "../services/dashboard-service";

export function useSalesAnalytics() {

    return useQuery({

        queryKey: [
            "sales-analytics",
        ],

        queryFn:
            dashboardService.getAnalytics,

        staleTime:
            1000 * 60 * 5,

        refetchInterval:
            1000 * 60,

    });
}