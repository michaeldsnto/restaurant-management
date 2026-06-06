import { api } from "@/api/axios";

import type {
    NotificationFilter,
} from "../types/notification-filter";

export const notificationApi = {

    getAll: async (
        params?: NotificationFilter
    ) => {

        const response =
            await api.get(
                "/notifications",
                {
                    params,
                }
            );

        return response.data;
    },

    getUnreadCount:
        async () => {

            const response =
                await api.get(
                    "/notifications/unread-count"
                );

            return response.data;
        },

    markAsRead:
        async (
            id: number
        ) => {

            const response =
                await api.patch(
                    `/notifications/${id}/read`
                );

            return response.data;
        },

    markAllRead:
        async () => {

            const response =
                await api.patch(
                    "/notifications/read-all"
                );

            return response.data;
        },

    delete: async (
        id: number
    ) => {

        const response =
            await api.delete(
                `/notifications/${id}`
            );

        return response.data;
    },
};