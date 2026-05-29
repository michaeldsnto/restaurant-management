import { useMutation }
    from "@tanstack/react-query";

import {
    authService,
} from "../services/auth-service";

import {
    removeToken,
} from "../utils/auth-storage";

import {
    useAuthStore,
} from "../store/auth-store";

export function useLogout() {

    const logout =
        useAuthStore(
            (state) =>
                state.logout
        );

    return useMutation({

        mutationFn:
            authService.logout,

        onSuccess: () => {

            removeToken();

            logout();
        },

    });
}