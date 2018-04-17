import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(config => {
    config.headers['access-token'] = localStorage.getItem('jwt-token') || ''
    return config
})

export default {
    register: (user) => {
        return axiosInstance.post('auth/register', user)
    },
    login: (user) => {
        return axiosInstance.post('auth/login', user)
    },
    saveLoginToken: (newToken) => {
        localStorage.setItem('jwt-token', newToken)
    },
    initChat: (receiverId) => {
        return axiosInstance.post('chat/register', { params: { receiverId } })
    }
}