import React from 'react';
import {Link} from 'react-omni-link';
import Alert from '../src';

export default {
    title: '通过验收/Alert 警告提示',
    component: Alert,
};

export const Demo = () => {
    return (
        <>
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
                banner
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                type="info"
                showIcon
            />
        </>
    );
};

export const CountDownDemo = () => {
    return (
        <Alert
            message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
            onClose={() => {console.log('closed');}}
            countDown={5}
        />
    );
};
