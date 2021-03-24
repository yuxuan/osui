import React, { useState } from 'react';
import Button from '@osui/button';
import Divider from '@osui/divider';
import Markdown from '@osui/markdown';
import Joyride from '@osui/joyride';

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

    return (
        <>
            <p><strong>FE说明：</strong>实现基于<a href="https://docs.react-joyride.com/" target="_blank" rel="noreferrer">react-joyride</a>。api可查看它的文档</p>
            <Divider>展示</Divider>
            <div className="app">
                <Joyride
                    shouldRestart
                    steps={steps}
                    run={run}
                    onFinish={() => setRun(false)}
                />
                <div className="my-1-step" style={{ height: 50, width: 100, background: 'blue' }}>DEMO1</div>
                <div style={{ height: 50 }}></div>
                <div className="my-2-step" style={{ height: 50, width: 100, background: 'red' }}>DEMO2</div>
                <div style={{ height: 50 }}></div>
                <div className="my-3-step" style={{ height: 50, background: 'yellow' }}>DEMO3</div>
                <div style={{ height: 50 }}></div>
                <Button onClick={() => setRun(true)}>Run</Button>
            </div>
            <Divider>新增参数</Divider>
            <Markdown content={`
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| shouldRestart | 结束之后是否可以restart| boolean | - |
| onFinish | 展示结束之后的回调，如果是受控的run方式，并且支持restart的话，需要onFinish内把run设置成false，见demo | function | - |
            `}
            />
        </>
    );
};

