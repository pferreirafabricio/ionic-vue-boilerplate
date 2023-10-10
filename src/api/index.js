import axios from "axios";
import { Preferences } from "@capacitor/preferences";

const baseURL = process.env.VUE_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await Preferences.get({ key: "token" });
  config.headers.Authorization = `Bearer ${token.value || null}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = "/logout";
    }

    return Promise.reject(error);
  },
);

export default api;
