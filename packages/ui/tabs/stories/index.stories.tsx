import React from 'react';
import { ForkOutlined } from '@ant-design/icons';
import Tabs from '../src';

export default {
    title: 'OSUI-Tabs',
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
