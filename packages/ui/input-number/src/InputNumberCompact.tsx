import React, {useCallback} from 'react';
import classNames from 'classnames';
import {InputNumberProps as AntdInputNumberProps} from 'antd/lib/input-number';
import {useDerivedState} from '@huse/derived-state';
import Button from '@osui/button';
import Input from '@osui/input';
import InputNumber from './InputNumber';
import './inputNumber.less';

const clsPrefix = 'osui-input-number-compact';

type ValueType = string | number;
export interface InputNumberCompactProps<T extends ValueType = ValueType> extends
Omit<AntdInputNumberProps<T>, 'onChange'> {
    inputNumberClassName?: string;
    onChange: (value: ValueType) => void;
}

function InputNumberCompact<T extends ValueType = ValueType>(
    {
        className,
        inputNumberClassName,
        defaultValue,
        value,
        onChange,
        step = 1,
        disabled,
        ...props
    }: React.PropsWithChildren<InputNumberCompactProps<T>>,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const initValue: T = defaultValue === undefined ? (value || 0 as T) : defaultValue;
    const [inputValue, setInputValue] = useDerivedState<T>(initValue);
    const handleChange = useCallback(
        (value: T) => {
            setInputValue(value);
            onChange?.(value);
        },
        [onChange, setInputValue]
    );
    const handleMinus = useCallback(
        () => {
            handleChange((Number(inputValue) - Number(step)) as T);
        },
        [handleChange, inputValue, step]
    );
    const handlePlus = useCallback(
        () => {
            handleChange((Number(inputValue) + Number(step)) as T);
        },
        [handleChange, inputValue, step]
    );
    return (
        <Input.Group
            compact
            className={classNames(clsPrefix, className)}
        >
            <Button disabled={disabled} onClick={handleMinus} icon="-" className={`${clsPrefix}-minus-btn`} />
            <InputNumber
                ref={ref}
                {...props}
                value={inputValue}
                onChange={handleChange}
                className={classNames(`${clsPrefix}-input-number`, inputNumberClassName)}
                controls={false}
                disabled={disabled}
            />
            <Button disabled={disabled} onClick={handlePlus} icon="+" className={`${clsPrefix}-plus-btn`} />
        </Input.Group>
    );
}

export default React.forwardRef(InputNumberCompact);
