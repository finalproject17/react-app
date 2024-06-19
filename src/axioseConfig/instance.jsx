import axios from 'axios';


          const axiosInstance = axios.create({
            baseURL: "https://deploying-backend-taupe.vercel.app/",
            // baseURL: "https://localhost:3009",
          });

export default axiosInstance ;