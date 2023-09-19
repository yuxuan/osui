import React from 'react';
import {Rate as AntdRate} from 'antd';
import {RateProps as AntdRateProps} from 'antd/es/rate';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-rate';

const Rate: React.ForwardRefRenderFunction<any, AntdRateProps> = ({className, ...props}, ref) => {
    const innerClassName = classNames(className, clsPrefix);
    return <AntdRate ref={ref} className={innerClassName} {...props} />;
};

const RateRef = React.forwardRef<unknown, AntdRateProps>(Rate);

hoistNonReactStatics(Rate, AntdRate);

export type {RateProps} from 'antd';
export default RateRef;

