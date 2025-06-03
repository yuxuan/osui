import React, {useCallback, useContext} from 'react';
import {InputProps as AntdInputProps} from 'antd/es/input';
import {useDerivedState} from '@huse/derived-state';
import classNames from 'classnames';
// import './index.less';
import {ConfigProvider, theme} from 'antd';
import OSUIInput from './Input';
import {useStyle} from './style';

const clsPrefix = 'osui-input';
const {useToken} = theme;

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
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('input', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();

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
    return wrapSSROsui(
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
                        className={`${clsPrefix}-show-count-counter ${hashId}`}
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
