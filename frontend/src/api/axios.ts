import axios from "axios";

import { API_BASE_URL } from "@/app/config/env";

export const api = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  withCredentials: true,

  timeout: 30000,
});