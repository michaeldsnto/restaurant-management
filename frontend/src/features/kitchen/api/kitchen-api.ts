import { api } from "@/api/axios";

export async function getKitchenOrdersApi() {

    const response =
        await api.get(
            "/kitchen/orders"
        );

    return response.data;
}

export async function getKitchenOrderApi(
    id: number
) {

    const response =
        await api.get(
            `/kitchen/orders/${id}`
        );

    return response.data;
}

export async function updateKitchenStatusApi(
    id: number,
    status: string
) {

    const response =
        await api.patch(
            `/kitchen/orders/${id}/status`,
            {
                status,
            }
        );

    return response.data;
}