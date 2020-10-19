import React from 'react';
import Button from '@osui/button';
import Popover from '../src';

export default {
    title: 'Popover',
};

export const Demo = () => {
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
            <Popover
                content={content1}
                placement="topLeft"
                trigger="hover"
            >
                <Button>Hover</Button>
            </Popover>
            <Popover
                content={
                    <div>
                        {content1}
                    </div>
                }
                placement="topLeft"
                trigger="click"
            >
                <Button style={{margin: '0 20px'}}>Click</Button>
            </Popover>
            <Popover
                content={
                    <div>
                        {content1}
                    </div>
                }
                placement="topLeft"
                trigger="focus"
            >
                <Button>Focus</Button>
            </Popover>
            <p style={{marginTop: 20}}>气泡位置</p>
            <br />
            <div style={{ marginLeft: buttonWidth + 32, whiteSpace: 'nowrap' }}>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topLeft"
                    trigger="click"
                >
                    <Button>TL</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="top"
                    trigger="click"
                >
                    <Button style={{margin: '0 20px'}}>Top</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topRight"
                    trigger="click"
                >
                    <Button>TR</Button>
                </Popover>
            </div>
            <div style={{ width: buttonWidth, float: 'left', textAlign: 'right' }}>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="leftTop"
                    trigger="click"
                >
                    <Button>LT</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="left"
                    trigger="click"
                >
                    <Button style={{margin: '20px 0'}}>Left</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="leftBottom"
                    trigger="click"
                >
                    <Button>LB</Button>
                </Popover>
            </div>
            <div style={{ width: buttonWidth, marginLeft: buttonWidth * 5 + 24 }}>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="rightTop"
                    trigger="click"
                >
                    <Button>RT</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="right"
                    trigger="click"
                >
                    <Button style={{margin: '20px 0'}}>Right</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="rightBottom"
                    trigger="click"
                >
                    <Button>RB</Button>
                </Popover>
            </div>
            <div style={{ marginLeft: buttonWidth + 25, clear: 'both', whiteSpace: 'nowrap' }}>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottomLeft"
                    trigger="click"
                >
                    <Button>BL</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottom"
                    trigger="click"
                >
                    <Button style={{margin: '0 20px'}}>Bottom</Button>
                </Popover>
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottomRight"
                    trigger="click"
                >
                    <Button>BR</Button>
                </Popover>
            </div>
        </div>
    );
};
