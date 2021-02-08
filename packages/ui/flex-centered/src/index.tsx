import {createElement, CSSProperties, FC, HTMLAttributes} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    inline?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
}

const FlexCentered: FC<Props> = ({inline = false, vertical = true, horizontal = false, style, ...props}) => {
    const baseStyle: CSSProperties = {
        display: inline ? 'inline-flex' : 'flex',
        alignItems: vertical ? 'center' : undefined,
        justifyContent: horizontal ? 'center' : undefined,
    };

    return createElement(
        inline ? 'span' : 'div',
        {
            style: {...baseStyle, ...style},
            ...props,
        }
    );
};

export default FlexCentered;
