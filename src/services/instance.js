import axios from "axios";

// Defining the base URL for the API
const baseURL = 'http://localhost:3001';

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
    
export { instance, protectedInstance };
