import React, {useState} from 'react';
import Radio from '../src';

export default {
    title: 'Radio',
};

const Group = Radio.Group;
const RadioButton = Radio.Button;

export const Demo = () => {
    const [value, setValue] = useState(1);
    const [valueButton, setValueButton] = useState('a');
    return (
        <div style={{padding: 30}}>
            <p>基础示例</p>
            <Radio>Radio</Radio>
            <Radio defaultChecked>Radio</Radio>
            <Radio disabled>Radio</Radio>
            <Radio defaultChecked disabled>Radio</Radio>
            <p></p>
            <p>单选组合</p>
            <Group onChange={e => setValue(e.target.value)} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
                <Radio value={5} disabled>E</Radio>
            </Group>
            <p></p>
            <p>按钮样式单选组合</p>
            <Group onChange={e => setValueButton(e.target.value)} value={valueButton}>
                <RadioButton value="a">Hangzhou</RadioButton>
                <RadioButton value="b">Shanghai</RadioButton>
                <RadioButton value="c">Beijing</RadioButton>
                <RadioButton value="d">Chengdu</RadioButton>
                <RadioButton value="e" disabled>guangzhou</RadioButton>
            </Group>
        </div>
    );
};
