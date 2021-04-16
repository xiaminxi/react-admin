/*
 * @Author: xiaminxi
 * @Date: 2020-05-22 17:38:31
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-11 16:11:41
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\index.js
 */
import React from 'react'
import ReactDOM from "react-dom"
import BaseLayout from './Layouts/BaseLayout'
import { ConfigProvider } from 'antd';
import './index.less';
import zhCN from 'antd/es/locale/zh_CN';
import RouterConfig from './router';
import { Provider  } from 'react-redux'
import store from './redux';

const functionObject = {
    api: () => {
        console.log("全局api方法")
    }
}
React.Component.prototype = {
    ...functionObject,
    ...React.Component.prototype
}
ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            {/* <BaseLayout /> */}
            <RouterConfig />
        </ConfigProvider>
    </Provider>
    ,
    document.getElementById("root")
)