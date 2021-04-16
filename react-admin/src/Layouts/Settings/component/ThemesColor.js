/*
 * @Author: xiaminxi
 * @Date: 2020-05-22 17:38:31
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-22 17:43:27
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\index.js
 */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, message } from 'antd'
import { colorList } from "../../../themes/theme"


function ThemesColor(props) {
    const changeTheme = (color) => {
        localStorage.setItem("theme", color);
        window.less
            .modifyVars({
                // 全局主色
                "@primary-color": color,
                // 链接色
                "@link-color": color,
                // 成功色
                // "@success-color": color,
                // 警告色
                // "@warning-color": color,
                // 错误色
                // "@error-color": color,
                // 主字号
                // "@font-size-base": color,
                // 标题色
                "@heading-color": color,
                // 主文本色
                "@text-color": color,
                // 次文本色
                // "@text-color-secondary": color,
                // 失效色
                // "@disabled-color": color,
                // 组件/浮层圆角
                // "@border-radius-base": color,
                // 边框色
                "@border-color-base": color,
                // 浮层阴影
                // "@box-shadow-base": color,
                "@primary-bg": color
            })
            .then(less => {
                message.success("更换主题颜色成功")
            })
            .catch(error => {
                console.error(`Failed to update theme：`, error);
            })
    }

    useEffect(() => {
        changeTheme(localStorage.getItem("theme"))
    }, [])

    return (
        <div>
            {
                colorList.map(item => (
                    <Tooltip title={item.title} key={item.key}>
                        <div style={{ backgroundColor: item.key }} className="theme-box-warp" onClick={() => changeTheme(item.key)} ></div>
                    </Tooltip>
                ))
            }
        </div>
    )
}

ThemesColor.propTypes = {

}

export default ThemesColor

