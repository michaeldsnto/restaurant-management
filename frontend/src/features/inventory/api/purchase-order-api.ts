import { api } from "@/api/axios";

export async function getPurchaseOrdersApi() {

    const response =
        await api.get(
            "/inventory/purchase-orders"
        );

    return response.data;
}