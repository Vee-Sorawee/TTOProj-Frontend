import axios from 'axios'

const apiClient = axios.create({
    baseURL:"https://tto-project-backend.herokuapp.com",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})
export default apiClient