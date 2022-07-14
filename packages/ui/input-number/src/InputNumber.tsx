import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {InputNumberProps as AntdInputNumberProps} from 'antd/lib/input-number';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input-number';

type ValueType = string| number;

function InputNumber<T extends ValueType=ValueType>(
    {className, ...props}: AntdInputNumberProps<T>,
    ref: React.Ref<HTMLInputElement> | undefined
) {
    const innerClassName = classNames(clsPrefix, className);
    return <AntdInputNumber ref={ref} className={innerClassName} {...props} />;
}

export type {InputNumberProps} from 'antd';

const ForwardedInputNumber = React.forwardRef(InputNumber);

export default ForwardedInputNumber as (<T extends ValueType = ValueType>(
    props: React.PropsWithChildren<AntdInputNumberProps<T>> & {
    ref?: React.Ref<HTMLInputElement>;
},
) => React.ReactElement) & { displayName?: string };

