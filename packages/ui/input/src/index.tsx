import React, { useCallback, useState, useRef, useMemo } from 'react';
import { Input as AntdInput } from 'antd';
import {composeRef} from 'rc-util/lib/ref';
import {useBrandContext} from '@osui/brand-provider';
import {IconSearchOutlined} from '@osui/icons';
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
    Search: typeof Search;
    TextArea: any;
    Password: typeof AntdInput.Password;
}

const Input = React.forwardRef<any, AntdInputProps>(({ className, onFocus, onBlur, disabled, ...props }, ref) => {
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

export interface SearchProps extends AntdSearchProps {
    withSuffixIcon?: boolean;
}

const Search = React.forwardRef<any, SearchProps>(
    (props, ref) => {
        const {
            className,
            disabled,
            onBlur,
            onFocus,
            onChange,
            onSearch,
            // withSuffixIcon会与enterButton相冲突，不能同时使用
            withSuffixIcon,
            suffix,
        } = props;
        const inputRef = useRef(null);
        const {brand} = useBrandContext();

        const [focused, setFocused] = useState(false);

        const innerClassNames = classNames(clsPrefix, className, {
            [`${clsPrefix}-focused`]: focused,
            [`${clsPrefix}-disabled`]: disabled,
        });
        const innerWithSuffixIcon = withSuffixIcon ?? brand === 'icloud';
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
        const handleSearch = useCallback(
            e => {
                onSearch && onSearch((inputRef.current as any).input.value, e);
            },
            [onSearch]
        );
        const handleClick = useCallback(
            e => {
                handleSearch(e);
            },
            [handleSearch]
        );
        const handleChange = useCallback(
            e => {
                // 点击清除时也要调用onSearch
                if (e && e.target && e.type === 'click' && onSearch) {
                    onSearch(e.target.value, e);
                }
                if (onChange) {
                    onChange(e);
                }
            },
            [onSearch, onChange]
        );
        // 处理搜索图标，如果没有传入的话，默认是搜索icon。TODO： loading的支持
        const innerSuffix = useMemo(
            () => {
                let icon = suffix;
                if (innerWithSuffixIcon && typeof icon === 'undefined') {
                    icon = <IconSearchOutlined />;
                }
                if (React.isValidElement(icon)) {
                    return React.cloneElement(
                        icon,
                        {
                            className: `${clsPrefix}-search-icon`,
                            onClick: handleClick,
                        }
                    );
                }
                return icon;
            },
            [suffix, innerWithSuffixIcon, handleClick]
        );
        if (innerWithSuffixIcon) {
            return (
                <AntdInput
                    ref={composeRef(inputRef, ref)}
                    {...props}
                    className={classNames(clsPrefix, innerClassNames)}
                    disabled={disabled}
                    suffix={innerSuffix}
                    onPressEnter={handleSearch}
                    onChange={handleChange}
                />
            );
        }
        return (
            <AntdInput.Search
                ref={composeRef(inputRef, ref)}
                {...props}
                className={classNames(clsPrefix, innerClassNames)}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />);
    }
);

Input.Search = Search;

export default Input;
