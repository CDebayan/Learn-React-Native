import axios from 'axios';

export const AxiosClient = axios.create({
    baseURL: 'http://192.168.0.5:3001/apisamples/',
    timeout: 5000
})
