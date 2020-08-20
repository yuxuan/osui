/**
 * @file Tooltip组件
 * @author yangpeng
 * */

import React from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {TooltipProps as AntdTooltipProps} from 'antd/es/tooltip';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tooltip';

export type TooltipProps = AntdTooltipProps;

const Tooltip: React.FC<TooltipProps> = props => {
    return <AntdTooltip overlayClassName={classNames(clsPrefix, props.overlayClassName)} {...props} />;
};

export default Tooltip;
