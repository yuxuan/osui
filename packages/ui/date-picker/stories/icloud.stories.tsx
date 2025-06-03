/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Row} from 'antd';
import dayjs from 'dayjs';
import Space from '@osui/space';
import version from '@osui/version';
import BrandProvider from '@osui/brand-provider';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import locale from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import DatePicker from '../src';


dayjs.locale('zh-cn');

const {RangePicker, WeekPicker} = DatePicker;

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';

export default {
    title: '数据录入/DatePicker 日期选择框',
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud" locale={locale}>
            {version}
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
                    <DatePicker defaultValue={dayjs('2023-01-01', dateFormat)} disabled style={{width: 240}} />
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
                <h1>Disable</h1>
                <Space direction="vertical" size={12}>
                    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
                    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
                    <RangePicker
                        defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
                        disabled
                    />
                    <RangePicker
                        defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
                        disabled={[false, true]}
                    />
                </Space>
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
