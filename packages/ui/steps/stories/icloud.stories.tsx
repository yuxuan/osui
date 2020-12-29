import React, {useState} from 'react';
import Steps from '../src';

export default {
    title: '待验收/Steps 步骤条',
    component: Steps,
};

export const Demo = () => {
    const {Step} = Steps;
    const [current, setCurrent] = useState(0);
    return (
        <Steps current={current} onChange={step => setCurrent(step)} type="navigation">
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
        </Steps>
    );
};
