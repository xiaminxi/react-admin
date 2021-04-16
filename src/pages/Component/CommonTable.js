/*
 * @Author: xiaminxi
 * @Date: 2020-08-07 16:51:23
 * @LastEditors: xiaminxi
 * @LastEditTime: 2021-03-23 17:35:36
 * @Description: 请输入文件说明
 */
import { Table, Button } from 'antd'
import PropTypes from 'prop-types'
import React, * as react from 'react'
import { orderByIndex } from '../../utils/vendor'

export default class CommonTable extends react.Component {
    static propTypes = {

        rowKey: PropTypes.func,
        bordered: PropTypes.bool,
        buttonList: PropTypes.array,
        columns: PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            pageParams: {
                pageNum: 1,
                pageSize: 10
            },
            storeParams: {

            }
        }
    }

    componentDidMount() {
        const { pageParams } = this.state
        this.getTableData({ params: pageParams })
    }


    /**
     * @description: 获取远程表格数据
     * @param {object} params 获取数据的参数
     * @return {promise} 
     */
    getTableData = ({ params = {}, formParams = {}, changePage = false, formSearch = false }) => {
        const { api , tableParams={}} = this.props; if (!api) return false;
        const { storeParams = {}, pageParams = {} } = this.state
        console.log("🚀 ~ file: CommonTable.js ~ line 49 ~ CommonTable ~ pageParams", pageParams)
        let searchParams = {}
        // 如果有表单参数
        if (Object.values(formParams).length) {
            searchParams = Object.assign({}, { ...storeParams, ...formParams, ...params })
        } else {
            searchParams = Object.assign({}, { ...storeParams, ...params })
        }
        searchParams = {...searchParams, ...tableParams}
        this.setState({ loading: true, storeParams: searchParams })

        api(searchParams)
            .then(res => {
                const { rows = [] } = this.state
                const { openStore = false } = this.props
                this.setState({
                    loading: false,
                    total: res.total,
                    dataSource: res.data || [],
                    rows: openStore ? rows : [],
                    keys: openStore ? this.getKeys(rows, res.data || [], "重载") : [],
                })
            })
            .catch(res => {
                console.log(res)
                this.setState({ loading: false })
            })
    }

    /**
     * @description: 处理表格已选择的key
     * @param {array} rowstemp 已选择的行
     * @param {array} dataSource 远程加载的数据
     * @return {array} 已选择的key
     */
    getKeys = (rowstemp, dataSource, operationType) => {
        const selected = []
        const rowstem = rowstemp
        dataSource.forEach((item, itemIndex) => {
            rowstem.forEach((list, listIndex) => {
                if (JSON.stringify(item) === JSON.stringify(list))
                    selected.push(itemIndex)
            });
        });
        console.log("操作类型：", operationType)
        console.log("加载的数据：", dataSource)
        console.log("已选择的key：", selected)
        console.log("已选择的数据：", rowstem)
        return selected
    }


    render() {
        const { keys = [], rows = [] } = this.state
        const { columns = [], buttonList = [], openSortNumber = false, singleMode = false } = this.props
        const { total = 0, loading = false, pageParams = {}, dataSource = [] } = this.state
        const { pageNum, pageSize } = pageParams

        const tableprops = {
            size: "middle",
            bordered: true,
            loading: loading,
            dataSource: dataSource,
            className: "common-table",
            scroll: dataSource.length > 10 ? { y: 490,x: columns.length*120 } : {x: columns.length*120},
            columns: openSortNumber ? [
                { title: "序号", dataIndex: "sortNumber", key: "sortNumber", render: (text, record, index) => orderByIndex(pageNum, pageSize, index) },
                ...columns
            ] : columns,

            onRow: (record, index) => {
                return {
                    onClick: () => {
                        // 当表格开启多选模式后，点击表格行将不再选中该数据
                        if(!singleMode) return false
                        this.setState({ rows: [record], keys: this.getKeys([record], dataSource, "点击表格行") })
                    },
                    onDoubleClick: () => {

                    },
                }
            },
            pagination: {
                style: { marign: "10px 0px" },
                total: total,
                size: "default",
                current: pageNum,
                pageSize: pageSize,
                showSizeChanger: true,
                showQuickJumper: true,
                pageSizeOptions: [10, 20, 30, 40],
                onChange: (page, pageSize) => {
                    this.setState({
                        pageParams: {
                            ...pageParams,
                            pageNum: page,
                            pageSize: pageSize
                        },
                        selectedRows: [],
                        selectedRowKeys: []
                    }, this.getTableData({ params: { pageNum: page, pageSize }, changePage: true }))
                },
                onShowSizeChange: (page, pageSize) => {
                    this.setState({
                        pageParams: {
                            ...pageParams,
                            pageNum: 1,
                            pageSize: pageSize
                        },
                        selectedRows: [],
                        selectedRowKeys: []
                    }, this.getTableData({ params: { pageNum: 1, pageSize }, changePage: true }))
                },
                showTotal: (total, range) => {
                    return `总计${total}条数据，当前第${pageNum}页， 第${range[0]}条 ~ 第${range[1]}条`;
                },
            },
            rowSelection: {
                type: "checkbox",
                selectedRows: rows,
                selectedRowKeys: keys,
                hideSelectAll: singleMode,
                onChange: (selectedRowKeys, selectedRows) => {


                },
                onSelect: (record, selected, selectedRows, nativeEvent) => {
                    if (singleMode) {
                        if (selected) {
                            this.setState({ rows: [record], keys: this.getKeys([record], dataSource, "单选") })
                        } else {
                            this.setState({ rows: [], keys: [] })
                        }
                    } else {
                        if (selected) {
                            const rowstemp = [...rows, record]
                            this.setState({ rows: rowstemp, keys: this.getKeys(rowstemp, dataSource, "单选") })
                        } else {
                            const rowstemp = rows.filter(item => JSON.stringify(item) !== JSON.stringify(record))
                            this.setState({ rows: rowstemp, keys: this.getKeys(rowstemp, dataSource, "取消单选") })
                        }
                    }
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                    const { rows = [] } = this.state
                    if (selected) {
                        const rowstemp = [...rows, ...selectedRows]
                        console.log(rowstemp)
                        this.setState({ rows: rowstemp, keys: this.getKeys(rowstemp, dataSource, "全选") })
                    } else {
                        const rowstemp = rows.filter(item => !changeRows.find(list => JSON.stringify(list) === JSON.stringify(item)))
                        this.setState({ rows: rowstemp, keys: this.getKeys(rowstemp, dataSource, "取消全选") })
                    }
                }
            },

            rowKey: (record, index) => index,
            title: buttonList.length ? (crrentPageData) => {
                return (
                    <react.Fragment>
                        {
                            buttonList.map((item, index) => {
                                return item.auth === "xiaminxi" && 
                                <Button key={item.toString() + index} type={item.type || "primary"} disabled={item.disabled(rows)} onClick={() => item.onClick(rows, keys)} >{item.title}</Button>
                            })
                        }
                    </react.Fragment>
                )
            } : null,
            rowClassName: (record, index) => {
                // return ""
                // return keys.includes(index) ? 'selceted-tr' : index % 2 === 0 ? "odd-tr" : "even-tr"
                return keys.includes(index) ? 'selceted-tr' : ""
            }
        }
        return (
            <react.Fragment>
                <Table {...tableprops} />
            </react.Fragment>
        )
    }
}

