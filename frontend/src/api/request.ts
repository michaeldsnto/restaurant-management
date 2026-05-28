import type { AxiosRequestConfig } from "axios";

import { api } from "./axios";

import { handleApiResponse } from "./api-response";

export const get = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {

    const response =
        await api.get(url, config);

    return handleApiResponse<T>(response);
};

export const post = async <T>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig
): Promise<T> => {

    const response =
        await api.post(url, payload, config);

    return handleApiResponse<T>(response);
};

export const put = async <T>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig
): Promise<T> => {

    const response =
        await api.put(url, payload, config);

    return handleApiResponse<T>(response);
};

export const remove = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {

    const response =
        await api.delete(url, config);

    return handleApiResponse<T>(response);
};