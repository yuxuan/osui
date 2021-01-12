import React from 'react';
import Cascader from '@osui/cascader';

export default {
    title: '验收中/Cascader 级联选择',
    component: Cascader,
};

export const Demo = () => {
    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    function onChange(value) {
        console.log(value);
    }

    return (
        <Cascader
            options={options}
            onChange={onChange}
            placeholder="Please select"
        />
    );
};
