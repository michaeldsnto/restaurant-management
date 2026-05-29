import {
    Bell,
} from "lucide-react";

export default function DashboardHeader() {

    return (

        <div className="
      flex
      flex-col
      gap-5
      lg:flex-row
      lg:items-center
      lg:justify-between
    ">

            <div>

                <h1 className="
          text-3xl
          font-bold
          tracking-tight
          text-white
        ">
                    Dashboard Overview
                </h1>

                <p className="
          mt-2
          text-zinc-400
        ">
                    Monitor restaurant operations
                    and realtime performance.
                </p>

            </div>

            <button className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
      ">

                <Bell
                    className="
            text-zinc-300
          "
                />

            </button>

        </div>

    );
}