import React, {useContext} from 'react';
import {Steps as AntdSteps, ConfigProvider} from 'antd';
import {
    StepsProps as AntdStepsProps,
    StepProps as AntdStepProps,
} from 'antd/es/steps';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-steps';

export interface StepProps extends AntdStepsProps {
    compact?: boolean;
}

export interface StepsInterface extends React.FC<StepProps> {
    Step: typeof AntdSteps.Step;
    ProcessOnlySteps: typeof ProcessOnlySteps;
}

const Steps: StepsInterface = ({className, compact, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('steps', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const innerClassName = classNames(
        className,
        clsPrefix,
        {[`${clsPrefix}-compact`]: compact});
    return wrapSSROsui(
        <AntdSteps
            className={innerClassName}
            {...props}
        />
    );
};

Steps.Step = AntdSteps.Step;

// ==================== ProcessOnlyStep ====================
export interface ProcessOnlyStepsInterface extends React.FC<StepProps> {
    Step: typeof ProcessOnlyStep;
}

const ProcessOnlySteps: ProcessOnlyStepsInterface = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('alert', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    return wrapSSROsui(<Steps {...props} />);
};

const ProcessOnlyStep: React.FC<AntdStepProps> = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('alert', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    const innerStatus = props.status === 'finish' ? 'process' : props.status;
    return wrapSSROsui(
        <AntdSteps.Step
            {...props}
            status={innerStatus}
        />
    );
};

ProcessOnlySteps.Step = ProcessOnlyStep;

Steps.ProcessOnlySteps = ProcessOnlySteps;

export type {StepsProps} from 'antd';
export default Steps;
