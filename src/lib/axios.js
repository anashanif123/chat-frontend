import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-backend-o9kj5b3uo-anas-projects-dfbef841.vercel.app/api', // Use /api if your backend routes are prefixed with /api
    withCredentials: true,
});