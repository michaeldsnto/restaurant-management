import {
    useQuery,
} from "@tanstack/react-query";

import {
    dashboardService,
} from "../services/dashboard-service";

export function useKitchenStatus() {

    return useQuery({

        queryKey: [
            "kitchen-status",
        ],

        queryFn:
            dashboardService.getKitchenStatus,

        staleTime:
            1000 * 30,

        refetchInterval:
            5000,

        refetchOnWindowFocus:
            true,

    });
}