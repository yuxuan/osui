import React from 'react';
import {Divider} from 'antd';
import Tooltip, {TextOverflowTooltip} from '@osui/tooltip';

export default {
    title: 'Tooltip',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <Divider orientation="left">基本</Divider>
            <Tooltip title="最简单的用法">
                <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
        </div>);
};

export const TextOverflowTooltipDemo = () => {
    return (
        <>
            <Divider orientation="left">当内容超长时，展示Tooltip</Divider>
            <p style={{color: 'red'}}>注意：Tooltip内只能是字符串（string），不能有其他内容，请查看Demo</p>
            <p style={{color: 'red'}}>必须传入width属性</p>
            <p>Demo: </p>
            <TextOverflowTooltip width={50} title="Hover me">
                Hover me
            </TextOverflowTooltip>
            <br />
            <br />
            <Divider orientation="left">如果不超长，不展示Tooltip</Divider>
            <TextOverflowTooltip width={100} title="Hover me">Hover me</TextOverflowTooltip>
            <br />
            <br />
            <Divider orientation="left">支持Hover和click事件，其他的目前不支持</Divider>
            <TextOverflowTooltip width={50} title="Click me" trigger="click">
                Click me
            </TextOverflowTooltip>
            <br />
            <TextOverflowTooltip width={100} title="Click me" trigger="click">
                Click me
            </TextOverflowTooltip>
        </>
    );
};
