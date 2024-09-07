import axios from "axios";

const api = axios.create({
    baseURL: 'https://frontend-mentor-apis-6efy.onrender.com', 
    timeout: 10000, 
});
export default api;