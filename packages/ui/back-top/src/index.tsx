import React, {useContext} from 'react';
import {BackTop as AntdBackTop, ConfigProvider, theme} from 'antd';
import {BackTopProps as AntdBackTopProps} from 'antd/es/back-top';
import classNames from 'classnames';
import {IconVerticalAlignTopOutlined} from '@osui/icons';
// import './index.less';
import {useStyle} from './style';
const {useToken} = theme;

const clsPrefix = 'osui-back-top';

export interface BackTopProps extends AntdBackTopProps {
    type?: 'circle' | 'default';
    transparent?: boolean;
}

const BackTop: React.FC<BackTopProps> = ({type = 'default', transparent, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('back-top', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const {hashId} = useToken();
    const innerClassName = classNames(
        clsPrefix,
        props.className,
        {
            [`${clsPrefix}-circle`]: type === 'circle',
            [`${clsPrefix}-transparent`]: transparent,
        },
        hashId
    );

    return wrapSSROsui(
        <AntdBackTop {...props}>
            <span className={innerClassName}>
                <IconVerticalAlignTopOutlined />
            </span>
        </AntdBackTop>
    );
};

export default BackTop;
