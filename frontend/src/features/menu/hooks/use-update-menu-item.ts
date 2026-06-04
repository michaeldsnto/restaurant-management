import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { menuApi }
    from "../api/menu-api";

export function useUpdateMenuItem() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            payload,
        }: any) =>
            menuApi.updateItem(
                id,
                payload
            ),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "menu-items",
                ],

            });

        },

    });

}