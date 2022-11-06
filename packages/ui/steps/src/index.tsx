import React from 'react';
import {Steps as AntdSteps} from 'antd';
import {
    StepsProps as AntdStepsProps,
    StepProps as AntdStepProps,
} from 'antd/es/steps';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-steps';

export interface StepProps extends AntdStepsProps {
    compact?: boolean;
}

export interface StepsInterface extends React.FC<StepProps> {
    Step: typeof AntdSteps.Step;
    ProcessOnlySteps: typeof ProcessOnlySteps;
}

const Steps: StepsInterface = ({className, compact, ...props}) => {
    const innerClassName = classNames(
        className,
        clsPrefix,
        {[`${clsPrefix}-compact`]: compact});
    return <AntdSteps className={innerClassName} {...props} />;
};

Steps.Step = AntdSteps.Step;

// ==================== ProcessOnlyStep ====================
export interface ProcessOnlyStepsInterface extends React.FC<StepProps> {
    Step: typeof ProcessOnlyStep;
}

const ProcessOnlySteps: ProcessOnlyStepsInterface = props => {
    return <Steps {...props} />;
};

const ProcessOnlyStep: React.FC<AntdStepProps> = props => {
    const innerStatus = props.status === 'finish' ? 'process' : props.status;
    return <AntdSteps.Step {...props} status={innerStatus} />;
};

ProcessOnlySteps.Step = ProcessOnlyStep;

Steps.ProcessOnlySteps = ProcessOnlySteps;

export type {StepsProps} from 'antd';
export default Steps;
