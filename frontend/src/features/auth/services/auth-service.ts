import {
    loginApi,
    logoutApi,
    meApi,
    registerApi,
} from "../api/auth-api";

export const authService = {

    login: loginApi,

    register: registerApi,

    logout: logoutApi,

    me: meApi,

};