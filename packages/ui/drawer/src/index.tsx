import React from 'react';
import {Drawer as AntdDrawer} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/lib/drawer';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

export interface DrawerProps extends AntdDrawerProps {
    size?: 'large' | 'middle' | 'small';
}

const clsPrefix = 'osui-drawer';

const sizeWidthMap: {[key in 'large' | 'middle' | 'small']: number} = {
    'large': 600,
    'middle': 400,
    'small': 200,
};

const Drawer: React.FC<DrawerProps> = ({ closeIcon, size, className, ...props }) => {
    const innerCloseIcon = closeIcon || <IconCloseOutlined />;
    const innerWidth = props.width ?? (size && sizeWidthMap[size]);
    const innerClassNames = classNames(clsPrefix, className);
    return <AntdDrawer {...props} closeIcon={innerCloseIcon} width={innerWidth} className={innerClassNames} />;
};

export default Drawer;
