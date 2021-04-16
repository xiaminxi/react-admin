/*
 * @Author: xiaminxi
 * @Date: 2020-11-11 22:42:03
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 17:35:17
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'
import {  Dropdown, Menu, Button } from 'antd'

export default class Nopage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.api())
    }
    
    componentDidMount() {
        console.log(1231546564456, "shu")
    }
    


    onChange = (activeKey) => {
        console.log(activeKey,111111111111)
        this.setState({ activeKey })
    }
     renderTabBar = (item) => {
        console.log(item)
        return (

             
                    <Dropdown overlay={(
                    <Menu onClick={this.onChange}>
                        <Menu.Item key="closeCurrent" >
                            <div>关闭当前标签页</div>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="closeOther" >
                            <div>关闭其他标签页</div>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="closeAll">
                            <div >关闭全部标签页</div>
                        </Menu.Item>
                    </Menu>
                )} trigger={['contextMenu']}>
                   <div > {item.title}</div>
                </Dropdown>
        )
    };
    render() {


        return (
           
           <div>
               <Button type="primary" >qwer</Button>
           </div>
        )
    }
}
