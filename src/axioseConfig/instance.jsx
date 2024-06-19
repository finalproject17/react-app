import axios from 'axios';

 const  axiosInstance = axios.create({
    baseURL:'https://deploying-backend-taupe.vercel.app'    
})


export default axiosInstance ;