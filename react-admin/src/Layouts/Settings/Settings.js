/*
 * @Author: xiaminxi
 * @Date: 2021-03-09 18:04:08
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-22 17:44:23
 * @Description: 请输入文件说明
 */
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Descriptions, Drawer } from 'antd'
import Icons from '../../icon/icons'
import ThemesColor from './component/ThemesColor'





function Settings(props) {
    const [visible, setVisible] = useState(true)

    useEffect(() => setVisible(!visible), [])

    return (
        <Drawer maskClosable={true} width={300} visible={visible} closable={false} onClose={() => setVisible(!visible)}  >
            <Descriptions title="主题设置" >
                <Descriptions.Item>
                    <ThemesColor/>
                </Descriptions.Item>
            </Descriptions>
            <Button style={{ position: "fixed", right: 300, top: window.innerHeight / 2 }} icon={<Icons type={visible ? "guanbi" : "icon-shezhi1"} />} onClick={() => setVisible(!visible)} />
        </Drawer>
    )
}

Settings.propTypes = {

}

export default Settings


