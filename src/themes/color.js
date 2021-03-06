/*
 * @Author: xiaminxi
 * @Date: 2019-12-02 16:57:10
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-10 15:08:24
 * @Description: 主题配置文件
 */
const path = require("path")
const { generateTheme } = require("antd-theme-generator")

const options = {
    //antd包位置
    antDir: path.join(__dirname, '../../node_modules/antd'),
    // 自定义主题文件夹位置
    stylesDir: path.resolve(__dirname, 'theme.js'),
    // 自定义主题文件位置
    varFile: path.resolve(__dirname,'variables.less'),
    // 主文件位置 ===> 此处是为了不报错
    mainLessFile: path.join(__dirname, 'main.less'),
    // 模板文件位置
    indexFileName: path.resolve(__dirname, '../../../public', 'index.html'),
    // 输出位置
    outputFilePath: path.resolve(__dirname, '../../../dist', 'color.less'),
    // 需要改变的主题变量
    themeVariables: [
        // 全局主色
        '@primary-color',
        // 链接色
        '@link-color',
        // 成功色
        '@success-color',
        // 警告色
        '@warning-color',
        // 错误色
        '@error-color',
        // 主字号
        '@font-size-base',
        // 标题色
        '@heading-color',
        // 主文本色
        '@text-color',
        // 次文本色
        '@text-color-secondary',
        // 失效色
        '@disabled-color',
        // 组件/浮层圆角
        '@border-radius-base',
        // 边框色
        '@border-color-base',
        // 浮层阴影
        '@box-shadow-base',
        "@bg"
    ],
}

generateTheme(options)
    .then(less => console.log("Theme generated successfully"))
    .catch(error => console.error("Error：", error))