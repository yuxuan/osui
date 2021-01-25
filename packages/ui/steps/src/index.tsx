import React from 'react';
import {Steps as AntdSteps} from 'antd';
import {
    StepsProps as AntdStepsProps,
    StepProps as AntdStepProps,
} from 'antd/es/steps';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-steps';

interface StepsInterface extends React.FC<AntdStepsProps> {
    Step: typeof AntdSteps.Step;
    ProcessOnlySteps: typeof ProcessOnlySteps;
}

const Steps: StepsInterface = ({className, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    return <AntdSteps className={innerClassName} {...props} />;
};

Steps.Step = AntdSteps.Step;

// ==================== ProcessOnlyStep ====================
interface ProcessOnlyStepsInterface extends React.FC<AntdStepsProps> {
    Step: typeof ProcessOnlyStep;
}

const ProcessOnlySteps: ProcessOnlyStepsInterface = ({className, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    return <AntdSteps className={innerClassName} {...props} />;
};

const ProcessOnlyStep: React.FC<AntdStepProps> = props => {
    const innerStatus = props.status === 'finish' ? 'process' : props.status;
    return <AntdSteps.Step {...props} status={innerStatus} />;
};

ProcessOnlySteps.Step = ProcessOnlyStep;

Steps.ProcessOnlySteps = ProcessOnlySteps;

export default Steps;
