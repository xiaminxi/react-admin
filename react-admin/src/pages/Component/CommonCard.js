/*
 * @Author: xiaminxi
 * @Date: 2020-08-07 17:27:56
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-11-11 22:49:35
 * @Description: 请输入文件说明
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

function CommonCard(props) {
    return (
        <Card bodyStyle={{ padding: 5, ...props.bodyStyle }} style={props.style || { padding: 10, marginBottom: 10 }} >
            {props.children}
        </Card>
    )
}

CommonCard.propTypes = {

}

export default CommonCard

