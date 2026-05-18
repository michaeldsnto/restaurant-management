import {
  BarChart3,
  ChefHat,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  UtensilsCrossed,
  CalendarDays,
} from "lucide-react"
import { NavLink } from "react-router-dom"

import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/ui-store"

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/pos", label: "POS", icon: ShoppingCart },
  { to: "/kitchen", label: "Kitchen", icon: ChefHat },
  { to: "/reservations", label: "Reservations", icon: CalendarDays },
  { to: "/inventory", label: "Inventory", icon: Package },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const sidebarOpen = useUiStore((state) => state.sidebarOpen)

  return (
    <aside
      className={cn(
        "flex h-full flex-col rounded-[30px] border border-white/10 bg-zinc-950/70 p-4 transition-all duration-300",
        sidebarOpen ? "w-[280px]" : "w-[92px]",
      )}
    >
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-zinc-950">
          <UtensilsCrossed className="h-5 w-5" />
        </div>
        {sidebarOpen ? (
          <div>
            <p className="text-sm font-semibold text-white">Nova RMS</p>
            <p className="text-xs text-zinc-400">Multi-branch operations</p>
          </div>
        ) : null}
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition duration-200",
                  isActive
                    ? "bg-white text-zinc-950"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white",
                )
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {sidebarOpen ? <span>{item.label}</span> : null}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
