import instance from "./instance";

const authServices = {
  register: async (data) => {
    return await instance.post("/auth/register", data);
  },
  login: async (data) => {
    try {
      const response = await instance.post("/auth/login", data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log("Login successful, token stored:", token);
      return response.data; // Return the response data for further use
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please check your credentials.");
    }
  },
  forgotPassword: async (data) => {
    return await instance.post("/auth/forgot-password", data);
  },
  resetPassword: async (token, data) => {
    return await instance.post(`/auth/reset-password/${token}`, data);
  },
};

const handleLogin = async (email, password) => {
  try {
    await authServices.login({ email, password });
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Login successful, token stored:", token);
    } else {
      console.error("Login failed, token not found");
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default authServices;
