import * as React from 'react';
import Alert from '../src/index';

export default {title: 'OSUI Alert'};

export const Basic = () => {
    return (
        <>
            <Alert message="这是一个操作成功的消息！" type="success" /><br />
            <Alert message="这是一个普通提示的消息！" type="info" /><br />
            <Alert message="这是一个操作警示的消息！" type="warning" /><br />
            <Alert message="这是一个请求错误的消息！" type="error" /><br />
        </>
    );
};
