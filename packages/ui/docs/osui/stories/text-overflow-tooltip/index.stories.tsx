import React from 'react';
import Divider from '@osui/divider';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';

export default {
    title: 'TextOverflowTooltip',
};

export const Demo = () => {
    return (
        <>
            <Divider orientation="left">当内容超长时，展示Tooltip</Divider>
            <p style={{color: 'red'}}>注意：Tooltip内只能是字符串（string），不能有其他内容，请查看Demo</p>
            <p style={{color: 'red'}}>需传入width或maxWidth属性</p>
            <p>Demo: </p>
            <TextOverflowTooltip maxWidth={50} title="Hover me">
                Hover me
            </TextOverflowTooltip>
            <br />
            <br />
            <Divider orientation="left">如果不超长，不展示Tooltip</Divider>
            <TextOverflowTooltip maxWidth={100} title="Hover me">Hover me</TextOverflowTooltip>
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
