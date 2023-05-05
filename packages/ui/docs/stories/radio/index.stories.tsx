import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Radio from '@osui/radio';

export default {
    title: '数据录入/Radio 单选框',
};

const Group = Radio.Group;
const RadioButton = Radio.Button;

export const Demo = () => {
    const [value, setValue] = useState(1);
    const [valueButton, setValueButton] = useState('a');
    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <h3>1、普通单选</h3>
                <Radio>单选选项</Radio>
                <Radio disabled>单选选项</Radio>
                <Radio defaultChecked>单选选项</Radio>
                <Radio defaultChecked disabled>单选选项</Radio>
                <p></p>
                <h3>2、组合</h3>
                <Group onChange={e => setValue(e.target.value)} value={value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                    <Radio value={5} disabled>E</Radio>
                </Group>
                <p></p>
                <h3>3、加强单选</h3>
                <p>按钮样式单选组合</p>
                <Group onChange={e => setValueButton(e.target.value)} value={valueButton}>
                    <RadioButton value="a">Hangzhou</RadioButton>
                    <RadioButton value="b">Shanghai</RadioButton>
                    <RadioButton value="c">Beijing</RadioButton>
                    <RadioButton value="d">Chengdu</RadioButton>
                    <RadioButton value="e" disabled>guangzhou</RadioButton>
                </Group>
                <p />
                <Group onChange={e => setValueButton(e.target.value)} value={valueButton}>
                    <RadioButton value="a">Hangzhou</RadioButton>
                    <RadioButton value="b" disabled>Shanghai</RadioButton>
                    <RadioButton value="c">Beijing</RadioButton>
                    <RadioButton value="d">Chengdu</RadioButton>
                    <RadioButton value="e" disabled>guangzhou</RadioButton>
                </Group>
                <p />
                <Group buttonStyle="solid" value="c">
                    <RadioButton value="b" disabled>Shanghai</RadioButton>
                    <RadioButton disabled value="c">Shanghai</RadioButton>
                </Group>
            </BrandProvider>
        </div>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/radio-cn/">Antd Radio API</a>
        </>
    );
};

