import NotificationList
    from "./notification-list";

interface Props {
    notifications: any[];
}

export default function NotificationDropdown({
    notifications,
}: Props) {

    return (

        <div
            className="
      absolute
      right-0
      top-12
      z-50
      w-96
      rounded-xl
      border
      bg-white
      shadow-xl
      dark:bg-zinc-900
    "
        >

            <div
                className="
        border-b
        p-4
      "
            >
                <h3
                    className="
          font-semibold
        "
                >
                    Notifications
                </h3>
            </div>

            <NotificationList
                notifications={
                    notifications
                }
            />

        </div>

    );

}