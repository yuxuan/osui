/**
 * @file ToggleButton 组件
 * @author zhusen
 */
import React, {useCallback} from 'react';
import {Button} from 'antd';
import {IconDown} from '@osui/icons';
import classNames from 'classnames';
import {useDerivedState} from '@huse/derived-state';
import './index.less';

const clsPrefix = 'osui-toggle-button';

interface ToggleButtonProps {
    num?: number;
    hasSelectNumber?: boolean;
    hasShowNumber?: boolean;
    hasArrow?: boolean;
    className?: string;
    children: React.ReactNode;
    beforeIcon?: React.ReactNode & React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLElement>;
    isOn?: boolean;
}

const ToggleButton = React.forwardRef<any, ToggleButtonProps>((props, ref) => {
    const {
        beforeIcon,
        num,
        hasArrow,
        hasShowNumber,
        hasSelectNumber,
        className,
        children,
        onClick,
        isOn = false,
    } = props;

    const [clicked, setClicked] = useDerivedState(isOn);

    const handleClickButton = useCallback(
        (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
            if (clicked) {
                setClicked(false);
            }
            else {
                setClicked(true);
            }
            onClick && onClick(e);
        },
        [clicked, onClick, setClicked]
    );

    const beforeIconCloned = beforeIcon && React.cloneElement(
        beforeIcon,
        {className: `${clsPrefix}-beforeIcon ${beforeIcon.props.className ?? ''}`}
    );

    return (
        <Button
            ref={ref}
            onClick={handleClickButton}
            className={classNames(
                clsPrefix,
                {
                    [`${clsPrefix}-clicked`]: clicked,
                    [`${clsPrefix}-number`]: hasShowNumber,
                },
                className
            )}
        >
            {beforeIconCloned}
            {children}
            {hasShowNumber ? <span className="num">{num}</span> : null}
            {hasSelectNumber ? <span className="select-num">（+{num}）</span> : null}
            {hasArrow ? <IconDown className={`${clsPrefix}-afterIcon`} /> : null}
        </Button>
    );
});

export default ToggleButton;