import React, {useContext} from 'react';
import {Tabs as AntdTabs, ConfigProvider} from 'antd';
import {TabsProps as AntdTabsProps, TabPaneProps as AntdTabPaneProps} from 'antd/es/tabs';
import {IconPlusOutlined} from '@osui/icons';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-tabs';

export type TabsProps = AntdTabsProps;
export type TabPaneProps = AntdTabPaneProps;

export interface TabInterface extends React.FC<TabsProps> {
    TabPane: typeof AntdTabs.TabPane;
}

const Tabs: TabInterface = props => {
    const innerAddIcon = props.addIcon ?? <IconPlusOutlined />;
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('tabs', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

    return wrapSSROsui(
        <AntdTabs
            {...props}
            className={classNames(clsPrefix, props.className)}
            addIcon={innerAddIcon}
        />
    );
};

Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
