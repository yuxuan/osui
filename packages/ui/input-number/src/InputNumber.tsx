import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {InputNumberProps as AntdInputNumberProps} from 'antd/es/input-number';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input-number';

type ValueType = string| number;

interface InputNumberProps<T extends ValueType=ValueType> extends AntdInputNumberProps<T> {
    tailLabel?: React.ReactNode;
}

function InputNumber<T extends ValueType=ValueType>(
    {tailLabel, className, ...props}: InputNumberProps<T>,
    ref: React.Ref<HTMLInputElement> | undefined
) {
    const innerClassName = classNames(clsPrefix, className);
    return (
        <>
            <AntdInputNumber ref={ref} className={innerClassName} {...props} />
            {typeof tailLabel === 'string' ? <span className={`${clsPrefix}-tail-label`}>{tailLabel}</span> : tailLabel}
        </>
    );
}

export type {InputNumberProps} from 'antd';

const ForwardedInputNumber = React.forwardRef(InputNumber);

export default ForwardedInputNumber as (<T extends ValueType = ValueType>(
    props: React.PropsWithChildren<InputNumberProps<T>> & {
    ref?: React.Ref<HTMLInputElement>;
},
) => React.ReactElement) & { displayName?: string };

