import React from 'react';
import Button from '@osui/button';
import Result from '../src';

export default {
    title: '未实现/Result 结果',
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
