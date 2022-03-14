/**
 * @file Tooltip组件
 * @author yangpeng, huoyuxuan
 * */

import React from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {
    TooltipProps as AntdTooltipProps,
    TooltipPropsWithTitle as AntdTooltipPropsWithTitle,
    TooltipPropsWithOverlay as AntdTooltipPropsWithOverlay,
} from 'antd/lib/tooltip';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tooltip';

export type TooltipProps = AntdTooltipProps;

// eslint-disable-next-line max-len
export type TooltipInterface = React.ForwardRefExoticComponent<(AntdTooltipPropsWithTitle & React.RefAttributes<unknown>) | (AntdTooltipPropsWithOverlay & React.RefAttributes<unknown>)>;

const OSUITooltip = React.forwardRef<unknown, TooltipProps>(({overlayClassName, ...props}, ref) => {
    return (
        <AntdTooltip ref={ref} overlayClassName={classNames(clsPrefix, overlayClassName)} {...props} />
    );
}) as TooltipInterface;

export default OSUITooltip;
