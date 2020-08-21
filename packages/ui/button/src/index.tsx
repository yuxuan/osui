import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/es/button';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-button';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType | 'image-text';
}

const OSUIButton: React.FC<ButtonProps> = props => {
    let btnText: string | React.ReactNode = '';
    if (props.type !== 'image-text' && props.loading) {
        btnText = '';
    } else {
        btnText = props.children;
    }
    return (
        // @ts-ignore
        <AntdButton {...props} className={classNames(props.className, clsPrefix)} >
            {btnText}
        </AntdButton>
    );
};

export default OSUIButton;
