import { createBrowserRouter } from "react-router-dom"

import { AppShell } from "@/layouts/app-shell"
import { AnalyticsPage } from "@/pages/analytics-page"
import { DashboardPage } from "@/pages/dashboard-page"
import { InventoryPage } from "@/pages/inventory-page"
import { KitchenPage } from "@/pages/kitchen-page"
import { LoginPage } from "@/pages/login-page"
import { PosPage } from "@/pages/pos-page"
import { ReservationsPage } from "@/pages/reservations-page"
import { SettingsPage } from "@/pages/settings-page"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "pos",
        element: <PosPage />,
      },
      {
        path: "kitchen",
        element: <KitchenPage />,
      },
      {
        path: "reservations",
        element: <ReservationsPage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
])
