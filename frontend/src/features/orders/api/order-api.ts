import { api } from "@/api/axios";

export interface OrderFilters {

    page?: number;

    per_page?: number;

    search?: string;

    order_status?: string;

    payment_status?: string;

    order_type?: string;

}

export const orderApi = {

    async getOrders(
        params?: OrderFilters
    ) {

        const response =
            await api.get(
                "/orders",
                {
                    params,
                }
            );

        return response.data;

    },

    async getOrder(
        id: number
    ) {

        const response =
            await api.get(
                `/orders/${id}`
            );

        return response.data;

    },

    async createOrder(
        payload: any
    ) {

        const response =
            await api.post(
                "/orders",
                payload
            );

        return response.data;

    },

    async updateOrderStatus(
        id: number,
        status: string
    ) {

        const response =
            await api.patch(
                `/orders/${id}/status`,
                {
                    status,
                }
            );

        return response.data;

    },

    async cancelOrder(
        id: number
    ) {

        const response =
            await api.patch(
                `/orders/${id}/cancel`
            );

        return response.data;

    },

    async deleteOrder(
        id: number
    ) {

        const response =
            await api.delete(
                `/orders/${id}`
            );

        return response.data;

    },

    async statistics() {

        const response =
            await api.get(
                "/orders/statistics"
            );

        return response.data;

    },

};