/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Tag from '@osui/tag';
import Radio from '@osui/radio';
import {FilledError, FilledInfo, FilledSuccess, FilledWarn, MultiToneAcgLogo, OutlinedDown} from 'acud-icon';
import styled from '@emotion/styled';
import Timeline from '../src';

export default {
    title: '数据展示/时间轴 Timeline',
};

export const Demo = () => {
    const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('left');

    const onChange = e => {
        setMode(e.target.value);
    };

    const Title = styled.div`
        font-size: 14px;
        color: var(--text-color-primary);
    `;
    const Time = styled.div`
        font-size: 12px;
        color: var(--text-color-secondary);
        margin-top: 4px;
    `;
    const Link = styled.a`
        font-size: 13px;
        color: var(--text-brand-color);
        margin-top: 4px;
    `;
    const Icon = styled.div`
        font-size: 15px;
        ${props => {
            return `
                color: ${props.color};
            `;
        }}
    `;
    const Number = styled.div`
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--brand-color);
        text-algin: center;
        line-height: 16px;
        color: #fff;
        font-size: 12px;
    `;
    const Box = styled.div`
        width: 240px;
        background: var(--component-color-grayB1);
        border: 1px solid var(--border-color-level1);
        font-size: var(--font-size-2xs);
        padding: 10px 12px;
        border-radius: var(--radius-xs);
        margin-top: 8px;
    `;

    const OpenDetail = () => {
        const [open, setOpen] = useState(false);
        const onClick = e => {
            e.preventDefault();
            setOpen(!open);
        };
        return (
            <div style={{marginTop: 8}}>
                <Link onClick={onClick}>
                    展开
                    <OutlinedDown style={{marginLeft: 4, transform: open ? 'rotateZ(180deg)' : ''}} />
                </Link>
                {open && (
                    <Box>
                        我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
                    </Box>
                )}
            </div>
        );
    };

    return (
        <BrandProvider>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>基础使用</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <h3>特殊弱化使用</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
            <div>
                <Timeline variant="filled" orientation="horizontal">
                    <Timeline.Item style={{paddingBottom: 50}} color="gray">
                        <Title>事件</Title>
                        <Time>2025-02-02</Time>
                    </Timeline.Item>
                    <Timeline.Item style={{paddingBottom: 50}} color="gray">
                        <Title>事件</Title>
                        <Time>2025-02-02</Time>
                    </Timeline.Item>
                    <Timeline.Item style={{paddingBottom: 50}} color="gray">
                        <Title>事件</Title>
                        <Time>2025-02-02</Time>
                    </Timeline.Item>
                </Timeline>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>内容可展开</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <OpenDetail />
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <OpenDetail />
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}}>
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <OpenDetail />
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <h3>可操作时间线</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <div>
                                    <Link>查看</Link>
                                    <Link style={{marginLeft: 16}}>删除</Link>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <div>
                                    <Link>查看</Link>
                                    <Link style={{marginLeft: 16}}>删除</Link>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="gray">
                                <Title>事件</Title>
                                <Time>2025-02-02</Time>
                                <div>
                                    <Link>查看</Link>
                                    <Link style={{marginLeft: 16}}>删除</Link>
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>带状态的时间线</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled" pending="加载中">
                            <Timeline.Item style={{paddingBottom: 50}} color="var(--success-color)">
                                <Title>运行成功</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="var(--icon-color-disabled)">
                                <Title>等待中</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="var(--error-color)">
                                <Title>运行失败</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 50}} color="var(--warning-color)">
                                <Title>运行警告</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <h3>带图标的时间轴</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Icon>
                                        <FilledInfo color="var(--brand-color)" />
                                    </Icon>
                                )}
                            >
                                <Title>默认事件</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Icon>
                                        <FilledSuccess color="var(--success-color)" />
                                    </Icon>
                                )}
                            >
                                <Title>运行成功</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Icon>
                                        <FilledError color="var(--error-color)" />
                                    </Icon>
                                )}
                            >
                                <Title>运行失败</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Icon>
                                        <FilledWarn color="var(--warning-color)" />
                                    </Icon>
                                )}
                            >
                                <Title>运行警告</Title>
                                <Time>2025-02-02</Time>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>可计数的时间轴</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Number>1</Number>
                                )}
                            >
                                <Title>修改</Title>
                                <Time>
                                    <span>操作人：张会计</span>
                                    <span style={{marginLeft: 16}}>操作时间：2025-02-02</span>
                                </Time>
                            </Timeline.Item>
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Number>2</Number>
                                )}
                            >
                                <Title>修改</Title>
                                <Time>
                                    <span>操作人：张会计</span>
                                    <span style={{marginLeft: 16}}>操作时间：2025-02-02</span>
                                </Time>
                            </Timeline.Item>
                            <Timeline.Item
                                style={{paddingBottom: 50}}
                                dot={(
                                    <Number>3</Number>
                                )}
                            >
                                <Title>修改</Title>
                                <Time>
                                    <span>操作人：张会计</span>
                                    <span style={{marginLeft: 16}}>操作时间：2025-02-02</span>
                                </Time>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <h3>带复杂状态的时间线</h3>
                    <div style={{padding: '50px'}}>
                        <Timeline variant="filled">
                            <Timeline.Item style={{paddingBottom: 20}}>
                                <Tag color="processing">上报</Tag>
                                <Time style={{marginTop: 8}}>
                                    上报时间：2025-02-02<br />
                                    案件类型：财务纠纷
                                </Time>
                                <OpenDetail />
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 20}}>
                                <Tag color="success">成功受理</Tag>
                                <Time style={{marginTop: 8}}>
                                    上报时间：2025-02-02<br />
                                    案件类型：财务纠纷
                                </Time>
                                <OpenDetail />
                            </Timeline.Item>
                            <Timeline.Item style={{paddingBottom: 20}}>
                                <Tag color="warning">提醒处理</Tag>
                                <Time style={{marginTop: 8}}>
                                    上报时间：2025-02-02<br />
                                    案件类型：财务纠纷
                                </Time>
                                <OpenDetail />
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
            <div>
                <h3>自定义内容的时间线</h3>
                <div style={{padding: '50px'}}>
                    <Timeline variant="filled">
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件一</Title>
                            <Time>2025-02-02</Time>
                            <div>
                                <MultiToneAcgLogo style={{fontSize: 24}} />
                            </div>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件二</Title>
                            <Time>2025-02-02</Time>
                            <div>
                                <MultiToneAcgLogo style={{fontSize: 24}} />
                            </div>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件三</Title>
                            <Time>2025-02-02</Time>
                            <div>
                                <MultiToneAcgLogo style={{fontSize: 24}} />
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div>
                <h3>不同对齐方式</h3>
                <Radio.Group
                    onChange={onChange}
                    value={mode}
                    style={{
                    marginBottom: 20,
                    }}
                >
                    <Radio value="left">Left</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="alternate">Alternate</Radio>
                </Radio.Group>
                <div style={{padding: '50px'}}>
                    <Timeline mode={mode} variant="filled">
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件一</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件二</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件三</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div style={{padding: '0 50px'}}>
                    <Timeline mode={mode} variant="filled" orientation="horizontal">
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件一</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件二</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                        <Timeline.Item style={{paddingBottom: 50}}>
                            <Title>事件三</Title>
                            <Time>2025-02-02</Time>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div>
                <h3>不同标签对齐方式</h3>
                <Radio.Group
                    onChange={onChange}
                    value={mode}
                    style={{
                    marginBottom: 20,
                    }}
                >
                    <Radio value="left">Left</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="alternate">Alternate</Radio>
                </Radio.Group>
                <div style={{padding: '50px'}}>
                    <Timeline mode={mode} variant="filled">
                        <Timeline.Item
                            style={{paddingBottom: 50}}
                            label={(
                                <div style={{fontSize: 12, color: 'var(--text-color-secondary)'}}>2015-09-01</div>
                            )}
                        >
                            <div style={{fontSize: 12}}>事件</div>
                        </Timeline.Item>
                        <Timeline.Item
                            style={{paddingBottom: 50}}
                            label={(
                                <div style={{fontSize: 12, color: 'var(--text-color-secondary)'}}>2015-09-01</div>
                            )}
                        >
                            <div style={{fontSize: 12}}>事件</div>
                        </Timeline.Item>
                        <Timeline.Item
                            style={{paddingBottom: 50}}
                            label={(
                                <div style={{fontSize: 12, color: 'var(--text-color-secondary)'}}>2015-09-01</div>
                            )}
                        >
                            <div style={{fontSize: 12}}>事件</div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </BrandProvider>
    );
};

export const Demo2 = () => {
    return (
        <BrandProvider>
            <h3>纯展示的情况</h3>
            <div style={{padding: '50px'}}>
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        </BrandProvider>
    );
};


export const Link = () => {
    return (
        <BrandProvider>
            <h3>可跳转link的情况</h3>
            <div style={{padding: '50px'}}>
                <Timeline>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                </Timeline>
            </div>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/timeline-cn/">Antd Timeline API</a>
        </>
    );
};

