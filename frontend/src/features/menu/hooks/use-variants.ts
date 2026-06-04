import { useQuery } from "@tanstack/react-query";

import { menuApi } from "../api/menu-api";

export function useVariants(
    menuItemId: number
) {
    return useQuery({
        queryKey: [
            "menu-variants",
            menuItemId,
        ],

        queryFn: () =>
            menuApi.getVariants(
                menuItemId
            ),

        enabled: !!menuItemId,
    });
}