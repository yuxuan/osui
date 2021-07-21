import React from 'react';
import {Popover as AntdPopover } from 'antd';
import {PopoverProps as AntdPopoverProps} from 'antd/lib/popover';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-popover';

export type PopoverProps = AntdPopoverProps;

const Popover: React.ForwardRefRenderFunction<HTMLElement, AntdPopoverProps> = (props, ref) => {
    return (<AntdPopover ref={ref} {...props} overlayClassName={classNames(clsPrefix, props.overlayClassName)} />);
};

export default React.forwardRef(Popover) as unknown as typeof AntdPopover;
