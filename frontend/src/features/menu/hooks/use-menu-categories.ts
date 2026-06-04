import { useQuery }
    from "@tanstack/react-query";

import { menuService }
    from "../services/menu-service";

export function useMenuCategories() {

    return useQuery({

        queryKey: [
            "menu-categories",
        ],

        queryFn:
            menuService.getCategories,

        staleTime:
            1000 * 60 * 10,

    });

}