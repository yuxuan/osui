import React from 'react';
import {Popover as AntdPopover } from 'antd';
import {PopoverProps as AntdPopoverProps} from 'antd/lib/popover';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-popover';

export interface PopoverProps extends AntdPopoverProps {
    showCloseIcon?: boolean;
}

const Popover: React.ForwardRefRenderFunction<HTMLElement, PopoverProps> = (props, ref) => {
    let innerTitle = props.title;
    if (props.showCloseIcon) {
        innerTitle = (
            <div>
                {props.title}
                <IconCloseOutlined
                    className={`${clsPrefix}-close-icon`}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => props.onVisibleChange && props.onVisibleChange(false)}
                />
            </div>
        );
    }
    return (
        <AntdPopover
            ref={ref}
            {...props}
            overlayClassName={classNames(clsPrefix, props.overlayClassName)}
            title={innerTitle}
        />
    );
};

export default React.forwardRef(Popover) as unknown as typeof AntdPopover & typeof Popover;
