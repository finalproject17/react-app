import axios from 'axios';

 const  axiosInstance = axios.create({
    baseURL:'http://localhost:1232'    
})


export default axiosInstance ;