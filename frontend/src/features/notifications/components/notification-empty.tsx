import { Bell } from "lucide-react";

export default function NotificationEmpty() {

    return (

        <div
            className="
      flex
      flex-col
      items-center
      justify-center
      py-16
    "
        >

            <Bell
                size={64}
                className="
        text-zinc-300
      "
            />

            <h3
                className="
        mt-4
        text-lg
        font-semibold
      "
            >
                No Notifications
            </h3>

            <p
                className="
        text-zinc-500
      "
            >
                Everything looks good.
            </p>

        </div>

    );

}