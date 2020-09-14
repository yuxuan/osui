import React from 'react';
import Button from '@osui/button';
import OSUIPopover from '../src';

export default {
    title: 'Popover',
};

export const Demo = () => {
    const text = <span>我是标题我是标题</span>;
    const text1 = <span>我是标题</span>;
    const content = (
        <div>
            我是内容
        </div>);
    const content1 = (
        <div>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        </div>
    );

    const buttonWidth = 60;

    return (
        <div style={{padding: 30}}>
            <p>三种触发方式</p>
            <br />
            <OSUIPopover
                content={
                    <div>
                        {content1}
                        <Button type="link" style={{marginTop: 10}}>link</Button>
                    </div>
                }
                placement="topLeft"
                title={text1}
                trigger="hover"
            >
                <Button>Hover</Button>
            </OSUIPopover>
            <OSUIPopover
                content={
                    <div>
                        {content1}
                    </div>
                }
                placement="topLeft"
                title=""
                trigger="click"
            >
                <Button style={{margin: '0 20px'}}>Click</Button>
            </OSUIPopover>
            <OSUIPopover
                content={
                    <div>
                        {content1}
                    </div>
                }
                placement="topLeft"
                title={text1}
                trigger="focus"
            >
                <Button>Focus</Button>
            </OSUIPopover>
            <p style={{marginTop: 20}}>气泡位置</p>
            <br />
            <div style={{ marginLeft: buttonWidth + 32, whiteSpace: 'nowrap' }}>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topLeft"
                    title={text}
                    trigger="click"
                >
                    <Button>TL</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="top"
                    title={text}
                    trigger="click"
                >
                    <Button style={{margin: '0 20px'}}>Top</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topRight"
                    title={text}
                    trigger="click"
                >
                    <Button>TR</Button>
                </OSUIPopover>
            </div>
            <div style={{ width: buttonWidth, float: 'left', textAlign: 'right' }}>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="leftTop"
                    title={text}
                    trigger="click"
                >
                    <Button>LT</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="left"
                    title={text}
                    trigger="click"
                >
                    <Button style={{margin: '20px 0'}}>Left</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="leftBottom"
                    title={text}
                    trigger="click"
                >
                    <Button>LB</Button>
                </OSUIPopover>
            </div>
            <div style={{ width: buttonWidth, marginLeft: buttonWidth * 5 + 24 }}>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="rightTop"
                    title={text}
                    trigger="click"
                >
                    <Button>RT</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="right"
                    title={text}
                    trigger="click"
                >
                    <Button style={{margin: '20px 0'}}>Right</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="rightBottom"
                    title={text}
                    trigger="click"
                >
                    <Button>RB</Button>
                </OSUIPopover>
            </div>
            <div style={{ marginLeft: buttonWidth + 25, clear: 'both', whiteSpace: 'nowrap' }}>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottomLeft"
                    title={text}
                    trigger="click"
                >
                    <Button>BL</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottom"
                    title={text}
                    trigger="click"
                >
                    <Button style={{margin: '0 20px'}}>Bottom</Button>
                </OSUIPopover>
                <OSUIPopover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottomRight"
                    title={text}
                    trigger="click"
                >
                    <Button>BR</Button>
                </OSUIPopover>
            </div>
        </div>
    );
};
