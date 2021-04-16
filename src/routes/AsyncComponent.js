/*
 * @Author: xiaminxi
 * @Date: 2020-08-05 22:36:49
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-22 17:31:04
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\AsyncComponent.js
 */
import React, { Component } from "react";

const AsyncComponent = (title, importComponent) => {

    class Classre extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            console.log(title)
            window.document.title = title
            const { default: component } = await importComponent();
            this.setState({ component: component });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return Classre;
}

const getComponent = (title, path) => AsyncComponent(title, () => import(`../pages${path}`));
export default getComponent