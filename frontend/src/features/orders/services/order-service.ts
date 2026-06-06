import { orderApi }
    from "../api/order-api";

export class OrderService {

    static async getOrders(
        filters?: any
    ) {

        return orderApi.getOrders(
            filters
        );

    }

    static async getOrder(
        id: number
    ) {

        return orderApi.getOrder(
            id
        );

    }

    static async create(
        payload: any
    ) {

        return orderApi.createOrder(
            payload
        );

    }

    static async updateStatus(
        id: number,
        status: string
    ) {

        return orderApi.updateOrderStatus(
            id,
            status
        );

    }

}