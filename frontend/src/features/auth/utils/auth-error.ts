import axios
    from "axios";

export function getAuthErrorMessage(
    error: unknown
): string {

    if (
        axios.isAxiosError(error)
    ) {

        const message =
            error.response?.data
                ?.message;

        if (message) {
            return message;
        }

        switch (
        error.response?.status
        ) {

            case 401:
                return "Invalid email or password.";

            case 403:
                return "You do not have permission to access this resource.";

            case 404:
                return "Authentication service not found.";

            case 422:
                return "Validation failed.";

            case 429:
                return "Too many login attempts. Please try again later.";

            case 500:
                return "Internal server error.";

            default:
                return "Authentication failed.";
        }
    }

    if (
        error instanceof Error
    ) {
        return error.message;
    }

    return "Something went wrong.";
}