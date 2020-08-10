import * as React from 'react';
import {Input as AntdInput} from 'antd';
import {InputProps as AntdInputProps} from 'antd/lib/Input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';
const {TextArea} = AntdInput;
export type InputProps = AntdInputProps;

const Input: React.FC<InputProps> = props => {
    return <AntdInput className={classNames(clsPrefix, props.className)} {...props} />;
};
Input.TextArea = TextArea;

export default Input;

