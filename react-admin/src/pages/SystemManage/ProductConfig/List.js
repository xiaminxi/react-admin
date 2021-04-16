/*
 * @Author: xiaminxi
 * @Date: 2020-08-05 21:40:42
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-22 17:30:30
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\pages\SystemManage\ProductConfig\List.js
 */
import React, { Component, Fragment } from 'react'
import { Form, Input } from 'antd'
import { getMenuList } from '../../../server/api'
import CommonPage from '../../Component/CommonPage'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const debounce = (cb, times = 300) => {
            let timer =null
            return (curr) => {
                clearTimeout(timer)
                timer = setTimeout(cb, times, curr.target.value);
            }
        }

        const setVal = (e) => {
            console.log(e)
        }
        const pageProps = {
            pageInit: {
                // tableParams: {
                //     menuName: "订单"
                // },
                // 单选模式
                singleMode: true,
                // 加载方法
                api: getMenuList,
                // 是否开启储存模式
                openStore: true,
                // 是否在表格最前面加上排序序号
                openSortNumber: true,
                // 操作按钮
                buttonList: [
                    { title: "删除", auth: "xiaminxi", disabled: (rows) => rows.length !== 1, onClick: (rows, keys) => this.buclick(rows, keys) },
                    {
                        title: "增加", auth: "xiaminxi", type: "primary", disabled: (rows) => {
                            return !(rows.length >= 1)
                        }, onClick: (rows, keys) => this.buclick(rows, keys)
                    },
                ]
            },
            tableProps: {
                columns: [
                    { title: '所属系统', dataIndex: 'sysName', key: 'sysName', },
                    { title: '上级菜单', dataIndex: 'parentName', key: 'parentName', },
                    { title: '菜单名称', dataIndex: 'menuName', key: 'menuName', },
                    { title: '菜单地址', dataIndex: 'menuUrl', key: 'menuUrl', },
                    { title: "授权标识", dataIndex: "menuCode", key: "menuCode", },
                    { title: "菜单图标", dataIndex: "menuIcon", key: "menuIcon", },
                    { title: '是否叶节点', dataIndex: 'menuIsLeaf', key: 'menuIsLeaf' },
                    { title: '菜单类型', dataIndex: 'menuType', key: 'menuType' },
                    { title: '菜单状态', dataIndex: 'menuStatus', key: 'menuStatus' },
                    { title: '备注', dataIndex: 'menuRemark', key: 'menuRemark', },
                ],
            },
            FormItemList: [
                <Form.Item label="菜单名称" name="menuName" key="menuName"  >
                    <Input onChange={debounce(setVal, 3000)} />
                </Form.Item>,
                <Form.Item label="上级菜单" name="parentName" key="parentName"  >
                    <Input />
                </Form.Item>,
                <Form.Item label="菜单状态" name="menuStatus" key="menuStatus" >
                    <Input />
                </Form.Item>
            ]
        }

        return (
            <CommonPage {...pageProps} />
        )
    }
}
