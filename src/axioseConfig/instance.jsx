import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'http://localhost:3000',
  baseURL: "https://deploying-backend-taupe.vercel.app/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = ` ${token}`;
  }
  return config;
});


export default axiosInstance;




