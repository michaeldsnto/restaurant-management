import {
    useQuery,
} from "@tanstack/react-query";

import {
    authService,
} from "../services/auth-service";

import {
    useAuthStore,
} from "../store/auth-store";

import {
    getToken,
} from "../utils/auth-storage";

export function useAuthUser() {

    const setUser =
        useAuthStore(
            (state) =>
                state.setUser
        );

    return useQuery({

        queryKey: ["auth-user"],

        queryFn: async () => {

            const response =
                await authService.me();

            setUser(
                response.data
            );

            return response.data;
        },

        enabled:
            !!getToken(),

        retry: false,

        staleTime:
            1000 * 60 * 5,

    });
}