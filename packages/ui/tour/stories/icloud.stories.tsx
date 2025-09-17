import React, {useRef, useState} from 'react';
import {Meta} from '@storybook/react';
import {EllipsisOutlined} from '@ant-design/icons';
import {Button, Divider, Space} from 'antd';
import BrandProvider from '@osui/brand-provider';
import Tour, {type TourProps} from '../src';

const meta = {
    title: '数据展示/漫游式引导 Tour',
    component: Tour,
    parameters: {
        height: 1000,
    },
} satisfies Meta<typeof Tour>;

export default meta;

export const Primary = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [run, setRun] = useState(false);

    const steps = [
        {
            title: '快速浏览云上百度整体使用情况',
            description: '概览页xxx可以快速浏览订单整体，xxxx公交卡尽快给大家交卡尽快给大家概览页xxx可以快速浏览订单整体，xxxx公交卡。',
            target: () => ref1.current,
        },
        {
            title: '快速浏览云上百度整体使用情况',
            description: 'This another awesome feature!',
            target: () => ref2.current,
        },
        {
            title: '快速浏览云上百度整体使用情况',
            description: 'This another awesome feature!',
            target: () => ref3.current,
        },
    ];

    const steps2 = [
        {
            title: '快速浏览云上百度整体使用情况',
            description: 'This another awesome feature!',
            placement: 'top',
            target: () => ref4.current,
        },
    ];
    const theme = {
        token: {
            Tour: {
                colorBgElevated: 'var(--theme-primary-color)',
            },
        },
    };

    return (
        <BrandProvider theme={theme}>
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
                    <div ref={ref1} style={{height: 50, width: 100, background: 'blue'}}>DEMO1</div>
                    <div style={{height: 50}}></div>
                    <div ref={ref2} style={{height: 50, width: 100, background: 'red'}}>DEMO2</div>
                    <div style={{height: 50}}></div>
                    <div ref={ref3} style={{height: 50, background: 'yellow'}}>DEMO3</div>
                    <div style={{height: 50}}></div>
                </div>
                <div
                    className="content"
                    style={{
                        flex: 1,
                        width: 'calc(100vw - 160px)',
                        height: '400px',
                        backgroundColor: 'var(--brand-color-1)',
                    }}
                >
                    content
                    <div ref={ref4} style={{height: 50, width: 50, background: 'green'}}>DEMO4</div>
                </div>
            </div>
            <Tour open={run} onClose={() => setRun(false)} steps={steps} mask={false} />
            <Tour open={run} onClose={() => setRun(false)} steps={steps2} mask={false} />
        </BrandProvider>
    );
};

export const Demo: React.FC = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps['steps'] = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
                />
            ),
            target: () => ref1.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref2.current,
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref3.current,
        },
    ];
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </Button>
            <Divider />
            <Space>
                <Button ref={ref1}> Upload</Button>
                <Button ref={ref2} type="primary">
                    Save
                </Button>
                <Button ref={ref3} icon={<EllipsisOutlined />} />
            </Space>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tour-cn/">Antd Tour API</a>
        </>
    );
};
