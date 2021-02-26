import React from 'react';
import Cascader from '../src';

export default {
    title: '数据录入/Cascader 级联选择',
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


export const Load = () => {

    const optionLists = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            isLeaf: false,
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            isLeaf: false,
        },
    ];

    const LazyOptions = () => {
        const [options, setOptions] = React.useState(optionLists);

        const onChange = (value, selectedOptions) => {
            console.log(value, selectedOptions);
        };

        const loadData = selectedOptions => {
            const targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;

            // load options lazily
            setTimeout(() => {
                targetOption.loading = false;
                targetOption.children = [
                    {
                        label: `${targetOption.label} Dynamic 1`,
                        value: 'dynamic1',
                    },
                    {
                        label: `${targetOption.label} Dynamic 2`,
                        value: 'dynamic2',
                    },
                ];
                setOptions([...options]);
            }, 1000);
        };

        return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
    };
    return (<LazyOptions />);
};
