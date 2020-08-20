import React from 'react';
import {Tabs as AntdTabs} from 'antd';
import {TabsProps as AntdTabsProps, TabPaneProps as AntdTabPaneProps} from 'antd/es/tabs';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tabs';

export type TabsProps = AntdTabsProps;
export type TabPaneProps = AntdTabPaneProps;
interface TabInterface extends React.FC<TabsProps> {
    TabPane: typeof AntdTabs.TabPane;
}

const Tabs: TabInterface = props => {
    return <AntdTabs className={classNames(clsPrefix, props.className)} {...props} />;
};

Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
