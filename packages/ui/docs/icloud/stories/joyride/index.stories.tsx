import React, {useState} from 'react';
import Button from '@osui/button';
import Joyride from '@osui/joyride';

export default {
    title: 'joyride',
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
    console.log(run);
    return (
        <div className="app">
            <Joyride
                steps={steps}
                run={run}
                onFinish={() => setRun(false)} // 如果需要restart，需要onFinish 设置setRun(false)
            />
            <div className="my-1-step" style={{height: 50}}>DEMO1</div>
            <div className="my-2-step" style={{height: 50}}>DEMO2</div>
            <div className="my-3-step" style={{height: 50}}>DEMO3</div>
            <Button onClick={() => setRun(true)}>Run</Button>
        </div>
    );
};

