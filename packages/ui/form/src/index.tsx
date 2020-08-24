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
import Item, {FormItemProps as AntdFormItemProps} from 'antd/es/form/FormItem';
import {FormProvider} from 'antd/es/form/context';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-form';

interface Form extends AntdForm {
    useForm: typeof useForm;
    Item: typeof Item;
    List: typeof List;
    Provider: typeof FormProvider;

    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
}

const InternalForm: React.ForwardRefRenderFunction<AntdFormInstance, AntdFormProps> = (props, ref) => {
    return <AntdForm ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
};

const Form = React.forwardRef<AntdFormInstance, AntdFormProps>(InternalForm) as Form;

Form.Item = AntdForm.Item;
Form.List = List;
Form.useForm = useForm;
Form.Provider = FormProvider;
Form.create = AntdForm.create;

export type Rule = AntdRule;
export type RuleObject = AntdRuleObject;
export type RuleRender = AntdRuleRender;
export type FormInstance = AntdFormInstance;
export type FormProps = AntdFormProps;
export type FormItemProps = AntdFormItemProps;
export default Form;
