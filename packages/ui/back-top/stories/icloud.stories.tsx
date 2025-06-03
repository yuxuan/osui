/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import BackTop from '../src';

export default {
    title: '其它/BackTop 回到顶部',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider theme={theme}>
            <p>返回页面顶部的操作按钮</p>
            <h3>一、使用场景</h3>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <Divider>展示</Divider>
            <div style={{padding: 30, height: 1800}}>
                <BackTop style={{paddingRight: '200px'}} />
                <BackTop type="circle" style={{paddingRight: '120px'}} />
                <BackTop transparent />
                <p>BackTop 回到顶部</p>
                <p>往下滚才能看到我哟</p>
            </div>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/back-top-cn/">Antd BackTop API</a>
        </>
    );
};

