import React, {useContext} from 'react';
import {Card as AntdCard, ConfigProvider} from 'antd';
import type {CardProps as AntdCardProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-card';

export interface CardProps extends AntdCardProps {
    compact?: boolean;
}

const OSUICard = ({className, compact, ...props}: CardProps) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('card', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const innerClassName = classNames(
        clsPrefix,
        {[`${clsPrefix}-compact`]: compact},
        className
    );
    return wrapSSROsui(
        <AntdCard className={innerClassName} {...props} />
    );
};

hoistNonReactStatics(OSUICard, AntdCard);

export default OSUICard as unknown as typeof AntdCard & typeof OSUICard;
