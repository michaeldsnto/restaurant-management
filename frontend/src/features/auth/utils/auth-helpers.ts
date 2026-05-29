import {
    getToken,
} from "./auth-storage";

import {
    useAuthStore,
} from "../store/auth-store";

export function isAuthenticated() {

    return !!getToken();
}

export function getAuthUser() {

    return useAuthStore
        .getState()
        .user;
}

export function hasRole(
    role: string
) {

    const user =
        getAuthUser();

    return (
        user?.role === role
    );
}

export function hasAnyRole(
    roles: string[]
) {

    const user =
        getAuthUser();

    return roles.includes(
        user?.role || ""
    );
}

export function isAdmin() {

    return hasAnyRole([
        "super_admin",
        "owner",
        "manager",
    ]);
}

export function canAccessKitchen() {

    return hasAnyRole([
        "super_admin",
        "manager",
        "kitchen_staff",
    ]);
}

export function canAccessPOS() {

    return hasAnyRole([
        "super_admin",
        "manager",
        "cashier",
    ]);
}

export function canManageInventory() {

    return hasAnyRole([
        "super_admin",
        "manager",
    ]);
}

export function redirectAfterLogin(
    role: string
) {

    switch (role) {

        case "super_admin":
            return "/dashboard";

        case "owner":
            return "/dashboard";

        case "manager":
            return "/dashboard";

        case "cashier":
            return "/pos";

        case "waiter":
            return "/waiter";

        case "kitchen_staff":
            return "/kitchen";

        default:
            return "/";
    }
}