import { useMutation } from "@tanstack/react-query";
import { menuApi } from "../api/menu-api";

export function useDeleteMenuItem() {
    return useMutation({
        mutationFn: async (id: number) => {
            return menuApi.deleteItem(id);
        },
    });
}