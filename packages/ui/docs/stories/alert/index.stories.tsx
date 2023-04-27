/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Link} from 'react-omni-link';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import Alert from '@osui/alert';

export default {
    title: '反馈/Alert 警告提示',
    component: Alert,
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <p>常用于反馈提示用户系统中需要关注的信息，需要完成的任务和可能发生的错误。信息反馈样式均统一为右侧浮层，分类为：结果反馈、业务报错、消息通知三大类，浮层定宽不定高，规则如下：</p>
            <p><strong>FE说明：</strong>根据UE标注说明，应该是message组件的弹出效果，但是内容与Alert一致</p>
            <Divider>展示</Divider>
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
            />
            <br />
            <Alert
                style={{width: 600}}
                /* eslint-disable-next-line max-len */
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="info"
                expandable
                actions={<Link external to="https://www.baidu.com">查看文档</Link>}
            />
            <br />
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="success"
                showIcon
            />
            <br />
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="warning"
                showIcon
            />
            <br />
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="error"
                showIcon
            />
            <br />
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="info"
                showIcon
            />
        </BrandProvider>
    );
};

export const CountDownDemo = () => {
    return (
        <Alert
            message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
            onClose={() => {console.log('closed');}}
            countDown={50}
        />
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/alert-cn/">Antd Alert API</a>
        </>
    );
};

