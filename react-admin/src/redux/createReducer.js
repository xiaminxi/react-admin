/*
 * @Author: xiaminxi
 * @Date: 2021-03-23 11:14:16
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 11:46:50
 * @Description: 请输入文件说明
 */
import { CHANGE_ACTIVEKEY, REMOVE_TABPANE } from "./actionType";

// 改变活动tab
export const changeActiveKey = newState => ({
    type: CHANGE_ACTIVEKEY,
    newState: newState,
})

// 删除tab
export const removeTabpane = newState => ({
    type: REMOVE_TABPANE,
    newState: newState
})