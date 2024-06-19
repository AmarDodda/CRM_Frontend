import axios from "axios";

// Define the base URL for the API
const baseURL = 'http://localhost:3001';

// Define the instance
const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
    
// Export the instances
export { instance, protectedInstance };
