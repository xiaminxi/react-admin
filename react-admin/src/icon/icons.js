/*
 * @Author: xiaminxi
 * @Date: 2021-03-09 16:27:43
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-09 20:07:00
 * @Description: 请输入文件说明
 */
import React from 'react'
import PropTypes from 'prop-types'
import Icon, { createFromIconfontCN, HomeOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        "//at.alicdn.com/t/font_664079_ng1t17evpb9.js",
        "//at.alicdn.com/t/font_664079_prgu8mawapc.js",
    ],
});

function Icons(props) {
    const svgComponent = (
        <svg className="icon" aria-hidden="true" style={{ width: props.width, height: props.height }} >
            <use href={props.type.includes("icon") ? `#${props.type}` : `#icon-${props.type}`}></use>
        </svg>
    )
    return <Icon component={() => svgComponent} />
}

Icons.defaultProps = {
    width: 20,
    height: 20,
}

Icons.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.string.isRequired,
}

// function Icons(props) {
//     return <IconFont type={props.type.includes("icon") ? props.type : `icon-${props.type}`} style={props.style} />
// }

// Icons.defaultProps = {
//     style: {
//         fontSize: "2em",
//     }
// }

// Icons.propTypes = {
//     style: PropTypes.object,
//     fontSize: PropTypes.string,
//     type: PropTypes.string.isRequired,
// }

export default Icons