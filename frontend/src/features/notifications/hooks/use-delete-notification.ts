import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    notificationApi,
} from "../api/notification-api";

export function
    useDeleteNotification() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            notificationApi.delete,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "notifications",
                ],
            });

        },

    });

}