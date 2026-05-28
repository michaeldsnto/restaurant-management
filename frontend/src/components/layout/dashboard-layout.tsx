import { Outlet } from "react-router-dom";

import AppSidebar
    from "./sidebar/app-sidebar";

import AppNavbar
    from "./navbar/app-navbar";

export default function DashboardLayout() {

    return (

        <div className="
      flex
      min-h-screen
      bg-zinc-950
      text-white
    ">

            <AppSidebar />

            <div className="
        flex
        flex-1
        flex-col
      ">

                <AppNavbar />

                <main className="
          flex-1
          overflow-y-auto
          p-6
          lg:p-8
        ">

                    <Outlet />

                </main>

            </div>

        </div>

    );
}