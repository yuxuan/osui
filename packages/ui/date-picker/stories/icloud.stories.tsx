/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Row} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ConfigProvider from 'antd/es/config-provider';
import BrandProvider from '@osui/brand-provider';
// import zhCN from 'antd/es/locale/zh_CN';
import jaJP from 'antd/es/locale/ja_JP';
import locale from 'antd/es/date-picker/locale/zh_TW';
import DatePicker from '../src';
const {RangePicker, WeekPicker} = DatePicker;

export default {
    title: '数据录入/DatePicker 日期选择框',
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 20}}>
                <h1>日选择</h1>
                <h4>日期选择</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker style={{width: 240}} />
                </Row>
                <h4>日期范围选择</h4>
                <Row style={{marginBottom: 20}}>
                    <RangePicker style={{width: 240}} />
                </Row>
                <h4>日期禁用选择</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker defaultValue={moment('2015-06-06')} disabled style={{width: 240}} />
                </Row>
                <h4>带有时分秒</h4>
                <Row style={{marginBottom: 20}}>
                    <RangePicker showTime style={{width: 240}} />
                </Row>
                <h1>周选择</h1>
                <Row style={{marginBottom: 20}}>
                    <WeekPicker style={{width: 240}} />
                </Row>
                <h1>月选择</h1>
                <h4>选择月份</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="month" style={{width: 240}} />
                </Row>
                <h4>多月</h4>
                <Row style={{marginBottom: 20}}>
                    <RangePicker picker="month" style={{width: 240}} />
                </Row>
                <h1>季度选择</h1>
                <h4>选择季度</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="quarter" style={{width: 240}} />
                </Row>
                <h1>年选择</h1>
                <h4>选择年</h4>
                <Row style={{marginBottom: 20}}>
                    <DatePicker picker="year" style={{width: 240}} />
                </Row>
            </div>
        </BrandProvider>
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
