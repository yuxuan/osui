/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Result from '@osui/result';

export default {
    title: '数据展示/Result 结果',
    component: Result,
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <Result
                status="success"
                title="订单支付成功!"
                subTitle="请耐心等待产品线交付，如资源交付失败支付金额会退回至您的账户余额"
                extra={[
                    <a type="primary" key="console">
                        返回管理实例
                    </a>,
                    <a key="buy">查看订单明细</a>,
                ]}
            />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/result-cn/">Antd Result API</a>
        </>
    );
};

