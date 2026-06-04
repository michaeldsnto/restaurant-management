import { useQuery } from "@tanstack/react-query";
import { menuApi } from "../api/menu-api";

export function useModifiers(
    menuItemId: number
) {
    return useQuery({
        queryKey: [
            "modifiers",
            menuItemId,
        ],

        queryFn: () =>
            menuApi.getModifiers(
                menuItemId
            ),

        enabled:
            !!menuItemId,
    });
}