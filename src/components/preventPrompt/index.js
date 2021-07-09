/*
 * @Author: xiaminxi
 * @Date: 2021-06-15 14:39:20
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-06-15 15:15:28
 * @Description: 请输入文件说明
 */
import React, { Component } from 'react'
import { Prompt } from 'react-router'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

export default class index extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
             
        }
    }
    
    static propTypes = {
        done: PropTypes.bool.isRequired
    }

    handleMessage = (location) => {
        const { done } = this.props
        if(!done){
            Modal.confirm({
                title: '当前页面操作未保存， 是否离开?',
                // content: 'Some descriptions',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',

                onOk: () => {
                    // this.props.history.push(location.pathname)
                },
                onCancel() {
                    return false
                },
            })
        }else{
            return true
        }
    }

    render() {
        return (
            <Prompt message={this.handleMessage}/>
        )
    }
}
