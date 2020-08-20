import React from 'react';
import {Input as AntdInput} from 'antd';
import {InputProps as AntdInputProps} from 'antd/es/input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';

export type InputProps = AntdInputProps;

interface InputInterface extends React.FC<InputProps> {
    Group: typeof AntdInput.Group;
    Search: typeof AntdInput.Search;
    TextArea: typeof AntdInput.TextArea;
    Password: typeof AntdInput.Password;
}

const Input = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
}) as unknown as InputInterface;

Input.Group = AntdInput.Group;
Input.Search = AntdInput.Search;
Input.TextArea = AntdInput.TextArea;
Input.Password = AntdInput.Password;

export default Input;
