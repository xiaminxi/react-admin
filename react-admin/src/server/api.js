/*
 * @Author: xiaminxi
 * @Date: 2020-08-27 17:21:10
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-18 16:27:34
 * @Description: 请求接口管理文件
 */
import { API_GET, API_POST } from "./request";

export const getMenuList = params => API_GET("/auth/querySysMenuList", params) 
export const submitOrderFiles = params => API_POST("/xyg/submitOrderFiles", params)