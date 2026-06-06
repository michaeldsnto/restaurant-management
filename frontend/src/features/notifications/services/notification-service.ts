import {
    notificationApi,
} from "../api/notification-api";

export class NotificationService {

    static async markRead(
        id: number
    ) {

        return notificationApi
            .markAsRead(
                id
            );

    }

    static async markAllRead() {

        return notificationApi
            .markAllRead();

    }

}