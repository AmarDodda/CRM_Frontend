import { instance, protectedInstance } from "./instance";

const consumerServices = {
    register: async (name, email, password) => {
        try {
            console.log('Register request data:', { name, username: email, password });

            const response = await protectedInstance.post('/api/consumers/consumerregister', { 
                name, 
                username: email, 
                password 
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
            const response = await protectedInstance.post('/api/consumers/consumerlogin', { 
                username: email, 
                password 
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        try {
            const response = await protectedInstance.post('/api/consumers/consumerlogout');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getConsumer: async () => {
        try {
            const response = await protectedInstance.get('/api/consumers/profile'); 
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default consumerServices;
