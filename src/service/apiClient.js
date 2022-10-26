import axios from 'axios'

const apiClient = axios.create({
    baseURL:"http://localhost:6200",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': localStorage.getItem('token') 
    }
})
export default apiClient