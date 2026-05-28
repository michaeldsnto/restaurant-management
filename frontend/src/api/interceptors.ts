import { api } from "./axios";

import { authStorage }
  from "@/services/auth-storage";

api.interceptors.request.use(
  (config) => {

    const token =
      authStorage.getAccessToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(

  (response) => response,

  async (error) => {

    if (error.response?.status === 401) {

      authStorage.clear();

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);