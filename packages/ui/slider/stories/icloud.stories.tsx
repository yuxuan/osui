import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import InputNumber from '@osui/input-number';
import Gap from '@osui/gap';
import Divider from '@osui/divider';
import Slider from '../src';

export default {
    title: '验收中/Slider 滑动输入条',
    component: Slider,
};

export const Demo = () => {
    const [inputValue, setInputValue] = useState(0);
    const handleChange = value => {
        setInputValue(value);
    };
    return (
        <>
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
                    <InputNumber style={{width: 72}} value={inputValue} onChange={handleChange} />
                </div>
            </div>
        </>
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
