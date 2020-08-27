import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxProps as AntdCheckboxProps, CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/es/checkbox';
import classNames from 'classnames';
import './index.less';

const AntdCheckboxGroup = AntdCheckbox.Group;

const clsPrefix = 'osui-checkbox';

export type CheckboxProps = AntdCheckboxProps;
export type CheckboxGroupProps = AntdCheckboxGroupProps;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ className, ...props }) => {
    return <AntdCheckboxGroup className={classNames(`${clsPrefix}-group`, className)} {...props} />;
};

interface CheckboxInterface extends React.FC<CheckboxProps> {
    Group: typeof CheckboxGroup;
}

const Checkbox: CheckboxInterface = ({ className, ...props }) => {
    return <AntdCheckbox className={classNames(clsPrefix, className)} {...props} />;
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
