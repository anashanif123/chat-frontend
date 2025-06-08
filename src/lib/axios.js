import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-backend-pi-six.vercel.app/api', // <-- add /api for correct routing
    withCredentials: true,
});