/*
 * @Author: xiaminxi
 * @Date: 2019-10-12 17:42:53
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-17 17:28:02
 * @Description: 主题功能文件
 */

import { message } from "antd";

export const colorList = [
    { key: '#f5222d', title: '薄暮' },
    { key: '#fa541c', title: '火山' },
    { key: '#faad14', title: '日暮' },
    { key: '#13c2c2', title: '明青' },
    { key: '#52c412', title: '极光青' },
    { key: '#1890ff', title: '拂晓蓝（默认）' },
    { key: '#2f54eb', title: '极客蓝' },
    { key: '#722ed1', title: '酱紫' }
]

export const changeTheme = (color) => {
    console.log("点击更换主题：", color)
    localStorage.setItem("theme", color);
    window.less
        .modifyVars({
            // 全局主色
            "@primary-color": color,
            // // 链接色
            // "@link-color": color,
            // // 成功色
            // // "@success-color": color,
            // // 警告色
            // // "@warning-color": color,
            // // 错误色
            // // "@error-color": color,
            // // 主字号
            // // "@font-size-base": color,
            // // 标题色
            // "@heading-color": color,
            // // 主文本色
            // "@text-color": color,
            // // 次文本色
            // "@text-color-secondary": color,
            // // 失效色
            // // "@disabled-color": color,
            // // 组件/浮层圆角
            // "@border-radius-base": color,
            // // 边框色
            // "@border-color-base": color,
            // // 浮层阴影
            // // "@box-shadow-base": color,
            // "@primary-bg": color
        })
        .then(less => message.success("更换主题颜色成功"))
        .catch(error => {
            console.error(`Failed to update theme：`, error);
        })
}