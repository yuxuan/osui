import React from 'react';
import {Drawer as AntdDrawer} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/es/drawer';
import {IconCloseOutlined} from '@osui/icons';

export interface DrawerProps extends AntdDrawerProps {
    size?: 'large' | 'middle' | 'small';
}

const sizeWidthMap: {[key in 'large' | 'middle' | 'small']: number} = {
    'large': 600,
    'middle': 400,
    'small': 200,
};

const Drawer: React.FC<DrawerProps> = ({ closeIcon, size, ...props }) => {
    const innerCloseIcon = closeIcon || <IconCloseOutlined />;
    const innerWidth = props.width ?? (size && sizeWidthMap[size]);
    return <AntdDrawer {...props} closeIcon={innerCloseIcon} width={innerWidth} />;
};

export default Drawer;
