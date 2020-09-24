import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/es/button';
import classNames from 'classnames';
import {IconSpinner} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-button';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType | 'strong' | 'only-icon';
    success?: boolean;
    error?: boolean;
    warning?: boolean;
}

export type ButtonInterface = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;

/* eslint-disable complexity */
const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
    {type = 'default', loading, icon, style, disabled, ...props}, ref
) => {
    let innerIcon = icon;
    let innerStyle = style;

    // 当loading且有icon的button时，icon替换成spinner，不论什么情况都要保持后面的chidlren
    if (loading && icon) {
        innerIcon = <IconSpinner className={`${clsPrefix}-icon-spinner ${clsPrefix}-keep-children`} />;
    }
    // 当loading但没有icon时，children替换成spinner，且最小宽度保留88，根据主题保留或者隐藏children
    if (loading && !icon) {
        innerIcon = <IconSpinner className={`${clsPrefix}-icon-spinner`} />;
        innerStyle = {minWidth: 88, ...style};
    }

    const {success, error, danger, warning} = props;

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
                        [`${clsPrefix}-face-success`]: success,
                        [`${clsPrefix}-face-error`]: error || danger,
                        [`${clsPrefix}-face-warning`]: warning,
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

export default Button;
