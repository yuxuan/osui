import React from 'react';
import {Drawer as AntdDrawer} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/es/drawer';
import {IconCross} from '@osui/icons';

const Drawer: React.FC<AntdDrawerProps> = ({closeIcon, ...props}) => {
    const innerCloseIcon = closeIcon || <IconCross />;

    return <AntdDrawer {...props} closeIcon={innerCloseIcon} />;
};

export default Drawer;
