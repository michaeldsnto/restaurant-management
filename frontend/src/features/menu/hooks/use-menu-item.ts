import { useQuery }
    from "@tanstack/react-query";

import { menuService }
    from "../services/menu-service";

export function useMenuItem(
    id: number
) {

    return useQuery({

        queryKey: [
            "menu-item",
            id,
        ],

        queryFn: () =>
            menuService.getItem(
                id
            ),

        enabled: !!id,

    });

} 