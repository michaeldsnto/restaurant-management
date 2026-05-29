import {
    useQuery,
} from "@tanstack/react-query";

import {
    api,
} from "@/api/axios";

async function getActivitiesApi() {

    const response =
        await api.get(
            "/dashboard/activities"
        );

    return response.data;
}

export function useDashboardActivities() {

    return useQuery({

        queryKey: [
            "dashboard-activities",
        ],

        queryFn:
            getActivitiesApi,

        staleTime:
            1000 * 30,

        refetchInterval:
            10000,

    });
}