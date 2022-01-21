import React from 'react';
import {Switch as AntdSwitch} from 'antd';
import {SwitchProps as AntdSwitchProps} from 'antd/lib/switch';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-switch';

export type SwitchProps = AntdSwitchProps;

export interface CompoundedComponent extends React.ForwardRefExoticComponent<
    SwitchProps & React.RefAttributes<HTMLElement>
> {
    __ANT_SWITCH: boolean;
}

const Switch: CompoundedComponent = React.forwardRef(({className, ...restProps}, ref) => {
    return <AntdSwitch ref={ref} className={classNames(clsPrefix, className)} {...restProps} />;
}) as CompoundedComponent;

// eslint-disable-next-line no-underscore-dangle
Switch.__ANT_SWITCH = true;

export default Switch;
