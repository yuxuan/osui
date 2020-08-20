import React from 'react';
import Collapse from '../src';

const { Panel } = Collapse;

export default {
    title: 'OSUI-Collapse',
};

export const Demo = () => {
    const text = '开源中国是目前国内最大的开源技术社区，拥有超过400万会员，形成了由开源软件库、代码分享、资讯、协作翻译、讨论区和博客等几大频道内容，为IT开发者提供了一个发现、使用、并交流开源技术的平台。';
    return (
        <div style={{ padding: 30 }}>
            <p>基础折叠面板</p>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="内容标题 1" key="1">
                    {text}
                </Panel>
                <Panel header="内容标题 2" key="2">
                    {text}
                </Panel>
                <Panel header="内容标题 3" key="3" disabled>
                    {text}
                </Panel>
            </Collapse>
            <p></p>
            <p>多层级折叠面板</p>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="内容标题 1" key="1">
                    <Collapse defaultActiveKey="1">
                        <Panel header="内容标题 1-1" key="1">
                            {text}
                        </Panel>
                        <Panel header="内容标题 1-2" key="2">
                            {text}
                        </Panel>
                        <Panel header="内容标题 1-3" key="3" disabled>
                            {text}
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="内容标题 2" key="2">
                    {text}
                </Panel>
                <Panel header="内容标题 3" key="3">
                    {text}
                </Panel>
            </Collapse>
        </div>);
};
