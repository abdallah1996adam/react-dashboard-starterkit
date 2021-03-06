import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:4444/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export default api;
