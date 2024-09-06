import React from 'react';
import {Radio as AntdRadio, CheckboxRef} from 'antd';
import {RadioProps as AntdRadioProps, RadioGroupProps as AntdRadioGroupProps} from 'antd/es/radio';
import classNames from 'classnames';
import './index.less';

const AntdRadioGroup = AntdRadio.Group;

const clsPrefix = 'osui-radio';

export type RadioProps = AntdRadioProps;
export type RadioGroupProps = AntdRadioGroupProps & {buttonType?: 'strong' | 'default'};

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(({className, buttonType, ...restProps}, ref) => {
    return (
        <AntdRadioGroup
            ref={ref}
            className={classNames(`${clsPrefix}-group`, {[`${clsPrefix}-group-${buttonType}`]: buttonType}, className)}
            {...restProps}
        />
    );
});

export interface RadioInterface extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
    Group: typeof RadioGroup;
    Button: typeof AntdRadio.Button;
    RichButton: typeof RichRadioButton;
}

const RefRadio: React.ForwardRefRenderFunction<CheckboxRef, AntdRadioProps> = ({className, ...restProps}, ref) => {
    return <AntdRadio ref={ref} className={classNames(clsPrefix, className)} {...restProps} />;
};

const Radio = React.forwardRef(RefRadio) as RadioInterface;

interface RichRadioProps extends React.ComponentProps<typeof Radio.Button>{
    description?: string;
    flag?: React.ReactNode;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

function RichRadioButton(props: RichRadioProps) {
    const {flag, icon, ...restProps} = props;
    return (
        <Radio.Button
            {...restProps}
            className={classNames(`${clsPrefix}-rich-radio-button`, props.className)}
        >
            <div style={{display: 'flex', alignItems: 'center'}}>
                {icon && (
                    <>
                        <div style={{width: '6px'}} />
                        {icon}
                        <div style={{width: '20px'}} />
                    </>
                )}
                <div></div>
                <div>
                    {/* 有description时，children作为title */}
                    <div className={classNames({[`${clsPrefix}-rich-radio-button-title`]: props.description})}>
                        {props.children}
                    </div>
                    {props.description && (
                        <>
                            <div style={{height: 4}} />
                            <div className={classNames(`${clsPrefix}-rich-radio-button-description`, props.className)}>
                                {props.description}
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
            {
                flag && <span className={`${clsPrefix}-rich-radio-button-new-tag`}>{flag}</span>
            }
        </Radio.Button>
    );
}

Radio.Group = RadioGroup;
Radio.Button = AntdRadio.Button;
Radio.RichButton = RichRadioButton;

export type {RadioChangeEvent} from 'antd';
export default Radio;
