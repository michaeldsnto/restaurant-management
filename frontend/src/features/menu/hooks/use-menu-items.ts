import { useQuery }
    from "@tanstack/react-query";

import { menuService }
    from "../services/menu-service";

export function useMenuItems(
    filters?: Record<
        string,
        unknown
    >
) {

    return useQuery({

        queryKey: [
            "menu-items",
            filters,
        ],

        queryFn: () =>
            menuService.getItems(
                filters
            ),

    });

}