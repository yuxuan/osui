import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Radio from '../src';
import IconAComponent from './iconA';
import IconBComponent from './iconB';

export default {
    title: '数据录入/[new_dev]单选框 Radio',
};

const Group = Radio.Group;
const RadioButton = Radio.Button;

export const Demo = () => {
    const [value, setValue] = useState(1);
    const [valueButton, setValueButton] = useState('a');
    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <Divider>普通单选</Divider>
                <p>常规</p>
                <Radio />
                <Radio disabled />
                <Radio defaultChecked />
                <Radio defaultChecked disabled />
                <p></p>
                <p>带文字</p>
                <Radio>单选选项</Radio>
                <Radio disabled>单选选项</Radio>
                <Radio defaultChecked>单选选项</Radio>
                <Radio defaultChecked disabled>单选选项</Radio>
                <p></p>
                <Divider>组合</Divider>
                <Group onChange={e => setValue(e.target.value)} value={value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                    <Radio value={5} disabled>E</Radio>
                </Group>
                <p></p>
                <Divider>按钮单选</Divider>
                <p>加强</p>
                <Group buttonType="strong" value={'a'}>
                    <RadioButton value="a">Hangzhou</RadioButton>
                    <RadioButton value="b">Shanghai</RadioButton>
                    <RadioButton value="e" disabled>guangzhou</RadioButton>
                </Group>
                <p></p>
                <Group buttonType="strong" value={'a'}>
                    <RadioButton value="a" disabled>Hangzhou</RadioButton>
                </Group>
                <p>加强单选组</p>
                <Group
                    buttonType="strong"
                    optionType="button"
                    options={[
                        {label: 'Hangzhou', value: 'a'},
                        {label: 'Shanghai', value: 'b'},
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
                <Divider>卡片单选</Divider>
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
                    <Radio.RichButton
                        value="c"
                        description="使用百度智能云 IAM 进行身份管理和访问权限控制，不兼容 OpenAI SDK"
                        icon={<IconBComponent />}
                        disabled
                    >
                        V1
                    </Radio.RichButton>
                </Group>
                <p></p>
                <p>已选禁用</p>
                <Group value={'a'}>
                    <Radio.RichButton
                        value="a"
                        description="自定义训练镜像以及参数的场景"
                        icon={<IconAComponent />}
                        disabled
                    >
                        自定义
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

