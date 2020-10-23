import { InputNumber } from 'antd';

export default {
    title: 'InputNumber',
    component: InputNumber,
};

export const Demo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
};
