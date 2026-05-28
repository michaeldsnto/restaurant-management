import AppLogo
    from "@/components/common/app-logo";

import SidebarItem
    from "./sidebar-item";

import SidebarFooter
    from "./sidebar-footer";

import { navigation }
    from "@/app/config/navigation";

export default function AppSidebar() {

    return (

        <aside className="
      hidden
      h-screen
      w-72
      flex-col
      border-r
      border-zinc-800
      bg-zinc-950
      lg:flex
    ">

            <div className="
        border-b
        border-zinc-800
        px-6
        py-5
      ">

                <AppLogo />

            </div>

            <nav className="
        flex-1
        space-y-1
        overflow-y-auto
        p-4
      ">

                {navigation.map((item) => (

                    <SidebarItem
                        key={item.href}
                        item={item}
                    />

                ))}

            </nav>

            <SidebarFooter />

        </aside>

    );
}