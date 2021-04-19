import React from 'react';
import Divider from '@osui/divider';
import BackTop from '../src';

export default {
    title: '其它/BackTop 回到顶部',
};

export const Demo = () => {
    return (
        <>
            <p>返回页面顶部的操作按钮</p>
            <h3>一、使用场景</h3>
            <Divider>展示</Divider>
            <div style={{ padding: 30, height: 1800 }}>
                <BackTop style={{ paddingRight: '200px' }} />
                <BackTop type="circle" style={{ paddingRight: '120px' }} />
                <BackTop transparent />
                <p>BackTop 回到顶部</p>
                <p>往下滚才能看到我哟</p>
            </div>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/back-top-cn/">Antd BackTop API</a>
        </>
    );
};

