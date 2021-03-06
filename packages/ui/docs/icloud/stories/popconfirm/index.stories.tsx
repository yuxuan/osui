/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import message from '@osui/message';
import Button from '@osui/button';
import Popconfirm, {ConfirmContentWithTitle} from '@osui/popconfirm';

export default {
    title: '反馈/Popconfirm 气泡确认框',
    component: Popconfirm,
};

export const Demo = () => {

    const text = '确定同意请求吗？';

    function confirm() {
        message.info('Clicked on Yes.');
    }

    return (
        <div className="demo">
            <p></p>
            <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                <Popconfirm
                    placement="topLeft"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>TL</Button>
                </Popconfirm>
                <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Top</Button>
                </Popconfirm>
                <Popconfirm
                    placement="topRight"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>TR</Button>
                </Popconfirm>
            </div>
            <div style={{ width: 70, float: 'left' }}>
                <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>LT</Button>
                </Popconfirm>
                <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Left</Button>
                </Popconfirm>
                <Popconfirm
                    placement="leftBottom"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>LB</Button>
                </Popconfirm>
            </div>
            <div style={{ width: 70, marginLeft: 304 }}>
                <Popconfirm
                    placement="rightTop"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>RT</Button>
                </Popconfirm>
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Right</Button>
                </Popconfirm>
                <Popconfirm
                    placement="rightBottom"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>RB</Button>
                </Popconfirm>
            </div>
            <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                <Popconfirm
                    placement="bottomLeft"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>BL</Button>
                </Popconfirm>
                <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Bottom</Button>
                </Popconfirm>
                <Popconfirm
                    placement="bottomRight"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>BR</Button>
                </Popconfirm>
            </div>
            <p></p>
            <p>带标题的popconfirm</p>
            <p>注意：要使用ConfirmContentWithTitle，icon要设置为null</p>
            <Popconfirm
                placement="topLeft"
                title={
                    <ConfirmContentWithTitle
                        title="卡片标题"
                        content="内容内容内容"
                    />
                }
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                icon={null}
            >
                <Button>带标题的</Button>
            </Popconfirm>
        </div>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/popconfirm-cn/">Antd Popconfirm API</a>
        </>
    );
};

