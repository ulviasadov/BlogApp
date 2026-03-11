import api from "./axios";

export const loginUser = async (data) => {
  return await api.post("/auth/login", data);
};

export const registerUser = async (formData) => {
  return await api.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logoutUser = async () => {
  return await api.post("/auth/logout");
};