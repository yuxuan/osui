import React from 'react';
import { Tabs as AntdTabs } from 'antd';
import { TabsProps as AntdTabsProps, TabPaneProps as AntdTabPaneProps } from 'antd/lib/tabs';
import {IconPlusOutlined} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tabs';

export type TabsProps = AntdTabsProps;
export type TabPaneProps = AntdTabPaneProps;

interface TabInterface extends React.FC<TabsProps> {
    TabPane: typeof AntdTabs.TabPane;
}

const Tabs: TabInterface = props => {
    const innerAddIcon = props.addIcon ?? <IconPlusOutlined />;
    return (
        <AntdTabs
            {...props}
            className={classNames(clsPrefix, props.className)}
            addIcon={innerAddIcon}
        />);
};

Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
