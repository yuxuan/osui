import React from 'react';
import Button from '@osui/button';
import Gap from '@osui/gap';

export default {
    title: '布局/Gap 间隔',
    component: Gap,
};

export const Demo = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Button>确认</Button>
                <Gap orientation="horizontal" factor={2} />
                <Button>取消</Button>
            </div>
            <Gap orientation="vertical" factor={4} />
            <div style={{display: 'flex'}}>
                <Button>确认</Button>
                <Gap.FlexFit />
                <Button>取消</Button>
            </div>
        </>
    );
};
