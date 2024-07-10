import axios from "axios";
import { API_URL } from "./api";
import { removeToken } from "./tokenStorge";

// Request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof error?.toJSON === "function") {
      const err = error?.toJSON();

      // Handle 401 Unauthorized error
      if (err?.status === 401) {
        removeToken();
        // Optionally redirect to login
        // window.location.href = "/?auth_open=1";
      }

      // Handle Network Error
      if (err?.message === "Network Error") {
        // Uncomment and implement toast notifications if needed
        // toast.warning(
        //   localStorage.getItem("i18nextLng") === "uz"
        //     ? "Internetingiz uzildi!"
        //     : "Нет подключения к Интернету!"
        // );
      }

      // Log error in development mode
      if (process.env.NODE_ENV === "development") {
        console.error(err);
      }
    }
    return Promise.reject(error);
  }
);

const Axios = (access_token = "") => {
  const token = access_token || localStorage.getItem("token");
  const defaultOptions = {
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      lang: localStorage.getItem("i18nextLng") || "uz",
    },
  };

  const instance = axios.create(defaultOptions);

  return {
    get: (url, options = {}) => instance.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => instance.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => instance.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => instance.delete(url, { ...defaultOptions, ...options }),
  };
};

export default Axios;
