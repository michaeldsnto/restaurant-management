import {
    useQuery,
} from "@tanstack/react-query";

import {
    notificationApi,
} from "../api/notification-api";

export function
    useUnreadCount() {

    return useQuery({

        queryKey: [
            "notification-unread",
        ],

        queryFn:
            notificationApi
                .getUnreadCount,

    });

}