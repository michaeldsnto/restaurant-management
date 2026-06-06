import type {
    Notification,
} from "../types/notification";

interface Props {
    notification: Notification;
}

export default function NotificationCard({
    notification,
}: Props) {

    return (

        <div
            className="
      rounded-xl
      border
      p-4
      shadow-sm
    "
        >

            <h3
                className="
        font-semibold
      "
            >
                {
                    notification.title
                }
            </h3>

            <p
                className="
        mt-2
        text-sm
        text-zinc-500
      "
            >
                {
                    notification.message
                }
            </p>

        </div>

    );

}