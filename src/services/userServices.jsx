import { instance, protectedInstance } from "./instance";

const userServices = {
  register: async (name, email, password) => {
    try {
      console.log("Register request data:", {
        name,
        username: email,
        password,
      });

      const response = await protectedInstance.post("/users", {
        name,
        username: email,
        password,
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      console.log("Login request data:", { username: email, password });
      const response = await protectedInstance.post("/users/login", {
        username: email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      const response = await protectedInstance.post("/users/logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUser: async () => {
    try {
      const response = await protectedInstance.get("/users/profile");
      console.log("Fetched user data:", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
