import { api } from "@/api/axios";

export async function getSuppliersApi() {

    const response =
        await api.get(
            "/inventory/suppliers"
        );

    return response.data;
}