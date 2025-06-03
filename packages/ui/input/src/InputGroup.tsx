import React, {isValidElement, useCallback, useContext, useState} from 'react';
import {Input as AntdInput, ConfigProvider} from 'antd';
import {GroupProps as AntdInputGroupProps} from 'antd/es/input';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-input-group';

const OSUIInputGroup = (
    {className, onFocus, onBlur, onMouseEnter, onMouseLeave, children, compact, ...props}: AntdInputGroupProps
) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const antPrefix = getPrefixCls('input');
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('input', props.prefixCls);
    const antPrefixO = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle('osui-input', prefixCls, cssVar, antPrefixO);
    const [focused, setFocused] = useState(false);
    const [hover, setHover] = useState(false);
    const innerClassNames = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-hover`]: hover,
            [`${clsPrefix}-focused`]: focused,
            [`${clsPrefix}-compact`]: compact,
        },
        className
    );
    const handleFocus = useCallback(
        (e: any) => {
            onFocus && onFocus(e);
            setFocused(true);
        },
        [onFocus]
    );
    const handleBlur = useCallback(
        (e: any) => {
            onBlur && onBlur(e);
            setFocused(false);
        },
        [onBlur]
    );
    const handleMouseEnter = useCallback(
        (e: any) => {
            onMouseEnter?.(e);
            setHover(true);
        },
        [onMouseEnter]
    );
    const handleMouseLeave = useCallback(
        (e: any) => {
            onMouseLeave?.(e);
            setHover(false);
        },
        [onMouseLeave]
    );

    const processedChildren = React.Children.map(children, child => {
        if (!isValidElement(child)) {
            return;
        }
        if (child.props.className?.includes('input-group-addon')) {
            const clonedChild = React.cloneElement(
                child as React.ReactElement,
                {
                    onFocus: (e: any) => {
                        child.props?.onFocus(e);
                        handleFocus(e);
                    },
                    onBlur: (e: any) => {
                        child.props?.onBlur(e);
                        handleBlur(e);
                    },
                }
            );
            return (
                <span className={`${antPrefix}-group-addon`}>{clonedChild}</span>
            );
        }
        return child;
    });

    return wrapSSROsui(
        <AntdInput.Group
            className={innerClassNames}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            compact={compact}
            {...props}
        >
            {processedChildren}
        </AntdInput.Group>
    );
};

export default OSUIInputGroup;
