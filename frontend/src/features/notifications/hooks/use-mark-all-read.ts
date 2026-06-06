import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    notificationApi,
} from "../api/notification-api";

export function
    useMarkAllRead() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            notificationApi
                .markAllRead,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "notifications",
                ],
            });

        },

    });

}