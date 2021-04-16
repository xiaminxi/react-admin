/*
 * @Author: xiaminxi
 * @Date: 2020-08-29 18:03:45
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-08-29 19:23:41
 * @Description: 常用工具文件
 */
/**
 * @description: 处理序号
 * @param {number}  pageNum 当前页
 * @param {number}  pageSize 当前页条数
 * @param {number}  index 当前数据位置
 * @return {number} 处理好的序号
 */
export const orderByIndex = (pageNum, pageSize, index) => pageNum === 1 ? index + 1 : (pageSize * pageNum - pageSize) + (index + 1)