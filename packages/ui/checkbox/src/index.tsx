import React from 'react';
import {Checkbox as AntdCheckbox} from 'antd';
import {
    CheckboxProps as AntdCheckboxProps,
    CheckboxGroupProps as AntdCheckboxGroupProps,
    CheckboxRef,
} from 'antd/es/checkbox';
import classNames from 'classnames';
import './index.less';

const AntdCheckboxGroup = AntdCheckbox.Group;

const clsPrefix = 'osui-checkbox';

export type CheckboxProps = AntdCheckboxProps;
export type CheckboxGroupProps = AntdCheckboxGroupProps;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({className, ...props}) => {
    return <AntdCheckboxGroup className={classNames(`${clsPrefix}-group`, className)} {...props} />;
};
export interface CompoundedComponent
    extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<CheckboxRef>> {
    Group: typeof CheckboxGroup;
    Card: typeof CardCheckbox;
    __ANT_CHECKBOX: boolean;
}

const Checkbox: CompoundedComponent = React.forwardRef(({className, ...props}, ref) => {
    return <AntdCheckbox ref={ref} className={classNames(clsPrefix, className)} {...props} />;
}) as CompoundedComponent;

const CardCheckbox: React.FC<CheckboxProps & {title?: string, description?: string}> =
({title, description, className, ...props}) => {
    return (
        <Checkbox className={classNames(`${clsPrefix}-card`, className)} {...props}>
            {title && <div className={`${clsPrefix}-card-title`}>{title}</div>}
            {description && <div className={`${clsPrefix}-card-description`}>{description}</div>}
        </Checkbox>
    );
};

Checkbox.Group = CheckboxGroup;
Checkbox.Card = CardCheckbox;
// eslint-disable-next-line no-underscore-dangle
Checkbox.__ANT_CHECKBOX = true;

export type {CheckboxOptionType, CheckboxChangeEvent} from 'antd/es/checkbox';
export default Checkbox;
