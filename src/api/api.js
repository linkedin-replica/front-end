import axios from 'axios'

const BASE_URL = 'http://localhost:8081/api/'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(config => {
    config.headers['access-token'] = localStorage.getItem('access-token') || ''
    console.log(config.headers['access-token'])
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
        localStorage.setItem('access-token', newToken)
    },
    initChat: (receiverId) => {
        return axiosInstance.get('chat/register', { params: { receiverId } })
    }
}
