import React from 'react';
import {Form as AntdForm} from 'antd';
import {
    Rule as AntdRule,
    RuleObject as AntdRuleObject,
    RuleRender as AntdRuleRender,
    FormInstance as AntdFormInstance,
    FormProps as AntdFormProps,
} from 'antd/es/form';
import {useForm} from 'antd/es/form/Form';
import List from 'antd/es/form/FormList';
import {FormItemProps as AntdFormItemProps} from 'antd/es/form/FormItem';
import {FormProvider} from 'antd/es/form/context';
import {useBrandContext} from '@osui/brand-provider';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-form';

const InternalForm: React.ForwardRefRenderFunction<any, AntdFormProps> = (props, ref) => {
    return <AntdForm ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
};

// ==== 对Form.Item的覆盖 ====
type ValidateMessageLayout = 'inline' | 'default';

export interface FormItemProps extends AntdFormItemProps {
    validateMessageLayout?: ValidateMessageLayout;
}

function InternalFormItem(
    {validateMessageLayout = 'default', extra, labelAlign, ...props}: FormItemProps
): React.ReactElement {
    const {brand} = useBrandContext();
    // 对extra的样式修改
    const hasHint = !!extra;
    const internalLableAlign = labelAlign === undefined ? (brand === 'icloud' ? 'left' : 'right') : labelAlign;
    const itemClassName = classNames(
        props.className,
        `${clsPrefix}-validate-message-${validateMessageLayout}`,
        {[`${clsPrefix}-validate-message-has-hint`]: hasHint}
    );

    return <AntdForm.Item {...props} className={itemClassName} extra={extra} labelAlign={internalLableAlign} />;
}

// ==== 完善Form类型 ====
type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
    useForm: typeof useForm;
    Item: typeof InternalFormItem;
    List: typeof List;
    Provider: typeof FormProvider;

    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
}

const Form = React.forwardRef<any, AntdFormProps>(InternalForm) as unknown as FormInterface;

Form.Item = InternalFormItem;
Form.List = List;
Form.useForm = useForm;
Form.Provider = FormProvider;
Form.create = AntdForm.create;

export type Rule = AntdRule;
export type RuleObject = AntdRuleObject;
export type RuleRender = AntdRuleRender;
export type FormInstance = AntdFormInstance;
export type FormProps = AntdFormProps;

export default Form;
