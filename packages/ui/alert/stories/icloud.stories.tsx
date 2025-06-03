/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {Link} from 'react-omni-link';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import Alert from '../src';

export default {
    title: '反馈/Alert 警告提示',
    component: Alert,
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
        <BrandProvider
            brand="icloud"
            theme={theme}
        >
            <p>常用于反馈提示用户系统中需要关注的信息，需要完成的任务和可能发生的错误。信息反馈样式均统一为右侧浮层，分类为：结果反馈、业务报错、消息通知三大类，浮层定宽不定高，规则如下：</p>
            <p><strong>FE说明：</strong>根据UE标注说明，应该是message组件的弹出效果，但是内容与Alert一致</p>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <Divider>展示</Divider>
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                closable
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
            <br />
            <Alert
                type="info"
                closable
                showIcon
                message="无效参数已清除"
                description="参数【】【】，由于参数管理模块配置更新，已被清楚。本页面只展示有效参数"
            />
        </BrandProvider>
    );
};

export const CountDownDemo = () => {
    return (
        <BrandProvider>
            <Alert
                message="弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。"
                onClose={() => {console.log('closed');}}
                countDown={50}
            />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/alert-cn/">Antd Alert API</a>
        </>
    );
};

