import {
  createBrowserRouter,
} from "react-router-dom";

import { LoginPage }
  from "@/features/auth/pages/login-page";

import { DashboardPage }
  from "@/features/dashboard/pages/dashboard-page";

import ProtectedRoute
  from "./protected-route";

import GuestRoute
  from "./guest-route";

export const router =
  createBrowserRouter([

    {
      element: <GuestRoute />,

      children: [

        {
          path: "/login",
          element: <LoginPage />,
        },

      ],
    },

    {
      element: <ProtectedRoute />,

      children: [

        {
          path: "/",
          element: <DashboardPage />,
        },

      ],
    },

  ]);