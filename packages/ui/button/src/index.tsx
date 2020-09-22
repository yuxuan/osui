import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/es/button';
import classNames from 'classnames';
import {IconSpinner} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-button';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType | 'strong' | 'only-icon';
}

/* eslint-disable max-len */
export interface ButtonInterface extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
    Group: typeof AntdButton.Group;
}

/* eslint-disable complexity */
const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = ({type = 'default', loading, icon, style, disabled, ...props}, ref) => {
    let innerIcon = icon;
    let innerStyle = style;

    // 当loading且有icon的button时，icon替换成spinner
    if (loading && icon) {
        innerIcon = <IconSpinner className={`${clsPrefix}-icon-spinner`} />;
    }
    // 当loading但没有icon时，children替换成spinner，且最小宽度保留88
    if (loading && !icon) {
        innerIcon = <IconSpinner className={`${clsPrefix}-icon-spinner`} />;
        innerStyle = {minWidth: 88, ...style};
    }

    return (
        <AntdButton
            ref={ref as any}
            {...props}
            type={type as AntdButtonProps['type']} // 因为不兼容，做了强制类型转换
            className={
                classNames(
                    props.className,
                    clsPrefix,
                    {
                        [`${clsPrefix}-loading`]: loading,
                        [`${clsPrefix}-disabled`]: loading || disabled,
                    }
                )
            }
            icon={innerIcon}
            disabled={!!loading || disabled}
            style={innerStyle}
        />
    );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as ButtonInterface;

Button.Group = AntdButton.Group;

export default Button;
