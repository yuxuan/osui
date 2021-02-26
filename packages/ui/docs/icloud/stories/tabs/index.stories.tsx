import React from 'react';
import { ForkOutlined } from '@ant-design/icons';
import Tabs from '@osui/tabs';

export default {
    title: '数据展示/Tabs 标签页',
};

export const Demo = () => {
    const { TabPane } = Tabs;
    return (
        <>
            <Tabs defaultActiveKey="1" style={{ marginBottom: 50 }}>
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

            <Tabs defaultActiveKey="1" style={{ marginBottom: 50 }}>
                <TabPane
                    tab={
                        <span>
                            <ForkOutlined />
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
                            <ForkOutlined />
                            Tab 2
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
            <Tabs defaultActiveKey="1" style={{ marginBottom: 50 }}>
                <TabPane
                    tab={
                        <span>
                            <ForkOutlined />
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
                            <ForkOutlined />
                            Tab 2
                            <em className="num">15</em>
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        </>
    );
};


export const PanelDemo = () => {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
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
    );
};


export const PanelClosableDemo = () => {
    const { TabPane } = Tabs;

    const initialPanes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        { title: 'Tab 3', content: 'Content of Tab 3', key: '3' },
    ];

    class Demo extends React.Component {
        newTabIndex = 0;

        state = {
            activeKey: initialPanes[0].key,
            panes: initialPanes,
        };

        onChange = activeKey => {
            this.setState({ activeKey });
        };

        onEdit = (targetKey, action) => {
            this[action](targetKey);
        };

        add = () => {
            const { panes } = this.state;
            const activeKey = `newTab${this.newTabIndex++}`;
            const newPanes = [...panes];
            newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
            this.setState({
                panes: newPanes,
                activeKey,
            });
        };

        remove = targetKey => {
            const { panes, activeKey } = this.state;
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
            const { panes, activeKey } = this.state;
            return (
                <Tabs
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={activeKey}
                    onEdit={this.onEdit}
                >
                    {panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
            );
        }
    }

    return (<Demo />);
};
