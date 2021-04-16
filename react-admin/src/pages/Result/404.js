/*
 * @Author: xiaminxi
 * @Date: 2020-11-11 22:42:03
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 15:37:54
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'
import { Tabs, Dropdown, Menu, Button } from 'antd'
const { TabPane } = Tabs

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
        const { activeKey = "qwerq" } = this.state

       

        const arr = [
            { title: "测试文字", content: "测试文字", key: "qwerq" },
            { title: "就是一个标题", content: "就是一个标题", key: "qqwewerq" },
            { title: "你看到的不一定是真的", content: "你看到的不一定是真的", key: "qwewqertqrq" },
            { title: "眼见也不一定为实", content: "眼见也不一定为实", key: "qwrdgfasdferq" },
        ]


        return (
           
           <div>
               <Button type="primary" >qwer</Button>
           </div>
        )
    }
}
