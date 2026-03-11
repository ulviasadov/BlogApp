import api from "./axios";

export const getPosts = async () => {
  return await api.get("/post");
};

export const createPost = async (data) => {
  return await api.post("/post", data);
};