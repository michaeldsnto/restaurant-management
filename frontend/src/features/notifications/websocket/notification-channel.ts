import Echo from "laravel-echo";

export const
    notificationChannel =
        (
            echo: Echo<any>
        ) => {

            return echo.private(
                "notifications"
            );

        };