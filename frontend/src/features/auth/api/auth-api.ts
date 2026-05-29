import { api } from "@/api/axios";

import type {
    LoginPayload,
    RegisterPayload,
} from "../types/auth";

export async function loginApi(
    payload: LoginPayload
) {

    const response =
        await api.post(
            "/auth/login",
            payload
        );

    return response.data;
}

export async function registerApi(
    payload: RegisterPayload
) {

    const response =
        await api.post(
            "/auth/register",
            payload
        );

    return response.data;
}

export async function logoutApi() {

    const response =
        await api.post(
            "/auth/logout"
        );

    return response.data;
}

export async function meApi() {

    const response =
        await api.get(
            "/auth/me"
        );

    return response.data;
}