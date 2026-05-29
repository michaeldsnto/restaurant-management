import {

    getDashboardStatsApi,

    getSalesAnalyticsApi,

    getKitchenStatusApi,

    getLiveOrdersApi,

    getLowStockApi,

} from "../api/dashboard-api";

export const dashboardService = {

    getStats:
        getDashboardStatsApi,

    getAnalytics:
        getSalesAnalyticsApi,

    getKitchenStatus:
        getKitchenStatusApi,

    getLiveOrders:
        getLiveOrdersApi,

    getLowStock:
        getLowStockApi,

};