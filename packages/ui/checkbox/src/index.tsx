import React, {useContext} from 'react';
import {Checkbox as AntdCheckbox, ConfigProvider} from 'antd';
import {
    CheckboxProps as AntdCheckboxProps,
    CheckboxGroupProps as AntdCheckboxGroupProps,
    CheckboxRef,
} from 'antd/es/checkbox';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const AntdCheckboxGroup = AntdCheckbox.Group;

const clsPrefix = 'osui-checkbox';

export type CheckboxProps = AntdCheckboxProps;
export type CheckboxGroupProps = AntdCheckboxGroupProps;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({className, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('checkbox-group', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    return wrapSSROsui(
        <AntdCheckboxGroup
            className={classNames(`${clsPrefix}-group`, className)}
            {...props}
        />
    );
};
export interface CompoundedComponent
    extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<CheckboxRef>> {
    Group: typeof CheckboxGroup;
    __ANT_CHECKBOX: boolean;
}

const Checkbox: CompoundedComponent = React.forwardRef(({className, ...props}, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('checkbox', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    return wrapSSROsui(
        <AntdCheckbox
            ref={ref}
            className={classNames(clsPrefix, className)}
            {...props}
        />
    );
}) as CompoundedComponent;

Checkbox.Group = CheckboxGroup;
// eslint-disable-next-line no-underscore-dangle
Checkbox.__ANT_CHECKBOX = true;

export type {CheckboxOptionType, CheckboxChangeEvent} from 'antd/es/checkbox';
export default Checkbox;
