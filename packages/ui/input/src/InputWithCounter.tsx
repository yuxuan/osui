import React, {useCallback} from 'react';
import {InputProps as AntdInputProps} from 'antd/lib/input';
import {useDerivedState} from '@huse/derived-state';
import classNames from 'classnames';
import './index.less';
import OSUIInput from './Input';

const clsPrefix = 'osui-input';

type InputWithCounterProps = Omit<AntdInputProps, 'value'> & {
    showCount?: boolean;
    value?: string;
    defaultValue?: string;
};

// eslint-disable-next-line complexity
const InputWithCounter = React.forwardRef<any, InputWithCounterProps>((
    {className, disabled, defaultValue, value, onChange, showCount, maxLength, ...props}
    , ref
) => {
    const initValue = defaultValue === undefined ? (value || '') : defaultValue;
    const [inputValue, setInputValue] = useDerivedState(initValue);
    const innerClassNames = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-show-count`]: showCount,
            [`${clsPrefix}-show-count-with-max-length`]: showCount && maxLength,
        },
        className
    );
    const handleChange = useCallback(
        e => {
            setInputValue(e.target.value);
            onChange?.(e);
        },
        [onChange, setInputValue]
    );
    const inputValueLength = inputValue?.length || 0;
    const showCountWithMaxLengthStyle = (showCount && maxLength) && props.style?.width && {
        // 通过宽度-8px来固定位置
        width: `calc(${props.style.width}px - 8px)`,
        left: `-${props.style.width || 0}px`,
        // 这个用来固定文字，当由0变成10的时候不会抖动
        textAlign: 'right' as const,
    } || {};
    return (
        <>
            <OSUIInput
                ref={ref}
                className={innerClassNames}
                maxLength={maxLength}
                onChange={handleChange}
                value={inputValue}
                {...props}
            />
            {
                showCount && (
                    <div
                        className={`${clsPrefix}-show-count-counter`}
                        style={showCountWithMaxLengthStyle}
                    >
                        {
                            maxLength
                                ? `${inputValueLength} / ${maxLength}`
                                : inputValueLength
                        }
                    </div>
                )
            }
        </>
    );
});

export default InputWithCounter;
