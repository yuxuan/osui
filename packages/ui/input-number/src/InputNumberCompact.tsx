import React, {useCallback, useContext} from 'react';
import classNames from 'classnames';
import {useDerivedState} from '@huse/derived-state';
import Button from '@osui/button';
import Input from '@osui/input';
import {useBrandContext} from '@osui/brand-provider';
import {ConfigProvider, theme} from 'antd';
import InputNumber, {InputNumberProps} from './InputNumber';
import {useStyle} from './style';

const clsPrefix = 'osui-input-number-compact';
const {useToken} = theme;
type ValueType = string | number;
export interface InputNumberCompactProps<T extends ValueType = ValueType> extends InputNumberProps<T> {
    inputNumberClassName?: string;
    plusIcon?: React.ReactNode;
    minusIcon?: React.ReactNode;
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
        tailLabel,
        plusIcon,
        minusIcon,
        ...props
    }: React.PropsWithChildren<InputNumberCompactProps<T>>,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('osui-input-nunmber-compact', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();
    const brandContext = useBrandContext();
    const initValue: T = defaultValue === undefined ? (value || 0 as T) : defaultValue;
    const [inputValue, setInputValue] = useDerivedState<T>(initValue);
    const handleChange = useCallback(
        (value: any) => {
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
    const borderRadius = brandContext.designToken?.token?.borderRadius;
    return wrapSSROsui(
        <>
            <Input.Group
                compact
                className={classNames(clsPrefix, className)}
            >
                <Button
                    disabled={disabled}
                    onClick={handleMinus}
                    icon={minusIcon ?? '-'}
                    className={`${clsPrefix}-minus-btn`}
                />
                <InputNumber
                    ref={ref}
                    {...props}
                    value={inputValue}
                    onChange={handleChange}
                    className={classNames(`${clsPrefix}-input-number`, inputNumberClassName)}
                    controls={false}
                    disabled={disabled}
                />
                <Button
                    style={{borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius}}
                    disabled={disabled}
                    onClick={handlePlus}
                    icon={plusIcon ?? '+'}
                    className={`${clsPrefix}-plus-btn`}
                />
                {
                    typeof tailLabel === 'string'
                        ? <span className={`osui-input-number-tail-label ${hashId}`}>{tailLabel}</span>
                        : tailLabel
                }
            </Input.Group>
        </>
    );
}

export default React.forwardRef(InputNumberCompact);
