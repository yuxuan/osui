import * as React from 'react';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-highlight-text';

export interface MarkProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface Props {
    children: string;
    mark?: string;
    markProps?: MarkProps;
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

const HighlightText: React.FC<Props> = ({ children, mark, markProps }) => {
    const [text, setText] = React.useState<React.ReactNode>(children);

    React.useLayoutEffect(
        () => {
            const requestId = window.requestAnimationFrame(() => {
                setText(breakWordsByMark(children, mark, markProps));
            });
            return () => {
                window.cancelAnimationFrame(requestId);
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children, mark]
    );

    return <>{text}</>;
};

export default HighlightText;
