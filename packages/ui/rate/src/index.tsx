import React, {useContext} from 'react';
import {Rate as AntdRate, ConfigProvider} from 'antd';
import {RateProps as AntdRateProps} from 'antd/es/rate';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-rate';

const Rate: React.ForwardRefRenderFunction<any, AntdRateProps> = ({className, ...props}, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('rate', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

    const innerClassName = classNames(className, clsPrefix);
    return wrapSSROsui(
        <AntdRate
            ref={ref}
            className={innerClassName}
            {...props}
        />
    );
};

const RateRef = React.forwardRef<unknown, AntdRateProps>(Rate);

hoistNonReactStatics(Rate, AntdRate);

export type {RateProps} from 'antd';
export default RateRef;

