import * as React from 'react';
import {Input as AntdInput} from 'antd';
import {InputProps as AntdInputProps} from 'antd/lib/Input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';
export type InputProps = AntdInputProps;

const Input = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

Input.Group = AntdInput.Group;
Input.Search = AntdInput.Search;
Input.TextArea = AntdInput.TextArea;
Input.Password = AntdInput.Password;

export default Input;

