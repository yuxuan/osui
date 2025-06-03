import React, {useContext} from 'react';
import {Popover as AntdPopover, ConfigProvider} from 'antd';
import {PopoverProps as AntdPopoverProps} from 'antd/es/popover';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
import {TooltipRef} from 'antd/es/tooltip';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-popover';

export interface PopoverProps extends AntdPopoverProps {
    showCloseIcon?: boolean;
}

const Popover: React.ForwardRefRenderFunction<TooltipRef, PopoverProps> = (props, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('popover', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
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
    return wrapSSROsui(
        <AntdPopover
            ref={ref}
            {...props}
            overlayClassName={classNames(clsPrefix, props.overlayClassName)}
            title={innerTitle}
        />
    );
};

export default React.forwardRef(Popover);
