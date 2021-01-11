import React from 'react';
import {BackTop as AntdBackTop} from 'antd';
import {BackTopProps as AntdBackTopProps} from 'antd/es/back-top';
import classNames from 'classnames';
import {IconVerticalAlignTopOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-back-top';

export interface BackTopProps extends AntdBackTopProps {
    type?: 'circle' | 'default';
}

const BackTop: React.FC<BackTopProps> = ({type = 'default', ...props}) => {
    return (
        <AntdBackTop
            {...props}
            className={
                classNames(clsPrefix, props.className, {[`${clsPrefix}-circle`]: type === 'circle'})
            }
        >
            <IconVerticalAlignTopOutlined />
        </AntdBackTop>
    );
};

export default BackTop;
