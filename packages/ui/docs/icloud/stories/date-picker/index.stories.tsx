/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Row} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ConfigProvider from 'antd/lib/config-provider';
import zhCN from 'antd/lib/locale/zh_CN';
import jaJP from 'antd/lib/locale/ja_JP';
import locale from 'antd/lib/date-picker/locale/zh_TW';
import DatePicker from '@osui/date-picker';
const {RangePicker} = DatePicker;

export default {
    title: '数据录入/DatePicker 日期选择框',
};

export const Demo = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <div style={{padding: 20}}>
                <h4>日期选择</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker />
                </Row>
                <h4>日期范围选择</h4>
                <Row style={{marginBottom: 20}}>
                    <RangePicker />
                </Row>
                <h4>日期禁用选择</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker defaultValue={moment('2015-06-06')} disabled />
                </Row>
                <h4>选择月份</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="month" />
                </Row>
                <h4>选择季度</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="quarter" />
                </Row>
                <h4>选择年</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="year" />
                </Row>
            </div>
        </ConfigProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/date-picker-cn/">Antd DatePicker API</a>
        </>
    );
};


export const TestCase = () => {
    return (
        <ConfigProvider locale={jaJP}>
            <DatePicker locale={locale} />
        </ConfigProvider>
    );
};
