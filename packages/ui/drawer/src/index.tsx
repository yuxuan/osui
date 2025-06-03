import React, {useContext} from 'react';
import {Drawer as AntdDrawer, ConfigProvider} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/es/drawer';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

export interface DrawerProps extends Omit<AntdDrawerProps, 'size'> {
    size?: 'large' | 'middle' | 'small';
    children: React.ReactNode;
}

const clsPrefix = 'osui-drawer';

const sizeWidthMap: {[key in 'large' | 'middle' | 'small']: number} = {
    large: 600,
    middle: 400,
    small: 200,
};

const OSUIDrawer = ({closeIcon, size, className, closable = true, ...props}: DrawerProps) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('drawer', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

    const innerCloseIcon = closeIcon || <IconCloseOutlined />;
    const innerWidth = props.width ?? (size && sizeWidthMap[size]);
    const innerClassNames = classNames(
        // clsPrefix,
        {[`${clsPrefix}-extra-with-close`]: closable && props.extra},
        className
    );
    return wrapSSROsui(
        <AntdDrawer
            {...props}
            closable={closable}
            closeIcon={innerCloseIcon}
            width={innerWidth}
            className={innerClassNames}
            rootClassName={clsPrefix}
        />
    );
};

export default OSUIDrawer;
