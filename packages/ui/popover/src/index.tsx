import React from 'react';
import {Popover as AntdPopover } from 'antd';
import {PopoverProps as AntdPopoverProps} from 'antd/es/popover';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-popover';

export type PopoverProps = AntdPopoverProps;

const Popover: React.FC<PopoverProps> = props => {
    return (<AntdPopover {...props} overlayClassName={classNames(clsPrefix, props.overlayClassName)} />);
};

export default Popover;
