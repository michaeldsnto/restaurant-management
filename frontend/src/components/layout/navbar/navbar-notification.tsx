import { Bell } from "lucide-react";

export default function NavbarNotification() {

    return (

        <button className="
      relative
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      p-3
      transition-all
      hover:bg-zinc-800
    ">

            <Bell size={18} />

            <span className="
        absolute
        right-2
        top-2
        h-2
        w-2
        rounded-full
        bg-red-500
      " />

        </button>

    );
}