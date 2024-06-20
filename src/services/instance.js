import axios from "axios";

// Defining the base URL for the API
const baseURL = 'https://crm-backend-7-cu7u.onrender.com';

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
