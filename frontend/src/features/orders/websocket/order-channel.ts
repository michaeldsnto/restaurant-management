import Echo from "laravel-echo";

export const subscribeOrderChannel =
    (
        echo: Echo<any>
    ) => {

        return echo.channel(
            "orders"
        );

    };