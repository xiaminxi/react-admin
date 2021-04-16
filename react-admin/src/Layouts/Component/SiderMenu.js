/*
 * @Author: xiaminxi
 * @Date: 2020-08-05 20:55:59
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 16:48:38
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\layouts\Component\SiderMenu.js
 */

import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { routerData } from '../../routes/routerConfig';
import Icons from '../../icon/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
const MenuItem = Menu.Item

function SiderMenu(props) {
    const { onMenuItemClick,activeKey } = props

    const [collapsed, setcollapsed] = useState(false)
    const [openMenuKeys, setopenMenuKeys] = useState([activeKey])


    
    const siderProps = {
        theme: "light",
        collapsible: true,
        collapsed: collapsed,
        breakpoint: "xl",
        trigger: null,
        collapsedWidth: 80,
        onBreakpoint: (broken) => setcollapsed(broken),
        onCollapse: collapsed => setcollapsed(collapsed),
    }

    const menuProps = {
        theme: "light",
        mode: "inline",
        multiple: false,
        openKeys: openMenuKeys,
        onOpenChange: keys => {
            const latestOpenKey = keys.find(key => openMenuKeys.indexOf(key) === -1);
            setopenMenuKeys(latestOpenKey ? keys.filter(item => latestOpenKey.indexOf(item) !== -1) : keys)
        },
    }

    const SubMenuProps = (item) => {
        return {
            key: item.path,
            icon: item.icon? <Icons type={item.icon} />: "",
            title: item.icon ? item.name : item.name,
        }
    }

    const renderMenu = (data) => data.map(item => {
        if (item.children) {
            return <SubMenu {...SubMenuProps(item)}>{renderMenu(item.children)}</SubMenu>
        }
        return !item.hidden && <MenuItem icon={item.icon? <Icons type={item.icon} />: ""}  key={item.path} onClick={() => onMenuItemClick(item)} ><Link to={item.path}>{item.name}</Link></MenuItem>
    });

    return (
        <Sider {...siderProps} width={260}>
            <Menu {...menuProps} >{renderMenu(routerData)}</Menu>
        </Sider>
    )
}

SiderMenu.propTypes = {
    onMenuItemClick: PropTypes.func.isRequired
}

export default SiderMenu

