/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Button from '@osui/button';
import Gap from '@osui/gap';
import Divider from '@osui/divider';
import Markdown from '@osui/markdown';
import Form from '@osui/form';
import Input from '@osui/input';
import BrandProvider from '@osui/brand-provider';
import Popover from '../src';

export default {
    title: '数据展示/Popover 气泡卡片',
};

export const Demo1 = () => {
    const content = (
        <div>
            我是内容内容内容内容内容
        </div>
    );

    return (
        <BrandProvider style={{padding: 30}}>
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
            <Divider orientation="left">Tips文字提示</Divider>
            <h3>Tips文字提示</h3>
            <Popover content={<div>{content}</div>}>文字位置</Popover>
        </BrandProvider>
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
        <BrandProvider style={{padding: 30}}>
            <p style={{marginTop: 20}}>气泡位置</p>
            <br />
            <div style={{marginLeft: buttonWidth + 32, whiteSpace: 'nowrap', display: 'flex'}}>
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
            <div style={{width: buttonWidth, float: 'left', textAlign: 'right'}}>
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
            <div style={{width: buttonWidth, marginLeft: buttonWidth * 5 + 24}}>
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
            <div style={{marginLeft: buttonWidth + 25, clear: 'both', whiteSpace: 'nowrap', display: 'flex'}}>
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
        </BrandProvider>
    );
};

export const Demo3 = () => {
    const [clicked, setClicked] = useState(false);

    const handleClickChange = () => {
        setClicked((visible: boolean) => !visible);
    };

    const clickContent = <div>内容内容内容内容内容内容内容内容</div>;

    return (
        <BrandProvider>
            <Divider orientation="left">可以从内部关闭的气泡卡片</Divider>
            <p>注意。showCloseIcon要配合onVisibleChange一起使用</p>
            <Popover
                showCloseIcon
                content={
                    <div>
                        {clickContent}
                    </div>
                }
                title="卡片标题"
                trigger="click"
                visible={clicked}
                onVisibleChange={handleClickChange}
            >
                <Button>单击</Button>
            </Popover>
        </BrandProvider>
    );
};

export const FormItemPopover = () => {

    const FormItem = () => {
        return (
            <>
                <BrandProvider brand="icloud">
                    <Form layout="inline" size="small">
                        <Form.Item style={{width: 180}}>
                            <Input placeholder="输入名称" />
                        </Form.Item>
                        <Form.Item style={{marginRight: 0}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Button>取消</Button>
                                <Gap orientation="horizontal" factor={2} />
                                <Button type="primary">确认</Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <div style={{fontSize: 12, color: 'var(--color-gray-7)', marginTop: 8}}>
                        {'支持大小写字母，数字和"-_/.”以字母开头，不超过65'}
                    </div>
                </BrandProvider>
            </>
        );
    };

    return (
        <BrandProvider>
            <Popover content={FormItem}>
                Form Item Demo
            </Popover>
        </BrandProvider>
    );
};


export const Api = () => {
    const content = `
    | 参数 | 说明 | 类型 | 默认值
    | --- | --- | --- | --- |
    | showCloseIcon | 是否展示关闭icon | boolean | undefined |
    `;
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/popover-cn/">Antd Popover API</a>
            <h2>新增参数</h2>
            <Markdown content={content} />
        </>
    );
};

