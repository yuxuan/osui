import React from 'react';
import {Drawer as AntdDrawer} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/es/drawer';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

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

const OSUIDrawer = React.forwardRef<any, DrawerProps>((
    {closeIcon, size, className, closable = true, ...props},
    ref
) => {
    const innerCloseIcon = closeIcon || <IconCloseOutlined />;
    const innerWidth = props.width ?? (size && sizeWidthMap[size]);
    const innerClassNames = classNames(
        clsPrefix,
        {[`${clsPrefix}-extra-with-close`]: closable && props.extra},
        className
    );
    return (
        <AntdDrawer
            ref={ref}
            {...props}
            closable={closable}
            closeIcon={innerCloseIcon}
            width={innerWidth}
            className={innerClassNames}
        />
    );
});

export default OSUIDrawer;
