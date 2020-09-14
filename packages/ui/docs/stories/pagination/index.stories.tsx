import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Pagination from '@osui/pagination';

export default {
    title: 'Pagination',
};

export const Demo = () => {
    function onChange(val) {
        console.log(val);
    }

    return (
        <div style={{padding: 30}}>
            <ConfigProvider locale={zhCN}>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <Pagination size="small" total={50} />
                <br />
                <Pagination simple defaultCurrent={2} total={50} />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
            </ConfigProvider>
        </div>);
};
