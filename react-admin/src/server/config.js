/*
 * @Author: xiaminxi
 * @Date: 2020-08-27 16:02:37
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-18 16:55:27
 * @Description: 请求地址配置文件
 */
// 配置请求地址
const HTTP = {
    // 开发地址
    development: 'http://192.168.1.155:8121',
    // dev: 'http://112.74.44.15:8104/',
    // dev: 'http://192.168.1.155:8104/',
    // 测试地址
    // test: 'http://test-api.manage.rent.work/',
    test: 'http://192.168.1.155:8121',
    // 生产地址
    production: 'http://api.manage.rent.work/',
};
export const HTTP_BASE_URL = HTTP[process.env.NODE_ENV]