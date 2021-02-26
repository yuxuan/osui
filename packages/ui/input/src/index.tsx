import React, {useCallback, useState} from 'react';
import {Input as AntdInput} from 'antd';
import {
    InputProps as AntdInputProps,
    TextAreaProps as AntdTextAreaProps,
    SearchProps as AntdSearchProps,
} from 'antd/es/input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';

export type InputProps = AntdInputProps;

interface InputInterface extends React.FC<InputProps> {
    Group: typeof AntdInput.Group;
    Search: typeof AntdInput.Search;
    TextArea: any;
    Password: typeof AntdInput.Password;
}

const Input = React.forwardRef<any, AntdInputProps>(({className, onFocus, onBlur, disabled, ...props}, ref) => {
    const [focused, setFocused] = useState(false);
    const innerClassNames = classNames(clsPrefix, className, {
        [`${clsPrefix}-focused`]: focused,
        [`${clsPrefix}-disabled`]: disabled,
    });
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
    return (
        <AntdInput
            ref={ref}
            className={innerClassNames}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            {...props}
        />
    );
}) as unknown as InputInterface;

Input.Password = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput.Password ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

Input.TextArea = React.forwardRef<any, AntdTextAreaProps>((props, ref) => {
    return <AntdInput.TextArea ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

Input.Group = AntdInput.Group;
Input.Search = React.forwardRef<any, AntdSearchProps>(({className, disabled, onBlur, onFocus, ...props}, ref) => {
    const [focused, setFocused] = useState(false);

    const innerClassNames = classNames(clsPrefix, className, {
        [`${clsPrefix}-focused`]: focused,
        [`${clsPrefix}-disabled`]: disabled,
    });
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
    return (
        <AntdInput.Search
            ref={ref}
            {...props}
            className={classNames(clsPrefix, innerClassNames)}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />);
});

export default Input;
