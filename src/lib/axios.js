import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-backend-gkj7.onrender.com/api', // Remove /api if not used in backend
    withCredentials: true,
});