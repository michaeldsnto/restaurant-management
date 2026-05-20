import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

export function AppShell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_24%),linear-gradient(180deg,#09090b_0%,#111827_100%)] p-4 text-white lg:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1600px] gap-4 lg:gap-6">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="flex-1 space-y-4 lg:space-y-6">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </div>
  )
}
