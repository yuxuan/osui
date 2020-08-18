import * as React from 'react';
import OSUIPagination from '../src';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

export default {
    title: 'OSUI-Pagination',
};

export const Demo = () => {
    function onChange(val) {
        console.log(val);
    }

    return (
        <div style={{padding: 30}}>
            <ConfigProvider locale={zhCN}>
                <OSUIPagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <OSUIPagination size="small" total={50} />
                <br />
                <OSUIPagination simple defaultCurrent={2} total={50} />
            </ConfigProvider>
        </div>);
};
