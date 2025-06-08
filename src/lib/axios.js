import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-backend-pi-six.vercel.app/api', // Remove /api if not used in backend
    withCredentials: true,
});