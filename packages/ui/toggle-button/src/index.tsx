/**
 * @file ToggleButton 组件
 * @author zhusen
 */
import React, {useCallback} from 'react';
import {Button} from 'antd';
import {ButtonProps} from 'antd/es/button';
import {IconDownArrow, IconMore} from '@osui/icons';
import classNames from 'classnames';
import {useDerivedState} from '@huse/derived-state';
import './index.less';

const clsPrefix = 'osui-toggle-button';

interface ToggleButtonProps extends ButtonProps {
    num?: number;
    hasSelectNumber?: boolean;
    hasShowNumber?: boolean;
    hasArrow?: boolean;
    className?: string;
    children?: React.ReactNode;
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
        ...restProps
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
            {...restProps}
        >
            {beforeIconCloned}
            {children}
            {hasShowNumber ? <span className="num">{num}</span> : null}
            {hasSelectNumber ? <span className="select-num">（+{num}）</span> : null}
            {hasArrow ? <IconDownArrow className={`${clsPrefix}-afterIcon`} /> : null}
        </Button>
    );
});

export const ActionToggleButton: React.FC<ToggleButtonProps> = ({className, ...props}) => {
    const classnames = classNames(`${clsPrefix}-actionButton`, className);
    return (
        <ToggleButton {...props} className={classnames} icon={<IconMore />} />
    );
};

export default ToggleButton;
