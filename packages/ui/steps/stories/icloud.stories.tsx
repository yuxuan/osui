import React, { useState } from 'react';
import Button from '@osui/button';
import Space from '@osui/space';
import Steps from '../src';

export default {
    title: '导航/Steps 步骤条',
};

export const Demo = () => {
    const { Step } = Steps;
    const { Step: ProcessOnlyStep } = Steps.ProcessOnlySteps;
    const [current, setCurrent] = useState(-1);
    return (
        <>
            <p>点击底部下一步上一步按钮，可以查看完成状态</p>
            <p>以下为带完成状态的Steps，UE规范中没有，不建议使用</p>
            <Steps current={current}>
                <Step title="Step 1" />
                <Step title="Step 2" />
                <Step title="Step 3" />
            </Steps>
            <br />
            <br />
            <p>以下为ProcessOnlyStepSteps， 注意：需要使用Steps.ProcessOnlySteps</p>
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
            <p>以下为垂直形式</p>
            <Steps.ProcessOnlySteps current={current} direction="vertical">
                <ProcessOnlyStep title="Step 1" description="This is a description." />
                <ProcessOnlyStep title="Step 2" description="This is a description." />
                <ProcessOnlyStep title="Step 3" description="This is a description." />
            </Steps.ProcessOnlySteps>
            <Space>
                <Button onClick={() => setCurrent(step => step + 1)}>下一步</Button>
                <Button onClick={() => setCurrent(step => step - 1)}>上一步</Button>
            </Space>
        </>
    );
};

export const ErrorStatusDemo = () => {
    const ProcessOnlySteps = Steps.ProcessOnlySteps;
    const { Step } = ProcessOnlySteps;
    const [current, setCurrent] = useState(-1);
    return (
        <>
            <ProcessOnlySteps current={current}>
                <Step title="Step 1" />
                <Step title="Step 2" />
                <Step title="Step 3" status="error" />
            </ProcessOnlySteps>
            <br />
            <br />
            <Space>
                <Button onClick={() => setCurrent(step => step + 1)}>下一步</Button>
                <Button onClick={() => setCurrent(step => step - 1)}>上一步</Button>
            </Space>
        </>
    );
};

export const CompactDemo = () => {
    const { Step: ProcessOnlyStep } = Steps.ProcessOnlySteps;
    const [current, setCurrent] = useState(-1);
    return (
        <>
            <h3>紧凑型</h3>
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
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/steps-cn/">Antd Steps API</a>
        </>
    );
};

