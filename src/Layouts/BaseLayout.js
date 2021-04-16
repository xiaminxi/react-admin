/*
 * @Author: xiaminxi
 * @Date: 2020-08-05 20:53:27
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-04-15 19:37:09
 * @Description: 页面布局文件
 */
import React, { Component } from 'react'
import { Layout, Tabs, Dropdown, Menu, Spin, } from 'antd';
import SiderMenu from './Component/SiderMenu';
import CommonHeader from './Component/CommonHeader';
import { Route } from 'react-router-dom'
import Settings from './Settings/Settings';
import store from '../redux/index'
import { changeActiveKey, removeTabpane } from '../redux/createReducer';
import { LoadingOutlined } from '@ant-design/icons';

const { Footer, Content } = Layout
const { TabPane } = Tabs;

export default class BaseLayout extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.changeStore)
    }

    changeStore = () => {
        this.setState(store.getState())
    }

    componentDidMount() {
        const { props } = this
        this.setState({ activeKey: props.location.pathname })
    }

    componentWillReceiveProps(props, state) {
        console.log(props, state)
        this.setState({ activeKey: props.location.pathname })
    }

    // 插入标签页
    insertTabPane = (item) => {
        let { tabpaneList = [] } = this.state
        const reuslt = tabpaneList.filter(findItem => findItem.key === item.path)
        if (reuslt.length) {
            store.dispatch(changeActiveKey({ activeKey: item.path }))
        } else {
            tabpaneList.push({
                key: item.path,
                title: item.name,
                component: item.component
            })
            this.setState({ tabpaneList, activeKey: item.path })
        }
        localStorage.setItem("tabpaneList", JSON.stringify(tabpaneList))
        // 点击菜单是否需要刷新页面
        // this.refreshCurrent()
    }

    // 切换标签页
    onTabClick = (activeKey) => {
        store.dispatch(changeActiveKey({ activeKey }))
        this.props.history.push({ pathname: activeKey })
    }

    // 点击关闭标签页
    deleteTabPane = (targetKey, action) => this[action]("closeCurrent", targetKey);

    // 关闭标签页
    remove = (operationType, targetKey) => {
        console.log(targetKey)
        let { tabpaneList = [], activeKey } = this.state
        let findIndex = tabpaneList.findIndex(item => item.key === targetKey)
        let activeIndex = tabpaneList.findIndex(item => item.key === activeKey)
        tabpaneList = operationType === "closeCurrent" ?
            tabpaneList.filter(item => item.key !== targetKey) : operationType === "closeOther" ?
                tabpaneList.filter(item => item.key === targetKey) : []


        activeKey = (operationType === "closeCurrent" && activeIndex === findIndex) ?
            tabpaneList[findIndex - 1].key : operationType === "closeOther" ?
                activeKey : operationType === "closeAll" ?
                    "/" : activeKey

        store.dispatch(removeTabpane({ tabpaneList, activeKey }))
        this.props.history.replace(activeKey)
    }

    // 刷新当前页
    refreshCurrent = (targetKey) => {
        this.setState({ isReload: false }, () => {
            setTimeout(() => {
                this.setState({ isReload: true })
            }, 1000);
        })
    }

    // 右键菜单事件
    tabRightClick = (key, targetKey) => {
        if (key === "refreshCurrent") {
            this[key](targetKey)
        } else {
            this.remove(key, targetKey)
        }
    }

    renderTabBar = (item) => {
        const { activeKey } = this.state
        return (
            <Dropdown overlay={(
                <Menu onClick={({ key }) => this.tabRightClick(key, item.key)} >
                    <Menu.Item key="refreshCurrent" disabled={item.key !== activeKey} >刷新当前标签页</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="closeCurrent" disabled={item.key !== activeKey} >关闭当前标签页</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="closeOther" >关闭其他标签页</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="closeAll" >关闭全部标签页</Menu.Item>
                </Menu>
            )} trigger={['contextMenu']}>
                <div onClick={() => this.onTabClick(item.key)}>{item.title}</div>
            </Dropdown>
        )
    };


    render() {
        const { activeKey = "", tabpaneList = [], isReload = true } = this.state

        return (
            <Layout style={{ width: "100%" }} >
                <SiderMenu onMenuItemClick={this.insertTabPane} activeKey={activeKey} />
                <Layout>
                    <CommonHeader activeKey={activeKey} changeOpen={this.changeOpen} />
                    <Content className="scroll-container">
                        <Tabs activeKey={activeKey} type="editable-card" hideAdd={true} onEdit={this.deleteTabPane}  >
                            {
                                tabpaneList.map(item => (
                                    <TabPane closable={item.key !== "/"} tab={this.renderTabBar(item)} key={item.key} >
                                        <Spin indicator={<LoadingOutlined style={{ fontSize: 26 }} spin />} spinning={!isReload} tip="页面加载中...">
                                            {isReload ? <Route render={props => <item.component {...props} />} /> : <div style={{ height: 300 }} ></div>}
                                        </Spin>
                                    </TabPane>
                                ))
                            }
                        </Tabs>
                    </Content>
                    <Settings visible={true}/>
                    <Footer style={{ textAlign: 'center', background: '#fff' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
                </Layout>
            </Layout>

        )
    }
}