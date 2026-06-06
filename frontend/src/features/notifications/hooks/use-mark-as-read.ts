import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    notificationApi,
} from "../api/notification-api";

export function
    useMarkAsRead() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            notificationApi
                .markAsRead,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "notifications",
                ],
            });

        },

    });

}