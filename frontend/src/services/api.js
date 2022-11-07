import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

axios.defaults.withCredentials = true;

export const login = async (user) => {
  return (await axios.post(`${API_URL}/login`, { user })).data;
};