import * as React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxProps as AntdCheckboxProps, CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/lib/Checkbox';
import classNames from 'classnames';
import './index.less';

const AntdCheckboxGroup = AntdCheckbox.Group;

const clsPrefix = 'osui-checkbox';

export type CheckboxProps = AntdCheckboxProps;

const CheckboxGroup: React.FC<AntdCheckboxGroupProps> = ({ className, ...restProps }) => {
    return <AntdCheckboxGroup className={classNames(clsPrefix + '-group', className)} {...restProps} />;
};
const Checkbox: React.FC<CheckboxProps> = ({ className, ...restProps }) => {
    return <AntdCheckbox className={classNames(clsPrefix, className)} {...restProps} />;
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
