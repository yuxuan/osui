import React, {useLayoutEffect, useState} from 'react';
import {Form as AntdForm} from 'antd';
import type {
    FormInstance,
    FormProps,
    ErrorListProps,
    Rule,
    RuleObject,
    RuleRender,
    FormListProps,
} from 'antd/lib/form';
import type {FormItemProps} from 'antd/lib/form/FormItem';
import {useBrandContext} from '@osui/brand-provider';
import classNames from 'classnames';
import useLabelLayout from './useLabelLayout';
import './index.less';
import IconQuestionMark from './IconQuestionMark';
import {toTooltipProps} from './utils';

const clsPrefix = 'osui-form';

const InternalForm = React.forwardRef<FormInstance, React.PropsWithChildren<FormProps>>((props, ref) => {
    const {brand} = useBrandContext();
    // 检测是否有required的内容
    const [hasRequiredItem, setHasRequiredItem] = useState(0);
    useLayoutEffect(
        () => {
            const formName = props.name;
            if (formName) {
                const requiredItems = document.querySelectorAll(`#${formName} .ant-form-item-required`);
                setHasRequiredItem(requiredItems.length);
            }
        },
        [props.name]
    );
    const internalLableAlign = props.labelAlign ?? (brand === 'icloud' ? 'left' : 'right');
    return (
        <AntdForm
            ref={ref}
            {...props}
            className={classNames(clsPrefix, {'has-required-item': hasRequiredItem > 0}, props.className)}
            labelAlign={internalLableAlign}
        />
    );
}) as <Values = any>(
    props: React.PropsWithChildren<FormProps<Values>> & { ref?: React.Ref<FormInstance<Values>> },
) => React.ReactElement;

// ==== 对Form.Item的覆盖 ====
type ValidateMessageLayout = 'inline' | 'default';

function InternalFormItem<Values = any>(props: FormItemProps<Values> & {
    validateMessageLayout?: ValidateMessageLayout;
}): React.ReactElement {
    const {validateMessageLayout = 'default', extra, tooltip, ...restProps} = props;
    // 对extra的样式修改
    const hasHint = !!extra;
    const itemClassName = classNames(
        restProps.className,
        `${clsPrefix}-validate-message-${validateMessageLayout}`,
        {
            [`${clsPrefix}-validate-message-has-hint`]: hasHint,
        }
    );

    let innerTooltipProps = tooltip;
    const tooltipProps = toTooltipProps(tooltip);
    if (tooltipProps) {
        const {icon = <IconQuestionMark />, ...restTooltipProps} = tooltipProps;
        innerTooltipProps = {icon, ...restTooltipProps};
    }

    return (
        <AntdForm.Item
            {...restProps}
            className={itemClassName}
            extra={extra}
            tooltip={innerTooltipProps}
        />
    );
}

// ==== 完善Form类型 ====
type InternalFormType = typeof InternalForm;
export interface FormInterface extends InternalFormType {
    useForm: typeof AntdForm.useForm;
    Item: typeof InternalFormItem;
    List: typeof AntdForm.List;
    Provider: typeof AntdForm.Provider;
    ErrorList: typeof AntdForm.ErrorList;

    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
    useLabelLayout: (formName: string, maxWidth?: number) => void;
}

const Form = InternalForm as FormInterface;

Form.Item = InternalFormItem;
Form.List = AntdForm.List;
Form.useForm = AntdForm.useForm;
Form.Provider = AntdForm.Provider;
Form.create = AntdForm.create;
Form.ErrorList = AntdForm.ErrorList;
// osui added
Form.useLabelLayout = useLabelLayout;

export type {
    FormInstance,
    FormProps,
    ErrorListProps,
    Rule,
    RuleObject,
    RuleRender,
    FormListProps,
};

export type {FormItemProps} from 'antd/lib/form';
export default Form;
