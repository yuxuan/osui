import React, {useContext} from 'react';
import {Switch as AntdSwitch, ConfigProvider} from 'antd';
import {SwitchProps as AntdSwitchProps} from 'antd/es/switch';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-switch';

export type SwitchProps = AntdSwitchProps;

export interface CompoundedComponent extends React.ForwardRefExoticComponent<
    SwitchProps & React.RefAttributes<HTMLElement>
> {
    __ANT_SWITCH: boolean;
}

// eslint-disable-next-line max-len
const Switch: CompoundedComponent = React.forwardRef<HTMLButtonElement, AntdSwitchProps & React.RefAttributes<HTMLButtonElement>>(
    ({className, ...restProps}, ref) => {
        const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
        const cssVar = theme?.cssVar;
        const prefixCls = getPrefixCls('switch', restProps.prefixCls);
        const antPrefix = getPrefixCls('');
        const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
        return wrapSSROsui(
            <AntdSwitch
                ref={ref}
                className={classNames(clsPrefix, className)}
                {...restProps}
            />);
    }) as CompoundedComponent;

// eslint-disable-next-line no-underscore-dangle
Switch.__ANT_SWITCH = true;

export default Switch;
