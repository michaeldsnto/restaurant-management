import { create } from "zustand";

import type {
    Notification,
} from "../types/notification";

interface NotificationStore {

    notifications:
    Notification[];

    unreadCount:
    number;

    setNotifications: (
        notifications:
            Notification[]
    ) => void;

    setUnreadCount: (
        count: number
    ) => void;

    addNotification: (
        notification:
            Notification
    ) => void;

}

export const
    useNotificationStore =
        create<
            NotificationStore
        >((set) => ({

            notifications: [],

            unreadCount: 0,

            setNotifications:
                (
                    notifications
                ) =>
                    set({
                        notifications,
                    }),

            setUnreadCount:
                (
                    unreadCount
                ) =>
                    set({
                        unreadCount,
                    }),

            addNotification:
                (
                    notification
                ) =>
                    set(
                        (
                            state
                        ) => ({

                            notifications:
                                [
                                    notification,
                                    ...state.notifications,
                                ],

                            unreadCount:
                                state.unreadCount +
                                1,

                        })
                    ),

        }));