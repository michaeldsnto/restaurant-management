import { Outlet } from "react-router-dom";

export default function KitchenLayout() {

    return (

        <div className="
      min-h-screen
      bg-black
      text-white
    ">

            <header className="
        border-b
        border-zinc-800
        bg-zinc-950
        px-8
        py-5
      ">

                <div className="
          flex
          items-center
          justify-between
        ">

                    <h1 className="
            text-2xl
            font-bold
          ">
                        Kitchen Display System
                    </h1>

                    <div className="
            rounded-full
            bg-emerald-500/15
            px-4
            py-2
            text-sm
            font-medium
            text-emerald-400
          ">
                        Live Orders
                    </div>

                </div>

            </header>

            <main className="p-6">

                <Outlet />

            </main>

        </div>

    );
}