import axios from "axios";

const DB_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

axios.defaults.withCredentials = true;

export const login = async (data) => {
  return (await axios.post(`${DB_URL}/login`, data)).data;
};

export const getPosts = async (data) => {
  return (await axios.get(`${DB_URL}/posts`, data)).data;
};

export const getPostById = async (id) => {
  return (await axios.get(`${DB_URL}/posts/${id}`)).data;
};

export const addPost = async (data) => {
  return (await axios.post(`${DB_URL}/posts`, data)).data;
};

export const deletePost = async (id) => {
  return (await axios.delete(`${DB_URL}/posts/${id}`)).data;
}

export const getWorkshops = async (data) => {
  return (await axios.get(`${DB_URL}/workshops`, data)).data;
};

export const getWorkshopById = async (id) => {
  return (await axios.get(`${DB_URL}/workshops/${id}`)).data;
};
