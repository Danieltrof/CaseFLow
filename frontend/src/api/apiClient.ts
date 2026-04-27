import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5258/api",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("caseflow_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;