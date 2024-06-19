
import { instance, protectedInstance } from "./instance";

// Define the user services
const userServices = {
    // Register a new user
    register: async (name, email, password) => {
        try {
            console.log('Register request data:', { name, username: email, password });

            // Perform user registration by making a POST request to the register endpoint
            const response = await protectedInstance.post('/users', { 
                name, 
                username: email, 
                password 
            });

            // Return the response
            return response.data;
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Server Error:", error.response.data);
            } else if (error.request) {
                // Request was made but no response received
                console.error("Network Error:", error.request);
            } else {
                // Something happened in setting up the request
                console.error("Error:", error.message);
            }
            // Handle any errors that occur during registration
            throw error;
        }
    },
    // Log in a user
    login: async (email, password) => {
        try {
            console.log('Login request data:', {username: email, password });
            // Perform user login by making a POST request to the login endpoint
            const response = await protectedInstance.post('/users/login', { 
                username: email, 
                password 
            });

            // Return the response
            return response.data;
        } catch (error) {
            // Handle any errors that occur during login
            throw error;
        }
    },
    // Log out a user
    logout: async () => {
        try {
            const response = await protectedInstance.post('/users/logout');
            return response.data;
        } catch (error) {
            // Handle any errors that occur during logout
            throw error;
        }
    },
    //get the currently logged in user
    // getUser:async()=>{
    //     return await protectedInstance.get('/users')
    // }
    getUser: async () => {
        try {
            const response = await protectedInstance.get('/users/profile');
            console.log('Fetched user data:', response.data);
            return response.data; // Return the user data directly
        } catch (error) {
            // Handle any errors that occur during the request
            throw error;
        }
    }
};

// Export the user services
export default userServices;
