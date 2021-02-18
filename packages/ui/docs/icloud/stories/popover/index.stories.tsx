import React, { useState } from 'react';
import Button from '@osui/button';
import Gap from '@osui/gap';
import Divider from '@osui/divider';
import Popover from '@osui/popover';

export default {
    title: '通过验收/Popover 气泡卡片',
};

export const Demo1 = () => {
    const content = (
        <div>
            我是内容内容内容内容内容
        </div>
    );

    return (
        <div style={{ padding: 30 }}>
            <Divider orientation="left">带标题</Divider>
            <Popover
                title="卡片标题"
                content={
                    <div>
                        {content}
                    </div>
                }
                placement="top"
            >
                <Button>上方</Button>
            </Popover>
            <Divider orientation="left">三种触发方式</Divider>
            <div style={{display: 'flex'}}>
                <Popover
                    title="卡片标题"
                    content={content}
                    placement="topLeft"
                    trigger="hover"
                >
                    <Button>Hover</Button>
                </Popover>
                <Gap orientation="horizontal" factor={2} />
                <Popover
                    title="卡片标题"
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topLeft"
                    trigger="click"
                >
                    <Button>Click</Button>
                </Popover>
                <Gap orientation="horizontal" factor={2} />
                <Popover
                    title="卡片标题"
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="topLeft"
                    trigger="focus"
                >
                    <Button>Focus</Button>
                </Popover>
            </div>
        </div>
    );
};

export const Demo2 = () => {
    const content = (
        <div>
            我是内容
        </div>
    );
    const buttonWidth = 60;

    return (
        <div style={{ padding: 30 }}>
            <p style={{ marginTop: 20 }}>气泡位置</p>
            <br />
            <div style={{ marginLeft: buttonWidth + 32, whiteSpace: 'nowrap', display: 'flex' }}>
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
                <Gap orientation="horizontal" factor={2} />
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="top"
                    trigger="click"
                >
                    <Button>Top</Button>
                </Popover>
                <Gap orientation="horizontal" factor={2} />
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
                <Gap orientation="vertical" factor={2} />
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="left"
                    trigger="click"
                >
                    <Button>Left</Button>
                </Popover>
                <Gap orientation="vertical" factor={2} />
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
                <Gap orientation="vertical" factor={2} />
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="right"
                    trigger="click"
                >
                    <Button>Right</Button>
                </Popover>
                <Gap orientation="vertical" factor={2} />
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
            <div style={{ marginLeft: buttonWidth + 25, clear: 'both', whiteSpace: 'nowrap', display: 'flex' }}>
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
                <Gap orientation="horizontal" factor={2} />
                <Popover
                    content={
                        <div>
                            {content}
                        </div>
                    }
                    placement="bottom"
                    trigger="click"
                >
                    <Button>Bottom</Button>
                </Popover>
                <Gap orientation="horizontal" factor={2} />
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

export const Demo3 = () => {
    const [clicked, setClicked] = useState(false);

    const hide = () => {
        setClicked(false);
    };

    const handleClickChange = () => {
        setClicked((visible: boolean) => !visible);
    };

    const clickContent = <div>内容内容内容内容内容内容内容内容</div>;

    return (
        <>
            <Divider orientation="left">可以从内部关闭的气泡卡片</Divider>
            <Popover
                content={
                    <div>
                        {clickContent}
                        <a onClick={hide}>关闭</a>
                    </div>
                }
                title="卡片标题"
                trigger="click"
                visible={clicked}
                onVisibleChange={handleClickChange}
            >
                <Button>单击</Button>
            </Popover>
        </>
    );
};
