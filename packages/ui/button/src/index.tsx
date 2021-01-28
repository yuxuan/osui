import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/es/button';
import classNames from 'classnames';
import {IconLoading3QuartersOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-button';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType | 'strong' | 'icon';
    /**
     * @description 表示success状态的button
     */
    success?: boolean;
    /**
     * @description 表示error状态的button
     */
    error?: boolean;
    /**
     * @description 表示warning状态的button
     */
    warning?: boolean;
    /**
     * @description 当button带icon时，vertical-align尝尝会有问题，flexCenter: true 添加display: flex; align-items: center;
     */
    flexCenter?: boolean;
}

// eslint-disable-next-line max-len
export interface ButtonInterface extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
    Group: typeof AntdButton.Group;
    __ANT_BUTTON: boolean;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
    {type = 'default', loading, icon, disabled, flexCenter, ...props}, ref
) => {
    let innerIcon = icon;
    let shouldMinWidth = true;

    // 当loading且有icon的button时，icon替换成spinner，不论什么情况都要保持后面的chidlren
    if (loading && icon) {
        innerIcon = <IconLoading3QuartersOutlined className={`${clsPrefix}-icon-spinner ${clsPrefix}-keep-children`} />;
    }
    // 当loading但没有icon时，children替换成spinner，根据主题保留或者隐藏children。
    // osc的文字按钮loading时，文字替换成loading icon；而icloud主题则是保留icon和文字
    if (loading && !icon) {
        innerIcon = <IconLoading3QuartersOutlined className={`${clsPrefix}-icon-spinner`} />;
    }
    // 当类型为icon或者button仅有icon属性时，不保留最小宽度
    if (type === 'icon' || icon) {
        shouldMinWidth = false;
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
                        [`${clsPrefix}-flex-center`]: flexCenter,
                        [`${clsPrefix}-min-width`]: shouldMinWidth,
                    }
                )
            }
            icon={innerIcon}
            disabled={!!loading || disabled}
        />
    );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as ButtonInterface;

Button.Group = AntdButton.Group;
// eslint-disable-next-line no-underscore-dangle
Button.__ANT_BUTTON = true; // 用于tooltip disable时确保hover生效： https://github.com/ant-design/ant-design/pull/4865/files#diff-186839a30bf8b9d67a4b10bf7c091d5fR88

export default Button;
