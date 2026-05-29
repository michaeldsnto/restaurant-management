import { useMutation }
    from "@tanstack/react-query";

import {
    authService,
} from "../services/auth-service";

import {
    setToken,
} from "../utils/auth-storage";

import {
    useAuthStore,
} from "../store/auth-store";

export function useLogin() {

    const setUser =
        useAuthStore(
            (state) =>
                state.setUser
        );

    return useMutation({

        mutationFn:
            authService.login,

        onSuccess: (
            response
        ) => {

            setToken(
                response.data.token
            );

            setUser(
                response.data.user
            );
        },

    });
}