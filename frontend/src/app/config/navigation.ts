import {
  LayoutDashboard,
  ShoppingCart,
  ChefHat,
  CalendarDays,
  Boxes,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [

  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },

  {
    label: "POS",
    href: "/pos",
    icon: ShoppingCart,
  },

  {
    label: "Kitchen",
    href: "/kitchen",
    icon: ChefHat,
  },

  {
    label: "Reservations",
    href: "/reservations",
    icon: CalendarDays,
  },

  {
    label: "Inventory",
    href: "/inventory",
    icon: Boxes,
  },

  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },

];