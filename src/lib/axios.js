import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend-q5muc2jd8-anas-projects-dfbef841.vercel.app", // <-- updated backend URL
  withCredentials: true,
});