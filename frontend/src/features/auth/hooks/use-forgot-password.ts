import { useMutation }
    from "@tanstack/react-query";

import { api }
    from "@/api/axios";

interface Payload {
    email: string;
}

async function forgotPasswordApi(
    payload: Payload
) {

    const response =
        await api.post(
            "/auth/forgot-password",
            payload
        );

    return response.data;
}

export function useForgotPassword() {

    return useMutation({

        mutationFn:
            forgotPasswordApi,

    });
}