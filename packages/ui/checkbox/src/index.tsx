import * as React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxProps as AntdCheckboxProps, CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/lib/Checkbox';
import classNames from 'classnames';
import './index.less';

const AntdCheckboxGroup = AntdCheckbox.Group;

const clsPrefix = 'osui-checkbox';

export type CheckboxProps = AntdCheckboxProps;
export type CheckboxGroupProps = AntdCheckboxGroupProps;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ className, ...restProps }) => {
    return <AntdCheckboxGroup className={classNames(clsPrefix + '-group', className)} {...restProps} />;
};

interface CheckboxInterface extends React.FC<CheckboxProps> {
    Group: typeof CheckboxGroup;
}

const Checkbox: CheckboxInterface = ({ className, ...restProps }) => {
    return <AntdCheckbox className={classNames(clsPrefix, className)} {...restProps} />;
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
