import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

axios.defaults.withCredentials = true;

export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};