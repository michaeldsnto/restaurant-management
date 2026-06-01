import {

    getKitchenOrdersApi,

    getKitchenOrderApi,

    updateKitchenStatusApi,

} from "../api/kitchen-api";

export const kitchenService = {

    getOrders:
        getKitchenOrdersApi,

    getOrder:
        getKitchenOrderApi,

    updateStatus:
        updateKitchenStatusApi,

};