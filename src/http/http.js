import Axios from 'axios';

const http = Axios.create({
    baseURL: 'http://192.168.77.221:3000',
    timeout: 30000
});

http.interceptors.request.use(config => {
    return config;
});

http.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error.response);
});

export default http;