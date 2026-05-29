import { create }
    from "zustand";

import type {
    User,
} from "../types/auth";

interface AuthState {

    user: User | null;

    authenticated: boolean;

    setUser: (
        user: User
    ) => void;

    logout: () => void;

}

export const useAuthStore =
    create<AuthState>((set) => ({

        user: null,

        authenticated: false,

        setUser: (user) =>

            set({
                user,
                authenticated: true,
            }),

        logout: () =>

            set({
                user: null,
                authenticated: false,
            }),

    }));