import clsx from "clsx";

import {
    NavLink,
} from "react-router-dom";

type Props = {

    item: {
        label: string;
        href: string;
        icon: React.ElementType;
    };

};

export default function SidebarItem({
    item,
}: Props) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.href}
            className={({ isActive }) =>

                clsx(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",

                    isActive
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                )
            }
        >

            <Icon size={18} />

            <span>{item.label}</span>

        </NavLink>

    );
}