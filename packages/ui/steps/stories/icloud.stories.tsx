/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Space from '@osui/space';
import Button from '@osui/button';
import BrandProvider from '@osui/brand-provider';
import Steps from '../src';

export default {
    title: '导航/Steps 步骤条',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    const {Step} = Steps;
    const {Step: ProcessOnlyStep} = Steps.ProcessOnlySteps;
    const [current, setCurrent] = useState(-1);
    const onChange = current => {
        setCurrent(current);
    };
    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <h2>纵向步骤条</h2>
            <Steps direction="vertical" current={1}>
                <Step title="已完成步骤" description="描述文案" status="finish" />
                <Step title="当前步骤" description="描述文案" />
                <Step title="出错步骤" description="描述文案" status="error" />
                <Step title="未完成步骤" description="描述文案" />
            </Steps>
            <p>以下当前错误状态的展示</p>
            <Steps direction="vertical" current={0}>
                <Step title="当前错误" description="描述文案" status="error" />
            </Steps>
            <p>可点击切换</p>
            <Steps direction="vertical" current={current} onChange={onChange}>
                <Step title="已完成步骤" description="描述文案" status="finish" />
                <Step title="当前步骤" description="描述文案" />
                <Step title="出错步骤" description="描述文案" status="error" />
                <Step title="未完成步骤" description="描述文案" />
            </Steps>
            <p></p>
            <p></p>
            <h2>横向步骤条</h2>
            <Steps current={2}>
                <Step title="提交申请" description="描述文案" status="finish" />
                <Step title="产品线分组审批人审批" description="描述文案" status="finish" />
                <Step title="search-cost审核" description="描述文案" />
                <Step title="SRE资源效率审核" />
                <Step title="资源交付" />
            </Steps>
            <p></p>
            <p></p>
            <Steps current={2} labelPlacement="vertical">
                <Step title="提交申请" description="描述文案" status="finish" />
                <Step title="步骤名称" description="描述文案" status="finish" />
                <Step title="当前步骤" description="描述文案" />
                <Step title="步骤名称" />
                <Step title="步骤名称" />
            </Steps>
            <p></p>
            <p></p>
            <h2>其它样式</h2>
            <p>可点击切换</p>
            <Steps current={current} onChange={onChange}>
                <Step title="已完成步骤" description="描述文案" status="finish" />
                <Step title="当前步骤" description="描述文案" />
                <Step title="出错步骤" description="描述文案" status="error" />
                <Step title="未完成步骤" />
            </Steps>
            <p></p>
            <p></p>
            <h2>点线型步骤条</h2>
            <Steps progressDot current={1}>
                <Step title="已完成步骤" description="这是一段描述性的文字" />
                <Step title="当前步骤" description="这是一段描述性的文字" />
                <Step title="未完成步骤" description="这是一段描述性的文字" />
            </Steps>
            <p></p>
            <p></p>
            <Steps progressDot current={1}>
                <Step title="已完成步骤" description="这是一段描述性的文字" />
                <Step title="当前步骤" description="这是一段描述性的文字" status="error" />
                <Step title="未完成步骤" description="这是一段描述性的文字" />
            </Steps>
            <p></p>
            <p></p>
            <h2>纵向</h2>
            <Steps progressDot current={1} direction="vertical">
                <Step title="已完成步骤" description="这是一段描述性的文字" />
                <Step title="当前步骤" description="这是一段描述性的文字" status="error" />
                <Step title="未完成步骤" description="这是一段描述性的文字" />
            </Steps>
            <p></p>
            <p></p>
            <h2>其它</h2>

            <p>以下为ProcessOnlyStepSteps， 注意：需要使用Steps.ProcessOnlySteps，只会显示process的状态</p>
            <Steps.ProcessOnlySteps current={current}>
                <ProcessOnlyStep title="Step 1" />
                <ProcessOnlyStep title="Step 2" />
                <ProcessOnlyStep title="Step 3" />
            </Steps.ProcessOnlySteps>
            <br />
            <br />
            <p>以下为箭头分割的Steps</p>
            <p>注意：箭头形式下，使用navigation，hover效果已经取消</p>
            <p>注意：视觉规范要求必须使用`compact`模式，为了兼容，请手动传入compact属性</p>
            <Steps.ProcessOnlySteps current={current} type="navigation" compact>
                <ProcessOnlyStep title="Step 1" />
                <ProcessOnlyStep title="Step 2" />
                <ProcessOnlyStep title="Step 3" />
            </Steps.ProcessOnlySteps>
            <br />
            <br />
            <Space>
                <Button onClick={() => setCurrent(step => step + 1)}>下一步</Button>
                <Button onClick={() => setCurrent(step => step - 1)}>上一步</Button>
            </Space>
        </BrandProvider>
    );
};

export const CompactDemo = () => {
    const {Step: ProcessOnlyStep} = Steps.ProcessOnlySteps;
    const [current, setCurrent] = useState(-1);
    return (
        <BrandProvider>
            <h2>紧凑型</h2>
            <p>当需要展示很多步时</p>
            <Steps.ProcessOnlySteps current={current} compact type="navigation">
                <ProcessOnlyStep title="Step 1" />
                <ProcessOnlyStep title="Step 2" />
                <ProcessOnlyStep title="Step 3" />
                <ProcessOnlyStep title="Step 4" />
                <ProcessOnlyStep title="Step 5" />
                <ProcessOnlyStep title="Step 6" />
                <ProcessOnlyStep title="Step 7" />
                <ProcessOnlyStep title="Step 8" />
                <ProcessOnlyStep title="Step 9" />
                <ProcessOnlyStep title="Step 10" />
            </Steps.ProcessOnlySteps>
            <br />
            <br />
            <Space>
                <Button onClick={() => setCurrent(step => step + 1)}>下一步</Button>
                <Button onClick={() => setCurrent(step => step - 1)}>上一步</Button>
            </Space>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/steps-cn/">Antd Steps API</a>
        </>
    );
};

