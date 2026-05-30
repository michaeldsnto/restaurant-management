import {
    useQuery,
} from "@tanstack/react-query";

import { api } from "@/api/axios";

export function useEmployeePerformance() {

    return useQuery({

        queryKey: [
            "employee-performance",
        ],

        queryFn: async () => {

            const response =
                await api.get(
                    "/employees/performance"
                );

            return response.data;
        },

    });
}