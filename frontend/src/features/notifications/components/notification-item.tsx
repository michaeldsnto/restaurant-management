import {
    Trash2,
    Check,
} from "lucide-react";

import type {
    Notification,
} from "../types/notification";

import {
    formatNotificationDate,
} from "../utils/notification-formatters";

import {
    getNotificationIcon,
} from "../utils/notification-helpers";

interface Props {

    notification:
    Notification;

    onRead?: (
        id: number
    ) => void;

    onDelete?: (
        id: number
    ) => void;

}

export default function NotificationItem({
    notification,
    onRead,
    onDelete,
}: Props) {

    return (

        <div
            className={`
      border-b
      p-4
      transition
      hover:bg-zinc-50
      dark:hover:bg-zinc-800
      ${!notification.is_read
                    ? "bg-blue-50 dark:bg-blue-950/20"
                    : ""
                }
    `}
        >

            <div className="flex gap-3">

                <div className="text-xl">
                    {
                        getNotificationIcon(
                            notification.type
                        )
                    }
                </div>

                <div className="flex-1">

                    <h4
                        className="
            font-semibold
          "
                    >
                        {
                            notification.title
                        }
                    </h4>

                    <p
                        className="
            mt-1
            text-sm
            text-zinc-500
          "
                    >
                        {
                            notification.message
                        }
                    </p>

                    <span
                        className="
            mt-2
            block
            text-xs
            text-zinc-400
          "
                    >
                        {
                            formatNotificationDate(
                                notification.created_at
                            )
                        }
                    </span>

                </div>

                <div
                    className="
          flex
          gap-2
        "
                >

                    {!notification.is_read && (
                        <button
                            onClick={() =>
                                onRead?.(
                                    notification.id
                                )
                            }
                        >
                            <Check size={18} />
                        </button>
                    )}

                    <button
                        onClick={() =>
                            onDelete?.(
                                notification.id
                            )
                        }
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </div>

        </div>

    );

}