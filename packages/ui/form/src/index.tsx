import React from 'react';
import {Form as AntdForm} from 'antd';
import {
    FormInstance,
    FormProps,
    ErrorListProps,
    Rule,
    RuleObject,
    RuleRender,
    FormListProps,
} from 'antd/lib/form';
import {useForm} from 'antd/lib/form/Form';
import List from 'antd/lib/form/FormList';
import {FormItemProps} from 'antd/lib/form/FormItem';
import {FormProvider} from 'antd/lib/form/context';
import {useBrandContext} from '@osui/brand-provider';
import classNames from 'classnames';
import useLabelLayout from './useLabelLayout';
import './index.less';

const clsPrefix = 'osui-form';

const InternalForm = React.forwardRef<FormInstance, FormProps>((props, ref) => {
    const {brand} = useBrandContext();
    const internalLableAlign = props.labelAlign ?? (brand === 'icloud' ? 'left' : 'right');
    return (
        <AntdForm
            ref={ref}
            {...props}
            className={classNames(clsPrefix, props.className)}
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
    const {validateMessageLayout = 'default', extra, ...restProps} = props;
    // 对extra的样式修改
    const hasHint = !!extra;
    const itemClassName = classNames(
        restProps.className,
        `${clsPrefix}-validate-message-${validateMessageLayout}`,
        {
            [`${clsPrefix}-validate-message-has-hint`]: hasHint,
        }
    );

    return (
        <AntdForm.Item
            {...restProps}
            className={itemClassName}
            extra={extra}
        />
    );
}

// ==== 完善Form类型 ====
type InternalFormType = typeof InternalForm;
interface FormInterface extends InternalFormType {
    useForm: typeof useForm;
    Item: typeof InternalFormItem;
    List: typeof List;
    Provider: typeof FormProvider;
    ErrorList: typeof AntdForm.ErrorList;

    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
    useLabelLayout: (formName: string, maxWidth?: number) => void;
}

const Form = InternalForm as FormInterface;

Form.Item = InternalFormItem;
Form.List = List;
Form.useForm = useForm;
Form.Provider = FormProvider;
Form.create = AntdForm.create;
Form.ErrorList = AntdForm.ErrorList;
// osui added
Form.useLabelLayout = useLabelLayout;

export {
    FormInstance,
    FormProps,
    ErrorListProps,
    Rule,
    RuleObject,
    RuleRender,
    FormListProps,
};

export default Form;
