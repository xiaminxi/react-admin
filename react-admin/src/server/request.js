/*
 * @Author: xiaminxi
 * @Date: 2020-08-27 16:08:15
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-18 17:20:54
 * @Description: 请输入文件说明
 */
import axios from "./axios"


/**
 * @description: 全局post请求方法 参数放在body里
 * @param {string} url 请求接口地址
 * @param {Object} data 请求接口参数
 * @return {Promise}
 */
export const API_POST = (url, data={}, config = {}) => {
    const axiosParams = Object.assign({}, {
        url: url,
        method: "POST",
        processData: false,
        data: data,
    }, config)
    return axios(axiosParams)
}

/**
 * @description: 全局post请求方法 参数跟在地址后
 * @param {string} url 请求接口地址
 * @param {Object} params 请求接口参数
 * @return {Promise}
 */
export const API_POST_ADRRST = (url, params={}, config = {}) => {
    const axiosParams = Object.assign({}, {
        url: url,
        method: "POST",
        params: params,
    }, config)
    return axios(axiosParams)
}

/**
 * @description: 全局get请求方法 参数跟在地址后
 * @param {string} url 请求接口地址
 * @param {Object} params 请求接口参数
 * @return {Promise}
 */
export const API_GET = (url, params={}, config = {}) => {
    const axiosParams = Object.assign({}, {
        url: url,
        method: "GET",
        params: params,
    }, config)
    return axios(axiosParams)
}

/**
 * @description: 全局get请求方法 参数跟在地址后
 * @param {string} url 请求接口地址
 * @param {Object} params 请求接口参数
 * @return {Promise}
 */
export const API_GET_BODY = (url, data={}, config = {}) => {
    const postParams = Object.assign({}, {
        url: url,
        method: "GET",
        data: data,
    }, config)
    return axios(postParams)
}