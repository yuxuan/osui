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
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-form';

declare function InternalFormItemType(props: FormItemProps): React.ReactElement;
interface Form extends AntdForm {
    useForm: typeof useForm;
    Item: typeof InternalFormItemType;
    List: typeof List;
    Provider: typeof FormProvider;

    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
}

// ==== 对Form的覆盖 ====
const InternalForm: React.ForwardRefRenderFunction<AntdFormInstance, AntdFormProps> = (props, ref) => {
    return <AntdForm ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
};

const Form = React.forwardRef<AntdFormInstance, AntdFormProps>(InternalForm) as Form;

// ==== 对Form.Item的覆盖 ====

type ValidateMessageLayout = 'inline' | 'default';

export interface FormItemProps extends AntdFormItemProps {
    hint?: string;
    validateMessageLayout?: ValidateMessageLayout;
}

function InternalFormItem({hint, validateMessageLayout = 'default', ...props}: FormItemProps): React.ReactElement {
    const hasHint = !!hint;
    const hintComponent = hasHint ? <div className={`${clsPrefix}-form-item-hint`}>{hint}</div> : null;
    const itemClassName = classNames(
        props.className,
        `${clsPrefix}-validate-message-${validateMessageLayout}`,
        {[`${clsPrefix}-validate-message-has-hint`]: hasHint}
    );

    const {children} = props;
    let childNode = children;

    // 只对单个ReactElement做hint处理
    // 增加了hint节点，不能放到Item里面，因为Antd会按照children array处理，丢失onChange、value、等属性
    if (React.isValidElement(children)) {
        childNode = (
            <span {...children.props}>
                {props.children}
                {hintComponent}
            </span>
        );
    }

    return (
        <>
            <AntdForm.Item {...props} className={itemClassName}>
                {childNode}
            </AntdForm.Item>
        </>
    );
}

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
