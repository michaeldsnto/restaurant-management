import { Outlet } from "react-router-dom";

export default function PosLayout() {

    return (

        <div className="
      min-h-screen
      bg-zinc-950
      text-white
    ">

            <div className="
        border-b
        border-zinc-800
        bg-zinc-900/50
        px-6
        py-4
      ">

                <h1 className="
          text-xl
          font-bold
        ">
                    POS System
                </h1>

            </div>

            <main className="p-6">

                <Outlet />

            </main>

        </div>

    );
}