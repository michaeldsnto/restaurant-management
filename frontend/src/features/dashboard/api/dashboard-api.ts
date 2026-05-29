import { api } from "@/api/axios";

export async function getDashboardStatsApi() {

    const response =
        await api.get(
            "/dashboard/stats"
        );

    return response.data;
}

export async function getSalesAnalyticsApi() {

    const response =
        await api.get(
            "/dashboard/analytics"
        );

    return response.data;
}

export async function getLiveOrdersApi() {

    const response =
        await api.get(
            "/dashboard/live-orders"
        );

    return response.data;
}

export async function getLowStockApi() {

    const response =
        await api.get(
            "/dashboard/low-stock"
        );

    return response.data;
}

export async function getKitchenStatusApi() {

    const response =
        await api.get(
            "/dashboard/kitchen-status"
        );

    return response.data;
}