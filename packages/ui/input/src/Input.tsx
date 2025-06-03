import React, {useCallback, useContext, useState} from 'react';
import {Input as AntdInput, ConfigProvider} from 'antd';
import {InputProps as AntdInputProps} from 'antd/es/input';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-input';

export type InputProps = AntdInputProps;

const OSUIInput = React.forwardRef<HTMLInputElement, InputProps>((
    {className, onFocus, onBlur, disabled, ...props},
    ref
) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('input', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const [focused, setFocused] = useState(false);
    const innerClassNames = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-focused`]: focused,
            [`${clsPrefix}-disabled`]: disabled,
        },
        className
    );
    const handleFocus = useCallback(
        e => {
            onFocus && onFocus(e);
            setFocused(true);
        },
        [onFocus]
    );
    const handleBlur = useCallback(
        e => {
            onBlur && onBlur(e);
            setFocused(false);
        },
        [onBlur]
    );
    // @ts-expect-error
    const TypeFixedAntdInput: React.ForwardRefExoticComponent<
        AntdInputProps & React.RefAttributes<HTMLInputElement>
    > = AntdInput;
    return wrapSSROsui(
        <TypeFixedAntdInput
            ref={ref}
            className={innerClassNames}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            {...props}
        />
    );
});

export default OSUIInput;
