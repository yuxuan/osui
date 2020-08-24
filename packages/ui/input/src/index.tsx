import React from 'react';
import {Input as AntdInput} from 'antd';
import { InputProps as AntdInputProps, TextAreaProps as AntdTextAreaProps} from 'antd/es/input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';

export type InputProps = AntdInputProps;

interface InputInterface extends React.FC<InputProps> {
    Group: typeof AntdInput.Group;
    Search: typeof AntdInput.Search;
    TextArea: any;
    Password: typeof AntdInput.Password;
}

const Input = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
}) as unknown as InputInterface;

Input.Password = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput.Password ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

Input.TextArea = React.forwardRef<any, AntdTextAreaProps>((props, ref) => {
    return <AntdInput.TextArea ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

Input.Group = AntdInput.Group;
Input.Search = AntdInput.Search;

export default Input;
