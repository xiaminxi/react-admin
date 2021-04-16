/*
 * @Author: xiaminxi
 * @Date: 2021-02-22 19:50:17
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 11:47:25
 * @Description: 请输入文件说明
 */
import { CHANGE_ACTIVEKEY, REMOVE_TABPANE } from "./actionType"
import getComponent from "../routes/AsyncComponent"

const getLocalRoute = () => {
    try {
        let tabpaneList = JSON.parse(localStorage.getItem("tabpaneList"))
        tabpaneList.map(item => item.component = item.key === "/" ? getComponent(item.title, "/HomePage/index") : getComponent(item.title, item.key))
        return tabpaneList
    } catch (err) {
        return [
            {
                key: "/",
                title: "首页",
                closable: false,
                componet: getComponent("首页", "/HomePage/index"),
            }
        ]
    }
}

const defaultState = {
    visible: false,
    tabpaneList: getLocalRoute()

}
export default (state = defaultState, action) => {
    const { newState = {} } = action

    if (action.type === CHANGE_ACTIVEKEY) {
        return { ...state, ...newState }
    }
    if (action.type === REMOVE_TABPANE) {

        return { ...state, ...newState }
    }

    return state
}