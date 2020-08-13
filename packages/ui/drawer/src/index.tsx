import * as React from 'react';
import {Drawer as AntdDrawer} from 'antd';
import {DrawerProps as AntdDrawerProps} from 'antd/lib/Drawer';
import classNames from 'classnames';

const clsPrefix = 'osui-Drawer';

export type DrawerProps = AntdDrawerProps;

const Drawer: React.FC<DrawerProps> = props => {
    return <AntdDrawer className={classNames(clsPrefix, props.className)} {...props} />;
};

export default Drawer;
