/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-extraneous-dependencies */
import React, {useRef, useState} from 'react';
import {IconCloseOutlined, IconHomeOutlined, IconDownOutlined, IconPlusOutlined} from '@osui/icons';
import {OutlinedPlusNew} from 'acud-icon';
import Divider from '@osui/divider';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';
import Dropdown from '@osui/dropdown';
import FlexCentered from '@osui/flex-centered';
import Menu from '@osui/menu';
import Button from '@osui/button';
import BrandProvider from '../../brand-provider';
import Tabs from '../src';

const Blockquote: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <blockquote style={{
        background: 'var(--brand-color-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--brand-color-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export default {
    title: '数据展示/标签页 Tabs',
};

const ClosableTabs: React.FC = () => {
    const initialItems = [
        {label: 'Tab 1', children: 'Content of Tab 1', key: '1'},
        {label: 'Tab 2', children: 'Content of Tab 2', key: '2'},
        {
            label: 'Tab 3',
            children: 'Content of Tab 3',
            key: '3',
        },
    ];

    const [activeKey, setActiveKey] = useState(initialItems[0].key);
    const [items, setItems] = useState(initialItems);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter(item => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (
        targetKey: React.MouseEvent | React.KeyboardEvent | string
    ) => {
            remove(targetKey);
    };

    return (
        <Tabs
            hideAdd
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={items}
        />
    );
};

const AddableTabs: React.FC = () => {
    const initialItems = [
        {label: 'Tab 1', children: 'Content of Tab 1', key: '1'},
        {label: 'Tab 2', children: 'Content of Tab 2', key: '2'},
        {
            label: 'Tab 3',
            children: 'Content of Tab 3',
            key: '3',
        },
    ];

    const [activeKey, setActiveKey] = useState(initialItems[0].key);
    const [items, setItems] = useState(initialItems);
    const newTabIndex = useRef(0);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...items];
        newPanes.push({label: 'New Tab', children: 'Content of new Tab', key: newActiveKey});
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter(item => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (
        targetKey: React.MouseEvent | React.KeyboardEvent | string,
        action: 'add' | 'remove'
    ) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={items}
        />
    );
};

const ExtraActionTabs = () => {
    const operations = <Button type="text"><OutlinedPlusNew />添加导航</Button>;

    const items = Array.from({length: 3}).map((_, i) => {
    const id = String(i + 1);

    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of tab ${id}`,
    };
    });

  return (
      <>
          <Tabs tabBarExtraContent={operations} items={items} />
      </>
  );
};

export const Demo = () => {
    const {TabPane} = Tabs;
    return (
        <>
            <BrandProvider>
                <Divider>默认选项卡</Divider>
                <p>白底</p>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="选中标签" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="可选标签" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="不可选标签" disabled key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                <p />
                <p>灰底</p>
                <Tabs defaultActiveKey="1" grayNavbar>
                    <TabPane tab="选中标签" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="可选标签" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="不可选标签" disabled key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                <Divider>卡片选项</Divider>
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    items={Array.from({length: 3}).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Card Tab ${id}`,
                            key: id,
                            children: `Content of card tab ${id}`,
                        };
                    })}
                />
                <Divider>卡片选项卡可删除</Divider>
                <ClosableTabs />
                <Divider>卡片选项卡可编辑</Divider>
                <AddableTabs />
                <Divider>可添加选项卡</Divider>
                <ExtraActionTabs />
            </BrandProvider>
        </>
    );
};

export const ExtraDemo = () => {
    const [active, setActive] = React.useState('更多');
    const [activeContent, setActiveContent] = React.useState('Tab extra');
    const reset = React.useCallback(
        () => {
            setActive('更多');
            setActiveContent('Tab extra');
        },
        []
    );
    const handleSelect = React.useCallback(
        (item: any) => {
            setActive(item.key);
            setActiveContent(item.key);
        },
        []
    );
    const handleTabChange = React.useCallback(
        (actvieKey: string) => {
            if (actvieKey === '1' || actvieKey === '2') {
                reset();
            }
        },
        [reset]
    );
    const menu = (
        <Menu onClick={handleSelect}>
            <Menu.Item key="选项三">
                选项三
            </Menu.Item>
            <Menu.Item key="选项四">
                选项四
            </Menu.Item>
            <Menu.Item key="选项五">
                选项五
            </Menu.Item>
        </Menu>
    );
    const {TabPane} = Tabs;
    return (
        <BrandProvider>
            <h3>tab显示不下可使用…，hover展示全部名称</h3>
            <p>名称最多显示8个字(width: 130px)，超过显示… </p>
            <Tabs defaultActiveKey="1" style={{marginBottom: 50}}>
                <TabPane
                    tab={(
                        <TextOverflowTooltip title="可选标签可选标签可选标签可选标签" width={130}>
                            可选标签可选标签可选标签可选标签
                        </TextOverflowTooltip>
                        )}
                    key="1"
                >
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="可选标签" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="不可选标签" disabled key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
            <h3>带icon的tab样式</h3>
            <Tabs defaultActiveKey="1" style={{marginBottom: 50}}>
                <TabPane
                    tab={
                        <span>
                            <IconHomeOutlined style={{marginRight: 8}} />
                            Tab 1
                        </span>
                        }
                    key="1"
                >
                    Tab 1
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <IconHomeOutlined style={{marginRight: 8}} />
                            Tab 2
                        </span>
                        }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>

            <h3>带计数的tab样式</h3>

            <Tabs defaultActiveKey="1" style={{marginBottom: 50}}>
                <TabPane
                    tab={
                        <span>
                            Tab 1
                            <em className="num">15</em>
                        </span>
                        }
                    key="1"
                >
                    Tab 1
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            Tab 2
                            <em className="num">15</em>
                        </span>
                        }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
            <h3>tab收起，每两个tab间距是固定的，可根据具体情况将部分tab收起，或支持添加/自定义tab</h3>
            <Tabs defaultActiveKey="1" style={{marginBottom: 50}} onChange={handleTabChange}>
                <TabPane
                    tab="选项一"
                    key="1"
                >
                    选项一
                </TabPane>
                <TabPane
                    tab="选项二"
                    key="2"
                >
                    选项二
                </TabPane>
                <TabPane
                    tab={
                        <Dropdown overlay={menu}>
                            <FlexCentered>
                                {active}
                                <IconDownOutlined style={{paddingLeft: '5px'}} />
                            </FlexCentered>
                        </Dropdown>
                    }
                    key="3"
                >
                    {activeContent}
                </TabPane>
            </Tabs>
        </BrandProvider>
    );
};

export const AddDemo = () => {
    const {TabPane} = Tabs;

    const initialPanes = [
        {title: 'Tab 1', content: 'Content of Tab 1', key: '1'},
        {title: 'Tab 2', content: 'Content of Tab 2', key: '2'},
        {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',
            closable: false,
        },
    ];

    const Demo = () => {
        const [activeKey, setActiveKey] = useState(initialPanes[0].key);
        const [panes, setPanes] = useState(initialPanes);
        const newTabIndexRef = useRef(0);

        const onChange = (activeKey: string) => {
            setActiveKey(activeKey);
        };

        const add = () => {
            const activeKey = `newTab${newTabIndexRef.current++}`;
            const newPanes = [...panes];
            newPanes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey});
            setPanes(newPanes);
            setActiveKey(activeKey);
        };

        return (
            <Tabs
                onChange={onChange}
                activeKey={activeKey}
            >
                {panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key}>
                        {pane.content}
                    </TabPane>
                ))}
                <TabPane
                    tab={<Button icon={<IconPlusOutlined />} onClick={add} />}
                >
                    <></>
                </TabPane>
            </Tabs>
        );
    };
    return (
        <BrandProvider>
            <Blockquote>这个添加是TabPane改的，antd原带的add action和这个不同</Blockquote>
            <h3>tab收起，每两个tab间距是固定的，可根据具体情况将部分tab收起，或支持添加/自定义tab</h3>
            <Demo />
        </BrandProvider>
    );
};

export const PanelDemo = () => {
    const {TabPane} = Tabs;

    function callback(key: any) {
        console.log(key);
    }

    return (
        <BrandProvider>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </BrandProvider>
    );
};


export const PanelClosableDemo = () => {
    const {TabPane} = Tabs;

    const initialPanes = [
        {title: 'Tab 1', content: 'Content of Tab 1', key: '1'},
        {title: 'Tab 2', content: 'Content of Tab 2', key: '2'},
        {title: 'Tab 3', content: 'Content of Tab 3', key: '3'},
    ];

    class Demo extends React.Component {
        newTabIndex = 0;

        state = {
            activeKey: initialPanes[0].key,
            panes: initialPanes,
        };

        onChange = (activeKey: string) => {
            this.setState({activeKey});
        };

        onEdit = (targetKey: string, action: 'add' | 'remove') => {
            (this as any)[action](targetKey);
        };

        add = () => {
            const {panes} = this.state;
            const activeKey = `newTab${this.newTabIndex++}`;
            const newPanes = [...panes];
            newPanes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey});
            this.setState({
                panes: newPanes,
                activeKey,
            });
        };

        remove = (targetKey: any) => {
            const {panes, activeKey} = this.state;
            let newActiveKey = activeKey;
            let lastIndex = 0;
            panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            const newPanes = panes.filter(pane => pane.key !== targetKey);
            if (newPanes.length && newActiveKey === targetKey) {
                if (lastIndex >= 0) {
                    newActiveKey = newPanes[lastIndex].key;
                } else {
                    newActiveKey = newPanes[0].key;
                }
            }
            this.setState({
                panes: newPanes,
                activeKey: newActiveKey,
            });
        };

        render() {
            const {panes, activeKey} = this.state;
            return (
                <Tabs
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={activeKey}
                    onEdit={this.onEdit}
                >
                    {panes.map(pane => (
                        <TabPane
                            tab={pane.title}
                            key={pane.key}
                            closable
                            closeIcon={<IconCloseOutlined />}
                        >
                            {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
            );
        }
    }

    return (
        <BrandProvider>
            <p><strong>FE说明：</strong>closeIcon无法从组件内部调整，需要外面传入。如果UE走查有问题，按照示例代码书写即可</p>
            <Divider>展示</Divider>
            <Demo />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tabs-cn/">Antd Tabs API</a>
        </>
    );
};

