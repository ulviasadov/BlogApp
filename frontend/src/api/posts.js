import api from "./axios";

export const getPosts = async () => {
  return await api.get("/posts");
};