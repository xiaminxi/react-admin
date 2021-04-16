/*
 * @Author: xiaminxi
 * @Date: 2020-11-21 02:56:02
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-11 16:54:43
 * @Description: 请输入文件说明
 */
import React from 'react'
import BaseLayout from "./Layouts/BaseLayout";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function RouterConfig({ history, app }) {
    return (
        <Router  >
            <Route path="/" render={props => <BaseLayout {...props} />} />
        </Router>
    )
}

export default RouterConfig