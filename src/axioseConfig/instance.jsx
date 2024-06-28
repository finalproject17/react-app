import axios from 'axios';
const axiosInstance = axios.create({
 baseURL: "https://deploying-backend-taupe.vercel.app/",
//  baseURL: "http://localhost:3001",
});

export default axiosInstance ;