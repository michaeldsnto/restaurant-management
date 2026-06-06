import NotificationItem
    from "./notification-item";

import type {
    Notification,
} from "../types/notification";

interface Props {

    notifications:
    Notification[];

    onRead?: (
        id: number
    ) => void;

    onDelete?: (
        id: number
    ) => void;

}

export default function NotificationList({
    notifications,
    onRead,
    onDelete,
}: Props) {

    return (

        <div
            className="
      rounded-xl
      border
      bg-white
      dark:bg-zinc-900
    "
        >

            {notifications.map(
                (
                    notification
                ) => (

                    <NotificationItem
                        key={
                            notification.id
                        }
                        notification={
                            notification
                        }
                        onRead={onRead}
                        onDelete={
                            onDelete
                        }
                    />

                )
            )}

        </div>

    );

}