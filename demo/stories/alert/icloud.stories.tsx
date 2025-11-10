/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Link} from 'react-omni-link';
import Divider from '@osui/divider';
import {IconSwitchTick} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import {Button} from 'antd';
import Alert from '@osui/alert';

export default {
    title: '反馈/[new_dev]警告提示 Alert',
    component: Alert,
};
const Btn = ({bkg}: any) => {
    return (
        <Button style={{background: bkg, color: '#fff'}} variant="solid">
            操作按钮
        </Button>
    );
};
export const Demo = () => {

    return (
        <BrandProvider brand="icloud">
            <Divider>基础警告</Divider>
            <Alert type="common" message="提示普通的文案" />
            <br />
            <Alert type="error" message="提示错误的文案" />
            <br />
            <Alert type="info" message="提示通知的文案" />
            <br />
            <Alert type="success" message="提示成功的文案" />
            <br />
            <Alert type="warning" message="提示警告的文案" />
            <Divider>带图标警告</Divider>
            <Alert showIcon type="common" message="提示普通的文案" />
            <br />
            <Alert showIcon type="error" message="提示错误的文案" />
            <br />
            <Alert showIcon type="info" message="提示通知的文案" />
            <br />
            <Alert showIcon type="success" message="提示成功的文案" />
            <br />
            <Alert showIcon type="warning" message="提示警告的文案" />
            <br />
            <Alert
                style={{width: 600}}
                showIcon
                type="info"
                message="折行情况的提示通知的文案提示通知的文案提示通知的文案提示通知
            的文案提示通知的文案提示通知的文案提示通知的文案提示通知的文案提示通知的文案"
            />
            <Divider>带标题的警告</Divider>
            <Alert message="提示标题" description="提示通知的文案" />
            <br />
            <Alert type="error" message="提示标题" description="提示错误的文案" />
            <br />
            <Alert type="success" message="提示标题" description="提示成功的文案" />
            <br />
            <Alert type="warning" message="提示标题" description="提示警告的文案" />

            <Divider>带图标和标题警告</Divider>
            <Alert showIcon message="提示标题" description="提示通知的文案" />
            <br />
            <Alert showIcon type="error" message="提示标题" description="提示错误的文案" />
            <br />
            <Alert showIcon type="success" message="提示标题" description="提示成功的文案" />
            <br />
            <Alert showIcon type="warning" message="提示标题" description="提示警告的文案" />

            <Divider>可关闭警告</Divider>
            <Alert closable message="提示通知的文案" />
            <br />
            <Alert closable message="提示标题" description="提示通知的文案" />
            <br />
            <Alert closable showIcon message="提示通知的文案" />
            <br />
            <Alert closable showIcon message="提示标题" description="提示通知的文案" />

            <Divider>可自定义警告</Divider>
            <Alert closeText="知道了" closable message="提示通知的文案" />
            <br />
            <Alert closeText="不再提醒" closable showIcon message="提示通知的文案" />

            <Divider>带操作项警告</Divider>
            <Alert closable action={<a>查看详情</a>} message="提示通知的文案" />
            <br />
            <Alert closable type="error" action={<a>查看详情</a>} message="提示错误的文案" />
            <br />
            <Alert closable type="success" action={<a>查看详情</a>} message="提示成功的文案" />
            <br />
            <Alert closable type="warning" action={<a>查看详情</a>} message="提示警告的文案" />
            <br />
            <Alert
                action={<Btn bkg="#FA423C">操作按钮</Btn>}
                showIcon
                type="error"
                message="提示错误的文案"
            />
            <br />
            <Alert
                action={<Btn bkg="#13B982">操作按钮</Btn>}
                showIcon
                type="success"
                message="提示成功的文案"
            />
            <br />
            <Alert
                action={<Btn bkg="#FF7E0D">操作按钮</Btn>}
                showIcon
                type="warning"
                message="提示警告的文案"
            />
            <br />
            <Alert
                action={<Btn bkg="#352EFF">操作按钮</Btn>}
                showIcon
                type="info"
                message="提示通知的文案"
            />

            <Divider>带操作入口警告</Divider>
            <Alert closable showIcon message={<>提示通知的文案 <a href="">操作入口</a></>} />
            <br />
            <Alert closable showIcon type="error" message={<>提示错误的文案 <a href="">操作入口</a></>} />
            <br />
            <Alert closable showIcon type="info" message={<>提示通知的文案 <a href="">操作入口</a></>} />
            <br />
            <Alert closable showIcon type="success" message={<>提示成功的文案 <a href="">操作入口</a></>} />

            <Divider>自定义图标警告（建议使用面性icon）</Divider>
            <Alert showIcon icon={<IconSwitchTick />} message={'提示通知的文案'} />

            <Divider>通栏警告</Divider>
            <Alert closable banner message={'提示通知的文案'} />
            <br />
            <Alert showIcon={false} type="warning" banner message={'提示警告的文案'} />
            <br />
            <Alert type="error" banner message={'提示错误的文案'} />

        </BrandProvider>

    );
};
export const OldDemo = () => {
    return (
        <BrandProvider brand="icloud">
            <p>常用于反馈提示用户系统中需要关注的信息，需要完成的任务和可能发生的错误。信息反馈样式均统一为右侧浮层，分类为：结果反馈、业务报错、消息通知三大类，浮层定宽不定高，规则如下：</p>
            <p><strong>FE说明：</strong>根据UE标注说明，应该是message组件的弹出效果，但是内容与Alert一致</p>
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

