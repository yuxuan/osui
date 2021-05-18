import React from 'react';
import {BackTop as AntdBackTop} from 'antd';
import {BackTopProps as AntdBackTopProps} from 'antd/lib/back-top';
import classNames from 'classnames';
import {IconVerticalAlignTopOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-back-top';

export interface BackTopProps extends AntdBackTopProps {
    type?: 'circle' | 'default';
    transparent?: boolean;
}

const BackTop: React.FC<BackTopProps> = ({type = 'default', transparent, ...props}) => {
    const innerClassName = classNames(
        clsPrefix,
        props.className,
        {
            [`${clsPrefix}-circle`]: type === 'circle',
            [`${clsPrefix}-transparent`]: transparent,
        }
    );

    return (
        <AntdBackTop {...props}>
            <span className={innerClassName}>
                <IconVerticalAlignTopOutlined />
            </span>
        </AntdBackTop>
    );
};

export default BackTop;
