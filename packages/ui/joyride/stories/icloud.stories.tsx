import React, { useState } from 'react';
import Button from '@osui/button';
import Divider from '@osui/divider';
import Markdown from '@osui/markdown';
import Joyride from '../src';

export default {
    title: '场景/Joyride 新功能点引导',
};

export const Demo = () => {
    const [run, setRun] = useState(false);

    const steps = [
        {
            target: '.my-1-step',
            title: '快速浏览云上百度整体使用情况',
            content: '概览页xxx可以快速浏览订单整体，xxxx公交卡尽快给大家交卡尽快给大家概览页xxx可以快速浏览订单整体，xxxx公交卡。',
        },
        {
            target: '.my-2-step',
            content: 'This another awesome feature!',
        },
        {
            target: '.my-3-step',
            content: 'This another awesome feature!',
        },
    ];

    const steps2 = [
        {
            target: '.my-4-step',
            content: 'This another awesome feature!',
        },
    ];

    return (
        <>
            <p><strong>FE说明：</strong>实现基于<a href="https://docs.react-joyride.com/" target="_blank" rel="noreferrer">react-joyride</a>。api可查看它的文档</p>
            <Divider>展示</Divider>
            <Button onClick={() => setRun(true)}>Run</Button>
            <div style={{height: 40}}></div>
            <div
                className="main"
                style={{display: 'flex', flex: 1, height: '300px', overflow: 'scroll'}}
            >
                <div
                    className="sidebar"
                    style={{position: 'sticky', top: 0}}
                >
                    <div className="my-1-step" style={{ height: 50, width: 100, background: 'blue' }}>DEMO1</div>
                    <div style={{ height: 50 }}></div>
                    <div className="my-2-step" style={{ height: 50, width: 100, background: 'red' }}>DEMO2</div>
                    <div style={{ height: 50 }}></div>
                    <div className="my-3-step" style={{ height: 50, background: 'yellow' }}>DEMO3</div>
                    <div style={{ height: 50 }}></div>
                </div>
                <div
                    className="content"
                    style={{
                        flex: 1,
                        width: 'calc(100vw - 160px)',
                        height: '400px',
                        backgroundColor: 'var(--color-brand-1)',
                    }}
                >
                    content
                    <div className="my-4-step" style={{ height: 50, width: 50, background: 'green' }}>DEMO4</div>
                </div>
            </div>
            <Joyride
                shouldRestart
                steps={steps}
                run={run}
                onFinish={() => setRun(false)}
                disableOverlay
            />
            <Joyride
                shouldRestart
                steps={steps2}
                hideStepsSize
                run={run}
                onFinish={() => setRun(false)}
                disableOverlay
            />
        </>
    );
};


export const Api = () => {
    return (
        <>
            <h2>官方文档：</h2>
            <a href="https://docs.react-joyride.com/" >React Joyrid</a>
            <br />
            <h2>新增参数：</h2>
            <Markdown content={`
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| shouldRestart | 结束之后是否可以restart| boolean | - |
| onFinish | 展示结束之后的回调，如果是受控的run方式，并且支持restart的话，需要onFinish内把run设置成false，见demo | function | - |
| hideStepsSize | 是否展示steps步数 | boolean, undefined | undefined |
            `}
            />
        </>
    );
};
