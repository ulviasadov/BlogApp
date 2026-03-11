import api from "./axios";

export const loginUser = async (data) => {
  return await api.post("/account/signup", data);
};

export const registerUser = async (formData) => {
  return await api.post("/account/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logoutUser = async () => {
  return await api.post("/account/logout");
};