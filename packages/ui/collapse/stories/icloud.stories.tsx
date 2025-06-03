/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import {version, Select} from 'antd';
// import Select from '@osui/select';
import {SettingOutlined} from '@ant-design/icons';
import Collapse from '../src';
console.log('Select: ', Select);
const {Panel} = Collapse;

export default {
    title: '数据展示/Collapse 折叠面板',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar ? {
            prefix: 'tna',
            key: 'tluafed',
        } : false,
        // components: {
        //     Collapse: {
        //         // collapseHeaderBg: 'red',
        //         collapseContentBg: '#F2F2F4',
        //         collapseHeaderBg: 'red',
        //         headerBg: '#F2F2F4',
        //     },
        // },
    };
    const text =
        '百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。';
    return (
        <BrandProvider brand="icloud" theme={theme}>
            <div style={{padding: 30}}>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
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
                <strong color="red">
                    为了满足UE设计，多层级时，需要加level属性，和levelChild属性
                </strong>
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
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/collapse-cn/"
            >
                Antd Collapse API
            </a>
        </>
    );
};

export const TestCase = () => {
    return <>{version}</>;
};

export const TestCase2 = () => {
    const {Panel} = Collapse;
    const {Option} = Select;

    function callback(key) {
        console.log(key);
    }

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const genExtra = () => (
        <SettingOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );

    class Demo extends React.Component {
        state = {
            expandIconPosition: 'left',
        };

        onPositionChange = expandIconPosition => {
            this.setState({expandIconPosition});
        };

        render() {
            const {expandIconPosition} = this.state;
            return (
                <>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={callback}
                        expandIconPosition={expandIconPosition}
                    >
                        <Panel
                            header="This is panel header 1"
                            key="1"
                            extra={genExtra()}
                        >
                            <div>{text}</div>
                        </Panel>
                        <Panel
                            header="This is panel header 2"
                            key="2"
                            extra={genExtra()}
                        >
                            <div>{text}</div>
                        </Panel>
                        <Panel
                            header="This is panel header 3"
                            key="3"
                            extra={genExtra()}
                        >
                            <div>{text}</div>
                        </Panel>
                    </Collapse>
                    <br />
                    <span>Expand Icon Position: </span>
                    <Select
                        value={expandIconPosition}
                        style={{margin: '0 8px'}}
                        onChange={this.onPositionChange}
                    >
                        <Option value="left">left</Option>
                        <Option value="right">right</Option>
                    </Select>
                </>
            );
        }
    }

    return (
        <BrandProvider>
            <Demo />
        </BrandProvider>
    );
};
