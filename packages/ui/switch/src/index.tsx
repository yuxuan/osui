import * as React from 'react';
import { Switch as AntdSwitch } from 'antd';
import { SwitchProps as AntdSwitchProps } from 'antd/es/switch';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-switch';

export type SwitchProps = AntdSwitchProps;

const Switch: React.FC<SwitchProps> = ({ className, ...restProps }) => {
    return <AntdSwitch className={classNames(clsPrefix, className)} {...restProps} />;
};

export default Switch;
