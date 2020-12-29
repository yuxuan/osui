import React from 'react';
import {Steps as AntdSteps} from 'antd';
import {StepsProps as AntdStepsProps} from 'antd/es/steps';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-steps';

interface StepsInterface extends React.FC<AntdStepsProps> {
    Step: typeof AntdSteps.Step;
}

const Steps: StepsInterface = ({className, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    return <AntdSteps className={innerClassName} {...props} />;
};

Steps.Step = AntdSteps.Step;

export default Steps;
