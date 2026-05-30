import { api } from "@/api/axios";

export async function getEmployeesApi() {

    const response =
        await api.get("/employees");

    return response.data;
}

export async function getEmployeeApi(
    id: number
) {

    const response =
        await api.get(
            `/employees/${id}`
        );

    return response.data;
}

export async function createEmployeeApi(
    data: unknown
) {

    const response =
        await api.post(
            "/employees",
            data
        );

    return response.data;
}

export async function updateEmployeeApi(
    id: number,
    data: unknown
) {

    const response =
        await api.put(
            `/employees/${id}`,
            data
        );

    return response.data;
}

export async function deleteEmployeeApi(
    id: number
) {

    const response =
        await api.delete(
            `/employees/${id}`
        );

    return response.data;
}