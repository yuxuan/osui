import React from 'react';
import {Divider} from 'antd';
import Tooltip from '@osui/tooltip';

export default {
    title: 'OSUI-Tooltip',
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
