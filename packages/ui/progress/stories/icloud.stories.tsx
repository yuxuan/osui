/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import {FilledWarn} from 'acud-icon';
import Spin from '@osui/spin';
import {LoadingOutlined} from '@ant-design/icons';
import Tooltip from '@osui/tooltip';
import Progress from '../src';

export default {
    title: '反馈/进度条 Progress',
};

export const Demo = () => {
    const [num, setNum] = useState(50);
    const ShowInfo = ({percent}) => (
        <div style={{fontSize: 12, fontWeight: 500, marginTop: 4}}>
            {percent}/100
            <span style={{color: 'var(--text-color-tertiary)', marginLeft: 4}}>tokens</span>
        </div>
    );
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center', gap: '100px'}}>
            <span style={{width: '130px'}}>{title}</span>
            {children}
        </div>
    );

    return (
        <BrandProvider brand="icloud">
            <h2>进度条渐变示意</h2>
            <div style={{width: 300}}>
                <Progress percent={0} strokeLinecap="round" />
            </div>
            <br />
            <div style={{width: 300}}>
                <Progress percent={50} strokeLinecap="round" />
            </div>
            <br />
            <div style={{width: 300}}>
                <Progress
                    percent={100}
                    strokeLinecap="round"
                    status="normal"
                    format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                />
            </div>
            <br />
            <h2>组件尺寸</h2>
            <p>S:</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '100px'}}>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={50} />
                </div>
            </div>
            <p>M:</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '100px'}}>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={50} />
                </div>
            </div>
            <p></p>
            <h2>基础线性进度条</h2>
            <h3>左右结构: M、S</h3>
            <Wrapper title="未开始">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={0} size="default" strokeLinecap="round" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={0} size="small" strokeLinecap="round" />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="运行中/排队中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="完成">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={100}
                        strokeLinecap="round"
                        status="normal"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                    />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={100}
                        strokeLinecap="round"
                        size="small"
                        status="normal"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                    />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="暂停中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="default"
                        strokeLinecap="round"
                        strokeColor="var(--icon-color-disabled)"
                    />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="small"
                        strokeLinecap="round"
                        strokeColor="var(--icon-color-disabled)"
                    />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="极限值时报警显示">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={10}
                        size="default"
                        strokeLinecap="round"
                        status="exception"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                    />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={10}
                        size="small"
                        strokeLinecap="round"
                        status="exception"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                    />
                </div>
            </Wrapper>
            <br />
            <h3>上下结构: M、S</h3>
            <Wrapper title="未开始">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={0} size="default" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={0} />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={0} size="small" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={0} />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="运行中/排队中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={50} />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" showInfo={false} />
                    <ShowInfo percent={50} />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="完成">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={100}
                        strokeLinecap="round"
                        status="normal"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                        showInfo={false}
                    />
                    <ShowInfo percent={100} />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={100}
                        strokeLinecap="round"
                        status="normal"
                        size="small"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                        showInfo={false}
                    />
                    <ShowInfo percent={100} />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="暂停中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="default"
                        strokeLinecap="round"
                        strokeColor="var(--icon-color-disabled)"
                        showInfo={false}
                    />
                    <ShowInfo percent={50} />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="small"
                        strokeLinecap="round"
                        strokeColor="var(--icon-color-disabled)"
                        showInfo={false}
                    />
                    <ShowInfo percent={50} />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="极限值时报警显示">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={10}
                        size="default"
                        strokeLinecap="round"
                        status="exception"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                        showInfo={false}
                    />
                    <ShowInfo percent={10} />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={10}
                        size="small"
                        strokeLinecap="round"
                        status="exception"
                        format={percent => (<span style={{color: '#000'}}>{percent}%</span>)}
                        showInfo={false}
                    />
                    <ShowInfo percent={10} />
                </div>
            </Wrapper>
            <br />
            <h2>带状态 线性进度条</h2>
            <h3>M、S</h3>
            <Wrapper title="进度状态发生重大错误">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" status="exception" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" status="exception" />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="完成">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={100} size="default" strokeLinecap="round" status="success" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={100} size="small" strokeLinecap="round" status="success" />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="进行中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="default" strokeLinecap="round" />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress percent={50} size="small" strokeLinecap="round" />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="等待中">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={0}
                        size="default"
                        strokeLinecap="round"
                        format={() => (<Spin indicator={(<LoadingOutlined style={{fontSize: 16}} />)} />)}
                    />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={0}
                        size="small"
                        strokeLinecap="round"
                        format={() => (<Spin indicator={(<LoadingOutlined style={{fontSize: 16}} />)} />)}
                    />
                </div>
            </Wrapper>
            <br />
            <Wrapper title="进度被中断">
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="default"
                        strokeLinecap="round"
                        format={() => (
                            <FilledWarn color="var(--warning-color)" style={{fontSize: 16}} />
                        )}
                        strokeColor={['#FF9B3D', '#FF7E0D', '#F06800']}
                    />
                </div>
                <div style={{width: 300, display: 'inline-block'}}>
                    <Progress
                        percent={50}
                        size="small"
                        strokeLinecap="round"
                        format={() => (
                            <FilledWarn color="var(--warning-color)" style={{fontSize: 16}} />
                        )}
                        strokeColor={['#FF9B3D', '#FF7E0D', '#F06800']}
                    />
                </div>
            </Wrapper>
            <br />
            <h2>带操作 线性进度条</h2>
            <h3>M、S</h3>
            <Wrapper title="进度状态发生重大错误">
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Tooltip title="hover显示失败原因">
                            <Progress percent={num} size="default" strokeLinecap="round" status="exception" />
                        </Tooltip>
                    </div>
                    <a
                        style={{marginLeft: 8}}
                        onClick={() => setNum(0)}
                    >
                        重置
                    </a>
                </div>
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Tooltip title="hover显示失败原因">
                            <Progress percent={num} size="small" strokeLinecap="round" status="exception" />
                        </Tooltip>
                    </div>
                    <a
                        style={{marginLeft: 8}}
                        onClick={() => setNum(0)}
                    >
                        重置
                    </a>
                </div>
            </Wrapper>
            <br />
            <Wrapper title="有进展可重置">
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Progress percent={num} size="default" strokeLinecap="round" />
                    </div>
                    <a
                        style={{marginLeft: 8}}
                        onClick={() => setNum(0)}
                    >
                        重置
                    </a>
                </div>
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Progress percent={num} size="small" strokeLinecap="round" />
                    </div>
                    <a
                        style={{marginLeft: 8}}
                        onClick={() => setNum(0)}
                    >
                        重置
                    </a>
                </div>
            </Wrapper>
            <br />
            <Wrapper title="无进展可停止">
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Progress percent={0} size="default" strokeLinecap="round" />
                    </div>
                    <a style={{marginLeft: 8}}>停止</a>
                </div>
                <div style={{width: 300, display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: 1}}>
                        <Progress percent={0} size="small" strokeLinecap="round" />
                    </div>
                    <a style={{marginLeft: 8}}>停止</a>
                </div>
            </Wrapper>
            <br />
            <h2>环形进度条</h2>
            <div>
                <Progress
                    type="circle"
                    strokeWidth={12}
                    status="success"
                    percent={50}
                />
                <Progress
                    type="circle"
                    strokeWidth={12}
                    percent={50}
                    style={{marginLeft: 50}}
                />
                <Progress
                    type="circle"
                    strokeWidth={12}
                    status="exception"
                    percent={50}
                    style={{marginLeft: 50}}
                />
            </div>
        </BrandProvider>
    );
};

export const Demo2 = () => {
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <p>说明：progress icon目前不支持替换</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>注意：已完成的状态需要加<code>status="normal"</code></p>
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress percent={0} showInfo={false} /></Wrapper>
                <Wrapper title="进行中状态"><Progress percent={40} showInfo={false} status="normal" /></Wrapper>
                <Wrapper title="已完成"><Progress percent={100} showInfo={false} status="normal" /></Wrapper>
                <Wrapper title="完成常驻"><Progress percent={100} showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="exception" showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="exception" showInfo={false} /></Wrapper>
            </div>
        </BrandProvider>
    );
};

export const Status = () => {
    return (
        <BrandProvider brand="icloud">

            <div style={{padding: 30}}>
                <Progress percent={0} />
                <Progress percent={40} />
                <Progress percent={90} />
            </div>
        </BrandProvider>
    );
};

export const StatusIcon = () => {
    return (
        <BrandProvider brand="icloud">

            <div style={{padding: 30}}>
                <Progress percent={40} status="exception" />
                <Progress percent={100} />
            </div>
        </BrandProvider>
    );
};

export const Circle = () => {
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="已完成"><Progress type="circle" percent={100} showInfo={false} status="normal" /></Wrapper>
                <br />
                <Wrapper title="完成常驻"><Progress type="circle" percent={100} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="报错状态">
                    <Progress type="circle" percent={40} status="exception" showInfo={false} />
                </Wrapper>
            </div>
        </BrandProvider>
    );
};


export const CircleInfo = () => {
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} /></Wrapper>
                <br />
                <Wrapper title="已完成"><Progress type="circle" percent={100} status="normal" /></Wrapper>
                <br />
                <Wrapper title="完成常驻"><Progress type="circle" percent={100} /></Wrapper>
                <br />
                <Wrapper title="报错状态">
                    <Progress type="circle" percent={40} status="exception" />
                </Wrapper>
            </div>
        </BrandProvider>
    );
};

export const ProgressAction = () => {
    return (
        <>
            <p>待补充组件：含操作的进度条</p>
            <p>见设计文档</p>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/progress-cn/">Antd Progress API</a>
        </>
    );
};

