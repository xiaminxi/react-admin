/*
 * @Author: xiaminxi
 * @Date: 2020-08-27 17:14:52
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-08-27 18:19:44
 * @Description: 请求服务相关工具
 */
import React from 'react'
import Cookies from 'js-cookie';

import { notification } from 'antd';


// 网络代码
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

// 业务代码
const responseCode = {
    success: 200
}

// 系统提示
const systemTips = {
    error: (response, data, errorText) => {
        notification.error({
            message: "系统提示",
            description: <div >
                <p style={{ wordBreak: "break-all", margin: "3px auto" }}>状态：{`${data.code}`}</p>
                <p style={{ wordBreak: "break-all", margin: "3px auto" }}>信息：{`${data.message}`}</p>
                <p style={{ wordBreak: "break-all", margin: "3px auto" }}>地址：{`${response.config.url}`}</p>
                <p style={{ wordBreak: "break-all", margin: "3px auto" }}>服务器信息：{`${errorText}`}</p>
            </div>
        })
        return Promise.reject(data)
    }
}

// 检测请求状态
export const checkStatus = (response = {}) => {
    const { status, data, statusText } = response
    // 绝对成功
    if (status >= 200 && data.code === responseCode.success) return data
    // 错误路径
    return systemTips.error(response, data, codeMessage[status] || statusText)
}

// 系统标识
const systemCode = {
    code: "plat"
}

// 全局cookie
export const cookie = {
    get: field => {
        return Cookies.get(`${systemCode.code}${field}`);
    },
    set: (field, value, time) => {
        Cookies.set(`${systemCode.code}${field}` + field, value, { expires: time });
    },
    remove: field => {
        Cookies.remove(`${systemCode.code}${field}` + field);
    },
};