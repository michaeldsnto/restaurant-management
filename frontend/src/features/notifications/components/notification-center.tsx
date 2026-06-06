import {
    useNotifications,
} from "../hooks/use-notifications";

import NotificationList
    from "./notification-list";

export default function NotificationCenter() {

    const {
        data,
    } =
        useNotifications();

    return (

        <NotificationList
            notifications={
                data?.data ?? []
            }
        />

    );

}