import React, {useLayoutEffect, useState, useContext} from 'react';
import {Form as AntdForm, ConfigProvider} from 'antd';
import type {
    FormInstance,
    FormProps as AntdFormProps,
    ErrorListProps,
    Rule,
    RuleObject,
    RuleRender,
    FormListProps,
} from 'antd/es/form';
import {FormContext} from 'antd/es/form/context';
import type {FormItemProps} from 'antd/es/form/FormItem';
import classNames from 'classnames';
import useLabelLayout from './useLabelLayout';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-form';

type FormProps = AntdFormProps & {
    labelMaxWidth?: number;
    icloudLabelLayout?: boolean;
};

const InternalForm = React.forwardRef<FormInstance, React.PropsWithChildren<FormProps>>((props, ref) => {
    // 检测是否有required的内容
    const [hasRequiredItem, setHasRequiredItem] = useState(0);
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('form', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
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

    useLabelLayout(props.name, props.labelMaxWidth, props.layout, props.icloudLabelLayout);

    const internalLableAlign = props.labelAlign ?? 'left';

    return wrapSSROsui(
        <AntdForm
            ref={ref}
            {...props}
            className={classNames(clsPrefix, {'has-required-item': hasRequiredItem > 0}, props.className)}
            labelAlign={internalLableAlign}
        />
    );
}) as <Values = any>(
    props: React.PropsWithChildren<FormProps> & { ref?: React.Ref<FormInstance<Values>> },
) => React.ReactElement;

// ==== 对Form.Item的覆盖 ====
type ValidateMessageLayout = 'inline' | 'default';

function InternalFormItem<Values = any>(props: FormItemProps<Values> & {
    validateMessageLayout?: ValidateMessageLayout;
}): React.ReactElement {
    const formContext = useContext(FormContext);
    const {validateMessageLayout = 'default', extra, colon = true, label, ...restProps} = props;
    // 对extra的样式修改
    const hasHint = !!extra;
    const itemClassName = classNames(
        restProps.className,
        `${clsPrefix}-validate-message-${validateMessageLayout}`,
        {
            [`${clsPrefix}-validate-message-has-hint`]: hasHint,
        }
    );

    const mergedColon = formContext.colon ?? (formContext.vertical ? false : colon);

    const innerLabel = label && (mergedColon ? <>{label}：</> : label);

    return (
        <AntdForm.Item
            {...restProps}
            className={itemClassName}
            extra={extra}
            colon={false}
            label={innerLabel}
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
    useLabelLayout: (formName?: string, maxWidth?: number, layout?: FormProps['layout']) => void;
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

export type {FormItemProps} from 'antd/es/form';
export default Form;
