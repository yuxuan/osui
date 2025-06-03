/**
 * @file Tooltip组件
 * @author huoyuxuan
 * */

import React, {useContext} from 'react';
import {Tooltip as AntdTooltip, ConfigProvider} from 'antd';
import {
    TooltipProps as AntdTooltipProps,
    TooltipPropsWithTitle as AntdTooltipPropsWithTitle,
    TooltipPropsWithOverlay as AntdTooltipPropsWithOverlay,
    TooltipRef,
} from 'antd/es/tooltip';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-tooltip';

export type TooltipProps = AntdTooltipProps;

// eslint-disable-next-line max-len
export type TooltipInterface = React.ForwardRefExoticComponent<(AntdTooltipPropsWithTitle & React.RefAttributes<unknown>) | (AntdTooltipPropsWithOverlay & React.RefAttributes<unknown>)>;

const OSUITooltip = React.forwardRef<TooltipRef, TooltipProps>(({overlayClassName, ...props}, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('tooltip', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    return wrapSSROsui(
        <AntdTooltip
            ref={ref}
            overlayClassName={classNames(clsPrefix, overlayClassName)}
            {...props}
        />
    );
}) as TooltipInterface;

export default OSUITooltip;
