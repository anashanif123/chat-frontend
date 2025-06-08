import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-backend-sandy-six.vercel.app/api', // Use /api if your backend routes are prefixed with /api
    withCredentials: true,
});