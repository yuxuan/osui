/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Space from '@osui/space';
import Divider from '@osui/divider';
import Tooltip from '@osui/tooltip';
import Badge from '@osui/badge';

export default {
    title: '数据展示/Badge 徽标数',
};

export const Demo = () => {
    return (
        <>
            <p>通过醒目的视觉标注提醒用户重要的信息，如新消息或者新功能上线。一般出现在图标或文字的右上角。</p>
            <Divider>展示</Divider>
            <h3>主要样式</h3>
            <Space size="large">
                <Badge count={5}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count={15}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
            </Space>
            <br />
            <br />
            <h3>红点徽标</h3>
            <Badge dot>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
            <br />
            <br />
            <h3>自定义徽标</h3>
            <p>提示用户某种属性状态。</p>
            <Badge count={99} type="success">
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
        </>
    );
};

export const OverflowCount = () => {
    return (
        <>
            <Divider>展示</Divider>
            <h3>信息较多样式</h3>
            <Space size="large">
                <Badge count={99}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count={100}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count={99} overflowCount={10}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count={1000} overflowCount={999}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
            </Space>
        </>
    );
};

export const Status = () => {
    return (
        <>
            <h3>状态徽标</h3>
            <p>多用于表格或详情页中提示内容的状态。</p>
            <Divider>展示</Divider>
            <div>
                <br />
                <Badge status="inactive" text="已取消" />
                <br />
                <Badge status="success" text="成功" />
                <br />
                <Badge status="warning" text="警告" />
                <br />
                <Badge status="error" text="失败" />
                <br />
                <Badge status="active" text="待执行" />
                <br />
                <Badge status="processing" text="进行中" />
            </div>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/badge-cn/">Antd Badge API</a>
        </>
    );
};

export const TestCase = () => {
    return (
        <Tooltip title="Fix the error">
            <Badge status="error" />
        </Tooltip>
    );
};

