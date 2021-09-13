/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import Result from '@osui/result';

export default {
    title: '数据展示/Result 结果',
    component: Result,
};

export const Demo = () => {
    return (
        <Result
            status="success"
            title="Success!"
            subTitle="Order number: 123456789."
            extra={[
                <Button type="primary" key="console">
                    Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
            ]}
        />
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/result-cn/">Antd Result API</a>
        </>
    );
};

