import axios from 'axios'

const BASE_URL = 'http://localhost:8000/'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt-token') || ''
    }
})

export default {}