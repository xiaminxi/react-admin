/*
 * @Author: xiaminxi
 * @Date: 2020-08-28 10:34:42
 * @LastEditors: xiaminxi
 * @LastEditTime: 2020-12-09 14:10:58
 * @Description: 请输入文件说明
 */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CommonCard from './CommonCard'
import CommonTable from './CommonTable'
import { Form, Button } from 'antd';


function CommonPage(props) {
    const handleValues = (values) => {
        // for (let item in values) {
        //     if (values[item] === undefined)
        //         delete values[item]
        // }
        return values
    }
    const formRef = React.createRef();
    const commonTable = React.createRef();
    const { tableProps = {}, FormItemList = [], pageInit = {} } = props;
    const resetFields = () => formRef.current.resetFields();
    const onFinish = values => commonTable.current.getTableData({ formParams: handleValues(values) });
    return (
        <Fragment>
            <CommonCard>
                <Form layout="inline" ref={formRef} onFinish={onFinish}>
                    {FormItemList}
                    <Form.Item>
                        <Button htmlType="button" onClick={resetFields}>重置</Button>
                        <Button style={{ margin: "0px 10px" }} type="primary" htmlType="submit" >查询</Button>
                    </Form.Item>
                </Form>
            </CommonCard>
            <CommonTable {...tableProps} ref={commonTable} {...pageInit} />
        </Fragment>
    )
}

CommonPage.propTypes = {
    tableProps: PropTypes.object,
    FormItemList: PropTypes.array
}

export default CommonPage


