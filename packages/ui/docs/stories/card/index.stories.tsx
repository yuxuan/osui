/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from '@osui/table';
import FlexCentered from '@osui/flex-centered';
import {IconRightOutlined} from '@osui/icons';
import Markdown from '@osui/markdown';
import Row from '@osui/row';
import Col from '@osui/col';
import Card from '@osui/card';

export default {
    title: '数据展示/Card 卡片',
    component: Card,
};

export const Demo = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '20px',
    };
    const grayboxStyle = {
        background: 'var(--color-gray-3)',
        height: 72,
    };

    const Grid = ({children}) => (<div style={gridStyle}>{children}</div>);
    const GrayBox = () => (<div style={grayboxStyle} />);
    return (
        <>
            <h2>自适应卡片</h2>
            <Grid>
                <Card title="今日流量命中" compact><GrayBox /></Card>
                <Card title="本月总流量" compact><GrayBox /></Card>
                <Card title="域名信息" compact><GrayBox /></Card>
                <Card title="流量包信息" compact><GrayBox /></Card>
            </Grid>
            <p></p>
            <p></p>
            <p></p>
            <Card title="今日数据" compact>
                <Grid>
                    <GrayBox />
                    <GrayBox />
                    <GrayBox />
                    <GrayBox />
                </Grid>
            </Card>
        </>

    );
};


export const Demo1 = () => {
    const data = [
        {
            rank: 1,
            domain: 'www.meiyai.com',
            traffic: '289.87M',
        },
        {
            rank: 2,
            domain: 'test.092202.bcecdn.qa.sanbox',
            traffic: '128.87M',
        },
        {
            rank: 3,
            domain: 'www.test.com',
            traffic: '89.87M',
        },
    ];
    const columns = [
        {
            title: '排名',
            dataIndex: 'rank',
            key: 'rank',
        },
        {
            title: '域名地址',
            dataIndex: 'domain',
            key: 'domain',
        },
        {
            title: '流量',
            dataIndex: 'traffic',
            key: 'traffic',
        },
        {
            title: '流量占比',
        },

    ];

    const listData = [
        {content: 'CDN 体验优化重要更新', time: '06-30'},
        {content: 'CDN 自助控制台全新升级', time: '05-30'},
        {content: 'HTTPS 安全加速正式商业化发布', time: '04-30'},
        {content: 'CDN 体验优化重要更新', time: '03-30'},
        {content: '自定义403/404/503等错误页面', time: '02-30'},
        {content: '支持客户自定义日志格式', time: '01-30'},
    ];

    const Li = ({content, time}: {content: string, time: string}) => {
        return (
            <li style={{marginBottom: 12}}>
                <FlexCentered style={{justifyContent: 'space-between'}}>
                    <div>
                        {content}
                    </div>
                    <div>
                        {time}
                    </div>
                </FlexCentered>
            </li>
        );
    };
    return (
        <>
            <p>下面demo是compact模式</p>
            <Row gutter={20}>
                <Col span={12}>
                    <Card
                        compact
                        title="TOP3 域名"
                        extra={
                            <FlexCentered>
                                更多 <IconRightOutlined style={{color: 'var(--theme-icon-color)'}} />
                            </FlexCentered>
                        }
                    >
                        <Table dataSource={data} columns={columns} pagination={false} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        compact
                        title="TOP3 域名"
                        extra={
                            <FlexCentered>
                                更多 <IconRightOutlined style={{color: 'var(--theme-icon-color)'}} />
                            </FlexCentered>
                        }
                    >
                        <ul style={{paddingLeft: 14}}>
                            {listData.map(({content, time}) => <Li key={content} content={content} time={time} />)}
                        </ul>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export const Demo3 = () => {
    return (
        <>
            <h2>其它样式</h2>
            <Card title="卡片标题" extra={<a>更多</a>}>
                <p>内容一</p>
                <p>内容二</p>
                <p>内容三</p>
            </Card>
        </>
    );
};

export const Api = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| compact | 展示紧凑模式 | boolean | undefined |
    `;
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/card-cn/">Antd Card API</a>
            <p></p>
            <p></p>
            <h2>新增参数</h2>
            <Markdown content={content} />
        </>
    );

};

