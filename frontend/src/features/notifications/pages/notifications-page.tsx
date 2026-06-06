import {
    useNotifications,
} from "../hooks/use-notifications";

import NotificationList
    from "../components/notification-list";

import NotificationEmpty
    from "../components/notification-empty";

import {
    useMarkAsRead,
} from "../hooks/use-mark-as-read";

import {
    useDeleteNotification,
} from "../hooks/use-delete-notification";

export default function NotificationsPage() {

    const {
        data,
        isLoading,
    } =
        useNotifications();

    const markRead =
        useMarkAsRead();

    const deleteNotification =
        useDeleteNotification();

    if (isLoading) {
        return (
            <p>
                Loading...
            </p>
        );
    }

    const notifications =
        data?.data ?? [];

    return (

        <div
            className="
      space-y-6
    "
        >

            <div>

                <h1
                    className="
          text-3xl
          font-bold
        "
                >
                    Notifications
                </h1>

            </div>

            {notifications.length ===
                0 ? (

                <NotificationEmpty />

            ) : (

                <NotificationList
                    notifications={
                        notifications
                    }
                    onRead={(
                        id
                    ) =>
                        markRead.mutate(
                            id
                        )
                    }
                    onDelete={(
                        id
                    ) =>
                        deleteNotification.mutate(
                            id
                        )
                    }
                />

            )}

        </div>

    );

}