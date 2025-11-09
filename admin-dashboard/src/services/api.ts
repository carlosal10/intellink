import axios from 'axios';

const API_BASE_URL = 'https://intellink-8w9t.onrender.com/api'; // Replace with your actual API URL

// Function to set up axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to handle GET requests
export const get = async (url: string) => {
    const response = await apiClient.get(url);
    return response.data;
};

// Function to handle POST requests
export const post = async (url: string, data: any) => {
    const response = await apiClient.post(url, data);
    return response.data;
};

// Function to handle PUT requests
export const put = async (url: string, data: any) => {
    const response = await apiClient.put(url, data);
    return response.data;
};

// Function to handle DELETE requests
export const del = async (url: string) => {
    const response = await apiClient.delete(url);
    return response.data;
};