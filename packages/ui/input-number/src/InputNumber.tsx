import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {InputNumberProps as AntdInputNumberProps} from 'antd/lib/input-number';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input-number';

const InputNumber = React.forwardRef<HTMLInputElement, AntdInputNumberProps>(({className, ...props}, ref) => {
    const innerClassName = classNames(className, clsPrefix);
    return <AntdInputNumber ref={ref} className={innerClassName} {...props} />;
});

export type {InputNumberProps} from 'antd';
export default InputNumber;
