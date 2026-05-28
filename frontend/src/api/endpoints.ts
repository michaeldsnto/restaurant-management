export const ENDPOINTS = {

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    PROFILE: "/auth/profile",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },

  DASHBOARD: {
    STATS: "/dashboard/stats",
    SALES: "/dashboard/sales",
  },

  POS: {
    CREATE_ORDER: "/orders",
    ORDER_HISTORY: "/orders/history",
  },

  MENU: {
    LIST: "/menu-items",
    CREATE: "/menu-items",
  },

  INVENTORY: {
    INGREDIENTS: "/ingredients",
    STOCKS: "/ingredient-stocks",
  },

  RESERVATIONS: {
    LIST: "/reservations",
    CREATE: "/reservations",
  },

};