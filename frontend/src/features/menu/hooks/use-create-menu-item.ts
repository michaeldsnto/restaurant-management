import { useMutation } from "@tanstack/react-query";
import { menuApi } from "../api/menu-api";

export function useCreateMenuItem() {
    return useMutation({
        mutationFn: async (payload: any) => {
            const response = await menuApi.createItem(payload);
            return response;
        },
    });
}