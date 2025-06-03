import React, {useCallback, useState, useRef, useMemo, useContext} from 'react';
import {Input as AntdInput, ConfigProvider} from 'antd';
import {composeRef} from 'rc-util/lib/ref';
import {useBrandContext} from '@osui/brand-provider';
import Button from '@osui/button';
import {IconSearchOutlined} from '@osui/icons';
import {SearchProps as AntdSearchProps} from 'antd/es/input';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

export interface SearchProps extends AntdSearchProps {
    withSuffixIcon?: boolean;
}

const clsPrefix = 'osui-input';

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
            enterButton,
            loading,
            suffix,
            ...inputProps
        } = props;
        const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
        const cssVar = theme?.cssVar;
        const prefixCls = getPrefixCls('input', props.prefixCls);
        const antPrefix = getPrefixCls('', props.prefixCls);
        const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
        const inputRef = useRef(null);
        const {brand} = useBrandContext();

        const [focused, setFocused] = useState(false);

        const innerClassNames = classNames(
            clsPrefix,
            {
                [`${clsPrefix}-focused`]: focused,
                [`${clsPrefix}-disabled`]: disabled,
            },
            className
        );
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
                        icon as any,
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

        const innerEnterButton = useMemo(
            () => {
                if (typeof enterButton === 'string') {
                    return (
                        <Button
                            loading={loading}
                            disabled={disabled}
                            type="primary"
                        >
                            {enterButton}
                        </Button>
                    );
                }
                return enterButton;
            },
            [enterButton, loading, disabled]
        );
        if (innerWithSuffixIcon && !enterButton) {
            return wrapSSROsui(
                <AntdInput
                    ref={composeRef(inputRef, ref)}
                    {...inputProps}
                    className={classNames(clsPrefix, innerClassNames)}
                    disabled={disabled}
                    suffix={innerSuffix}
                    onPressEnter={handleSearch}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            );
        }
        return wrapSSROsui(
            <AntdInput.Search
                ref={composeRef(inputRef, ref)}
                {...props}
                className={classNames(clsPrefix, innerClassNames)}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                enterButton={innerEnterButton}
                loading={loading}
            />
        );
    }
);

export default Search;
