import axios from "axios";
import {message} from 'antd';

const baseUrl = '';
const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 响应拦截器
service.interceptors.response.use(
    response => {
        const {code, data, message} = response.data;
        if (code == 200) {
            return data
        } else {
            message.error({
                content: message,
                duration: 100,
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service
