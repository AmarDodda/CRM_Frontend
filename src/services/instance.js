import axios from "axios";

// Defining the base URL for the API
const baseURL = process.env.REACT_APP_API_BASE_URL;

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
