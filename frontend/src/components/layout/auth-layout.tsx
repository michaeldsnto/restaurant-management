import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (

        <div className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-zinc-950
      px-4
    ">

            <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_35%)]
      " />

            <div className="
        relative
        z-10
        w-full
        max-w-md
      ">

                <Outlet />

            </div>

        </div>

    );
}