/*
 * @Author: xiaminxi
 * @Date: 2020-08-05 20:50:19
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 12:10:15
 * @Description: 请输入文件说明
 * @FilePath: \xiaminxi.github.io\src\routes\routerConfig.js
 */

import getComponent from "./AsyncComponent"
const router = [
    {
        name: "首页",
        hidden: true,
        icon: "mianxingjiandaotubiao",
        path: "HomePage/index",
    },
    {
        name: "产品页",
        icon: "yaoguo",
        path: "productManage",
        children: [
            {
                name: "模板配置",
                path: "productTemplate/index",
                icon: "eqwrwe",
            },
            {
                name: "合同配置",
                path: "productContcar/index",
                icon: "eqwrwe",
            },
        ]
    },
    {
        icon: "xinzengquanxian",
        name: "找不到页面",
        path: "Result/404"
    },
    {
        name: "系统管理",
        path: "SystemManage",
        auth: "xiaminxi",
        icon: "yaoguo",
        children: [
            {
                name: "产品配置",
                path: "ProductConfig/List",
                icon: "yaoguo",
            },
            {
                name: "项目配置",
                path: "ProjectConfig",
                children: [
                    {
                        name: "项目配置-3",
                        path: "Contract/List"
                    },
                    {
                        name: "测试层级1",
                        path: "qwer",
                        children: [
                            {
                                name: "测试层级2",
                                path: "qwerq",
                                children: [
                                    {
                                        name: "到底了",
                                        path: "qwerqwer/List"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "合同配置",
                path: "ContractConfig",
                children: [
                    {
                        name: "菜单配置",
                        path: "MenuManage/List",
                    },
                    {
                        name: "模板配置",
                        path: "TemplateManage/List",
                    },
                ]
            },
        ]
    },
]

export const generateRouterData = (data, parentPath = "/") => {
    return data.map(item => {
        let { path } = item
        path = parentPath + item.path

        let result = { ...item, path };
        if (item.children) {
            result.children = generateRouterData(item.children, `${parentPath}${item.path}/`, item.authority);
        } else {
            result = { ...result, component: getComponent(item.name, path), }
        }
        return result;
    })
}

export const routerData = generateRouterData(router)