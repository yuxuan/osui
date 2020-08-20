import React from 'react';
import {Popover as AntdPopover } from 'antd';
import {PopoverProps as AntdPopoverProps} from 'antd/es/popover';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-popover';

export type PopoverProps = AntdPopoverProps;

const OSUIPopover: React.FC<PopoverProps> = props => {
    return (<AntdPopover {...props} overlayClassName={classNames(props.className, clsPrefix)} />);
};

export default OSUIPopover;
