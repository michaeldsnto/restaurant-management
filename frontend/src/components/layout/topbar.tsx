import { Bell, Menu, MoonStar, Search, SunMedium } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useUiStore } from "@/store/ui-store"

export function Topbar() {
  const toggleSidebar = useUiStore((state) => state.toggleSidebar)
  const theme = useUiStore((state) => state.theme)
  const setTheme = useUiStore((state) => state.setTheme)

  return (
    <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <Button variant="secondary" className="h-11 w-11 rounded-2xl px-0" onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </Button>

        <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-400 md:flex">
          <Search className="h-4 w-4" />
          <span>Search orders, menu items, reservations</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="h-11 w-11 rounded-2xl px-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
        </Button>
        <Button variant="secondary" className="h-11 w-11 rounded-2xl px-0">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-2.5">
          <p className="text-sm font-semibold text-white">Nova Owner</p>
          <p className="text-xs text-zinc-400">Restaurant Owner</p>
        </div>
      </div>
    </header>
  )
}
