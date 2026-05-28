import axios from "axios";

export class ApiError extends Error {

    status?: number;

    errors?: Record<string, string[]>;

    constructor(
        message: string,
        status?: number,
        errors?: Record<string, string[]>
    ) {
        super(message);

        this.name = "ApiError";

        this.status = status;

        this.errors = errors;
    }
}

export const normalizeApiError = (
    error: unknown
): ApiError => {

    if (axios.isAxiosError(error)) {

        const response = error.response;

        return new ApiError(
            response?.data?.message ||
            "Something went wrong",

            response?.status,

            response?.data?.errors
        );
    }

    return new ApiError(
        "Unexpected error occurred"
    );
};