/*
 * @Author: xiaminxi
 * @Date: 2021-03-09 18:04:08
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-04-16 10:31:44
 * @Description: 请输入文件说明
 */
import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Drawer } from 'antd'
import Icons from '../../icon/icons'
import ThemesColor from './component/ThemesColor'





function Settings(props) {
    const [visible, setVisible] = useState(true)
    useEffect(() =>{
        setVisible(!visible)
    },[]) // eslint-disable-line 
    // 笑死这样居然不报错


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


