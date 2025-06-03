import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Radio from '../src';
import IconAComponent from './iconA';
import IconBComponent from './iconB';

export default {
    title: '数据录入/Radio 单选框',
};

const Group = Radio.Group;
const RadioButton = Radio.Button;

export const Demo = () => {
    const [value, setValue] = useState(1);
    const [valueButton, setValueButton] = useState('a');
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };


    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud" theme={theme}>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
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
                <h3>3、按钮单选</h3>
                <p>按钮样式单选组合</p>
                <p>加强</p>
                <Group buttonType="strong" onChange={e => setValueButton(e.target.value)} value={valueButton}>
                    <RadioButton value="a">Hangzhou</RadioButton>
                    <RadioButton value="b">Shanghai</RadioButton>
                    <RadioButton value="c">Beijing</RadioButton>
                    <RadioButton value="d">Chengdu</RadioButton>
                    <RadioButton value="e" disabled>guangzhou</RadioButton>
                </Group>
                <br />
                <br />
                <Group
                    buttonType="strong"
                    optionType="button"
                    options={[
                        {label: 'Hangzhou', value: 'a'},
                        {label: 'Shanghai', value: 'b', disabled: true},
                        {label: 'Beijing', value: 'c'},
                        {label: 'Chengdu', value: 'd'},
                        {label: 'guangzhou', value: 'e', disabled: true},
                    ]}
                    onChange={e => setValueButton(e.target.value)}
                    value={valueButton}
                />
                <p />
                <p>普通</p>
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
                <p></p>
                <p></p>
                <Group onChange={e => setValueButton(e.target.value)} value={valueButton}>
                    <Radio.RichButton
                        value="a"
                        description="自定义训练镜像以及参数的场景"
                        icon={<IconAComponent />}
                    >
                        自定义
                    </Radio.RichButton>
                    <Radio.RichButton
                        value="b"
                        description="支持9种大模型，智能提高计算资源使用率"
                        flag="推荐"
                        icon={<IconBComponent />}

                    >
                        AIAK 训练加模版
                    </Radio.RichButton>
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

