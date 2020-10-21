import { InputNumber } from 'antd';
import Space from '@osui/space';

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

export const Size = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <Space>
            <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
        </Space>
    );
};
