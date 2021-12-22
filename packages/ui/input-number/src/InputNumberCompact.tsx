import React, {useCallback} from 'react';
import classNames from 'classnames';
import {InputNumberProps as AntdInputNumberProps} from 'antd/lib/input-number';
import {useDerivedState} from '@huse/derived-state';
import Button from '@osui/button';
import Input from '@osui/input';
import InputNumber from './InputNumber';
import './inputNumber.less';

const clsPrefix = 'osui-input-number-compact';

export interface InputNumberCompactProps extends AntdInputNumberProps {
    inputNumberClassName?: string;
}

function InputNumberCompact(
    {
        className,
        inputNumberClassName,
        defaultValue,
        value,
        onChange,
        step = 1,
        disabled,
        ...props
    }: InputNumberCompactProps,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const initValue = defaultValue === undefined ? (value || 0) : defaultValue;
    const [inputValue, setInputValue] = useDerivedState(initValue);
    const handleChange = useCallback(
        value => {
            setInputValue(value);
            onChange?.(value);
        },
        [onChange, setInputValue]
    );
    const handleMinus = useCallback(
        () => {
            handleChange(inputValue !== undefined && Number(inputValue) - Number(step));
        },
        [handleChange, inputValue, step]
    );
    const handlePlus = useCallback(
        () => {
            handleChange(inputValue !== undefined && Number(inputValue) + Number(step));
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
