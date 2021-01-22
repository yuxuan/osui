import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Collapse from '../src';

const { Panel } = Collapse;

export default {
    title: '验收中/Collapse 折叠面板',
};

export const Demo = () => {
    const text = '百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。';
    return (
        <BrandProvider brand="icloud">
            <div style={{ padding: 30 }}>
                <p>基础折叠面板</p>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="可以折叠或展开的内容区域" key="1">
                        {text}
                    </Panel>
                    <Panel header="可以折叠或展开的内容区域" key="2">
                        {text}
                    </Panel>
                    <Panel header="可以折叠或展开的内容区域" key="3" disabled>
                        {text}
                    </Panel>
                </Collapse>
                <p></p>
                <p>多层级折叠面板</p>
                <strong color="red">为了满足UE设计，多层级时，需要加level属性，和levelChild属性</strong>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="内容标题 1" key="1" level={1}>
                        <Collapse defaultActiveKey="1" levelChild>
                            <Panel header="内容标题 1-1" key="1-1" level={2}>
                                <Collapse levelChild>
                                    <Panel header="内容标题 1-1-1" key="1-1">
                                        {text}
                                    </Panel>
                                </Collapse>
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
            </div>
        </BrandProvider>);
};
