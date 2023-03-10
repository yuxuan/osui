import React from 'react';
import {IconSearchOutlined, IconHomeOutlined} from '@osui/icons';
import Space from '@osui/space';
import Gap from '@osui/gap';
import Button from '@osui/button';

export default {
    title: 'Button',
    component: Button,
};

export const Demo = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Button type="default">普通样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="default" disabled>普通样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="default" loading>普通样式</Button>
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button type="strong" icon={<IconHomeOutlined />}>加强样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="strong" disabled>加强样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="strong" loading>加强样式</Button>
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button type="primary">重要样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="primary" disabled>重要样式</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="primary" loading>重要样式</Button>
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button type="link">文字按钮</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="link" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="link" loading>文字按钮</Button>
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button icon={<IconSearchOutlined />} />
                <Gap factor={2} orientation="horizontal" />
                <Button disabled icon={<IconSearchOutlined />} />
                <Gap factor={2} orientation="horizontal" />
                <Button loading icon={<IconSearchOutlined />} />
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button type="icon" icon={<IconSearchOutlined />} />
                <Gap factor={2} orientation="horizontal" />
                <Button type="icon" disabled icon={<IconSearchOutlined />} />
                <Gap factor={2} orientation="horizontal" />
                <Button type="icon" loading icon={<IconSearchOutlined />} />
            </div>
            <Gap factor={2} orientation="vertical" />
            <div style={{display: 'flex'}}>
                <Button type="default" icon={<IconHomeOutlined />}>
                    图文按钮
                </Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="default" disabled icon={<IconHomeOutlined />}>
                    图文按钮
                </Button>
                <Gap factor={2} orientation="horizontal" />
                <Button type="default" loading icon={<IconHomeOutlined />}>
                    图文按钮
                </Button>
            </div>
        </>
    );
};

export const Group = () => {
    return (
        <>
            <p>当有两个以上Button共同出现使用时，考虑用Button Group</p>
            <p>Button Group的的几种用法</p>
            <p>1. 中间有间隔的，可以使用Space，可以参考Space的参数</p>
            <Space>
                <Button size="small">取消</Button>
                <Button type="primary" size="small">确定</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button>取消</Button>
                <Button type="primary">确定</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button size="large">取消</Button>
                <Button size="large" type="primary">确定</Button>
            </Space>
            <br />
            <br />
            <p>2. Antd默认的Button.Group，没有间隔，Button之间的border做了处理</p>
            <Button.Group>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Button.Group>
            <br />
            <br />
            <p>如果需要Group内的button等宽，需要自行设置min-width，例如：</p>
            <Button.Group>
                <Button style={{minWidth: 88}}>Cancel</Button>
                <Button style={{minWidth: 88}}>Ok</Button>
            </Button.Group>
        </>
    );
};
