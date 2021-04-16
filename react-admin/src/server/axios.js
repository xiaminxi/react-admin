/*
 * @Author: xiaminxi
 * @Date: 2020-08-27 15:15:55
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-01-05 21:17:50
 * @Description: 请求服务配置文件
 */
import Axios from 'axios';
import { cookie, checkStatus } from './utils';
import { HTTP_BASE_URL } from './config';
console.log(process.env)
// 创建请求实例
const axios = Axios.create({
    timeout: 60000,
    baseURL: HTTP_BASE_URL,
    validateStatus: status => {
        return status === 200 || status > 200;
    },
});

// 添加请求拦截
axios.interceptors.request.use(
    config => {
        console.log(cookie.get('token'))
        const token = cookie.get("token")
        var a = token ? cookie.set('token', token, 2 / 24) : null
        const userInfo = cookie.get("userInfo")
        var b = userInfo ? cookie.set('userInfo', userInfo, 2 / 24) : null
        config.headers = {
            sysCode: "MXL_MANAGE",
            'Content-Type': 'application/json',
            accessToken: cookie.get('token'),
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => checkStatus(response),
    error => {
        return Promise.reject({ message: error })
    }
);

export default axios