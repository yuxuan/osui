/**
 * @file Tooltip组件
 * @author yangpeng
 * */

import * as React from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {TooltipProps as AntdTooltipProps} from 'antd/lib/Tooltip';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tooltip';

export type TooltipProps = AntdTooltipProps;

const Tooltip: React.FC<TooltipProps> = props => {
    return <AntdTooltip className={classNames(clsPrefix, props.className)} {...props} />;
};

export default Tooltip;
