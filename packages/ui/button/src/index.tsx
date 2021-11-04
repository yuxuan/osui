import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/lib/button';
import classNames from 'classnames';
import {IconLoading3QuartersOutlined} from '@osui/icons';
import Tooltip from '@osui/tooltip';
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
    /**
     * @description 当disabled时展示disabledReason
     */
    disabledReason?: string;
}

// eslint-disable-next-line max-len
export interface ButtonInterface extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
    Group: typeof AntdButton.Group;
    __ANT_BUTTON: boolean;
}

const PureIconButton: React.FC<ButtonProps> = props => {
    const Icon = props.icon;
    const innerClassName = classNames(`${clsPrefix}-btn-icon`, props.className);
    if (props.loading) {
        return React.cloneElement(
            <IconLoading3QuartersOutlined spin />,
            {
                ...props,
                disabled: true,
                className: classNames(
                    props.className,
                    `${clsPrefix}-btn-icon ${clsPrefix}-icon-spinner ${clsPrefix}-keep-children`
                ),
            }
        );
    }
    return React.cloneElement(Icon as React.ReactElement, {...props, className: innerClassName});
};

/* eslint-disable complexity */
const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
    {
        type = 'default',
        loading,
        icon,
        disabled,
        flexCenter,
        disabledReason,
        ...props
    }, ref
) => {
    let innerIcon = icon;
    const loadingProp = (typeof loading === 'object') ? {loading} : {};
    const isLoading = typeof loading === 'boolean' && loading;

    if (type === 'icon') {
        return (<PureIconButton loading={isLoading} icon={icon} disabled={disabled} {...props} />);
    }

    // 当loading且有icon的button时，icon替换成spinner，不论什么情况都要保持后面的chidlren
    if (isLoading && icon) {
        innerIcon = (
            <IconLoading3QuartersOutlined
                spin
                className={`${clsPrefix}-icon-spinner ${clsPrefix}-keep-children`}
            />
        );
    }
    // 当loading但没有icon时，children替换成spinner，根据主题保留或者隐藏children。
    // osc的文字按钮loading时，文字替换成loading icon；而icloud主题则是保留icon和文字
    if (isLoading && !icon) {
        innerIcon = <IconLoading3QuartersOutlined spin className={`${clsPrefix}-icon-spinner`} />;
    }

    const {success, error, danger, warning} = props;

    const PatchedButton = (
        <AntdButton
            ref={ref as any}
            {...props}
            type={type as AntdButtonProps['type']} // 因为不兼容，做了强制类型转换
            className={
                classNames(
                    clsPrefix,
                    {
                        [`${clsPrefix}-loading`]: isLoading,
                        [`${clsPrefix}-disabled`]: isLoading || disabled,
                        [`${clsPrefix}-face-success`]: success,
                        [`${clsPrefix}-face-error`]: error || danger,
                        [`${clsPrefix}-face-warning`]: warning,
                        [`${clsPrefix}-flex-center`]: flexCenter || isLoading,
                    },
                    props.className
                )
            }
            icon={innerIcon}
            disabled={isLoading || disabled}
            {...loadingProp}
        />
    );

    if (disabledReason && disabled) {
        return (
            <Tooltip placement="top" title={disabledReason}>
                {PatchedButton}
            </Tooltip>
        );
    }

    return PatchedButton;
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as ButtonInterface;

Button.Group = AntdButton.Group;
// eslint-disable-next-line no-underscore-dangle
Button.__ANT_BUTTON = true; // 用于tooltip disable时确保hover生效： https://github.com/ant-design/ant-design/pull/4865/files#diff-186839a30bf8b9d67a4b10bf7c091d5fR88

export default Button;
