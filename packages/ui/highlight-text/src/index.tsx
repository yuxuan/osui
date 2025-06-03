import React from 'react';
import classNames from 'classnames';
// import './index.less';
import {ConfigProvider, theme} from 'antd';
import {useStyle} from './style';

const clsPrefix = 'osui-highlight-text';
const {useToken} = theme;
export interface MarkProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface Props {
    children: string;
    mark?: string;
    markProps?: MarkProps;
    prefixCls?: string;
}

const breakWordsByMark = (input: string, mark?: string, props?: MarkProps) => {
    const className = props && props.className || '';

    if (typeof input !== 'string' || typeof mark !== 'string') {
        return input;
    }

    const parts = input.split(new RegExp(`(${mark})`, 'gi'));
    return parts.map((part, index) => {
        if (!part) {
            return null;
        }

        if (part.toLowerCase() === mark.toLowerCase()) {
            return (
                <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${part}-${index}`}
                    {...props}
                    className={classNames(`${clsPrefix}-mark`, className)}
                >
                    {part}
                </span>
            );
        } else {
            return part;
        }
    });
};

const HighlightText: React.FC<Props> = ({children, mark, markProps, prefixCls: prefixClsIn}) => {
    const [text, setText] = React.useState<React.ReactNode>(children);
    const {getPrefixCls, theme} = React.useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('highlightText', prefixClsIn);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();

    React.useLayoutEffect(
        () => {
            const requestId = window.requestAnimationFrame(() => {
                setText(breakWordsByMark(children, mark, {
                    ...markProps,
                    className: classNames(markProps?.className, hashId),
                }));
            });
            return () => {
                window.cancelAnimationFrame(requestId);
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children, mark]
    );

    return wrapSSROsui(<>{text}</>);
};

export default HighlightText;
