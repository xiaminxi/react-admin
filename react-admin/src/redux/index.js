/*
 * @Author: xiaminxi
 * @Date: 2021-02-22 19:48:54
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-10 15:22:34
 * @Description: 请输入文件说明
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer)
export default store

