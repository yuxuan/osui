/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Gap from '@osui/gap';
import Divider from '@osui/divider';
import InputNumber from '@osui/input-number';
import Slider from '../src';

export default {
    title: '数据录入/滑动输入条 Slider',
    component: Slider,
};

export const Demo = () => {
    const [inputValue, setInputValue] = useState(20);
    const [inputValue2, setInputValue2] = useState([20, 60]);

    const onChange = newValue => {
        setInputValue(newValue);
    };
    const onChange2 = newValue => {
        setInputValue2(newValue);
    };
    const numChange1 = newValue => {
        setInputValue2([newValue, inputValue2[1]]);
    };
    const numChange2 = newValue => {
        setInputValue2([inputValue2[0], newValue]);
    };

    const marks = {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
    };
    return (
        <BrandProvider>
            <p>水平单独游标滑块</p>
            <Slider style={{width: 400}} defaultValue={30} />
            <p>水平双游标滑块</p>
            <Slider style={{width: 400}} range defaultValue={[20, 60]} />
            <p>水平带数字输入框单游标滑块</p>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Slider
                        min={0}
                        max={100}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </div>
                <Gap orientation="horizontal" factor={4} />
                <div>
                    <InputNumber
                        min={0}
                        max={100}
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
            </div>
            <p>水平带刻度双游标滑块</p>
            <Slider style={{width: 400}} range marks={marks} value={inputValue2} onChange={onChange2} />
            <p>水平带刻度数字输入框单游标滑块</p>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Slider marks={marks} value={typeof inputValue === 'number' ? inputValue : 0} />
                </div>
                <Gap orientation="horizontal" factor={4} />
                <div>
                    <InputNumber
                        min={0}
                        max={100}
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
            </div>
            <p>水平带刻度数字输入框双游标滑块</p>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Slider range marks={marks} value={inputValue2} onChange={onChange2} />
                </div>
                <Gap orientation="horizontal" factor={4} />
                <div>
                    <InputNumber
                        min={0}
                        max={100}
                        value={inputValue2[0]}
                        onChange={numChange1}
                    />
                    <span style={{margin: '0 8px'}}>
                        -
                    </span>
                    <InputNumber
                        min={0}
                        max={100}
                        value={inputValue2[1]}
                        onChange={numChange2}
                    />
                </div>
            </div>
            <div style={{display: 'flex', gap: 50}}>
                <div style={{height: 300}}>
                    <p>垂直单独游标滑块</p>
                    <Slider vertical defaultValue={20} />
                </div>
                <div style={{height: 300}}>
                    <p>垂直双游标滑块</p>
                    <Slider vertical range step={10} defaultValue={[20, 60]} />
                </div>
                <div style={{height: 300}}>
                    <p>垂直带刻度单游标滑块</p>
                    <Slider vertical range marks={marks} defaultValue={[20, 60]} />
                </div>
                <div>
                    <p>垂直带刻度单游标滑块</p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Slider
                            min={0}
                            max={100}
                            vertical
                            style={{height: 300}}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                        <div style={{marginTop: 16}}>
                            <InputNumber
                                min={0}
                                max={100}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p>禁用水平单游标滑块</p>
            <Slider
                min={0}
                max={100}
                style={{width: 400}}
                onChange={onChange}
                disabled
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
            <p>禁用水平带刻度双游标滑块</p>
            <Slider style={{width: 400}} range marks={marks} disabled value={inputValue2} onChange={onChange2} />
        </BrandProvider>
    );
};

export const Demo2 = () => {
    const [inputValue, setInputValue] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);
    const handleChange = value => {
        setInputValue(value);
    };
    return (
        <BrandProvider>
            <h2>轻量/默认</h2>
            <p>说明：这个不是一个单独组件，Input的number可以按需调整</p>
            <p>注意：规范InputNumber的宽度为72px，需要自己添加style</p>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Slider
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>
                <Gap orientation="horizontal" factor={4} />
                <div>
                    {/* <InputNumber style={{width: 72}} value={inputValue} onChange={handleChange} /> */}
                </div>
                <p></p>
            </div>
            <div style={{width: '50%'}}>
                <p>分段式滑动条</p>
                <Slider
                    value={inputValue2}
                    onChange={value => setInputValue2(value)}
                    dots
                    step={25}
                    max={200}
                    min={0}
                    marks={{
                        0: 'A',
                        50: 'B',
                        100: 'C',
                        150: 'D',
                        200: 'E',
                    }}
                />
            </div>
            <div style={{width: '50%'}}>
                <p>禁用样式</p>
                <Slider
                    disabled
                    value={inputValue2}
                    onChange={value => setInputValue2(value)}
                    dots
                    step={25}
                    max={200}
                    min={0}
                    marks={{
                        0: 'A',
                        50: 'B',
                        100: 'C',
                        150: 'D',
                        200: 'E',
                    }}
                />
            </div>
        </BrandProvider>
    );
};

export const AdvanceDemo = () => {
    const [inputValue, setInputValue] = useState(0);
    const handleChange = value => {
        setInputValue(value);
    };
    return (
        <>
            <BrandProvider brand="icloud">
                <p>目前不支持部分disable</p>
                <p>注意：规范InputNumber的宽度为72px，需要自己添加style</p>
                <div style={{display: 'flex'}}>
                    <div style={{width: '50%'}}>
                        <Slider
                            value={inputValue}
                            onChange={handleChange}
                            dots
                            step={25}
                            max={200}
                            min={0}
                            marks={{
                                0: '1Mbps',
                                50: '50Mbps',
                                100: '100Mbps',
                                150: '150Mbps',
                                200: '200Mbps',
                            }}
                        />
                    </div>
                    <Gap orientation="horizontal" factor={4} />
                    <div>
                        <InputNumber style={{width: 72}} step={25} value={inputValue} onChange={handleChange} />
                    </div>
                </div>
                <Divider orientation="left">Disabled</Divider>
                <Slider
                    disabled
                    dots
                    step={25}
                    max={200}
                    min={0}
                    defaultValue={50}
                    marks={{
                        0: '1Mbps',
                        50: '50Mbps',
                        100: '100Mbps',
                        150: '150Mbps',
                        200: '200Mbps',
                    }}
                />
            </BrandProvider>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/slider-cn/">Antd Slider API</a>
        </>
    );
};

