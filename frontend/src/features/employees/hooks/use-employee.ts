import {
    useQuery,
} from "@tanstack/react-query";

import {
    employeeService,
} from "../services/employee-service";

export function useEmployee(
    id: number
) {

    return useQuery({

        queryKey: [
            "employee",
            id,
        ],

        queryFn: () =>
            employeeService.getEmployee(id),

        enabled:
            !!id,

    });
}