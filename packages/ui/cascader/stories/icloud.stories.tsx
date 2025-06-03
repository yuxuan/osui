/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Cascader from '../src';

export default {
    title: '数据录入/Cascader 级联选择',
    component: Cascader,
};

const han = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    const options = [
        {
            value: '操作命令一',
            label: '操作命令一',
            children: [
                {
                    value: '操作命令一',
                    label: '操作命令一',
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
            value: '操作命令二',
            label: '操作命令二',
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
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>

            <p>基本样式</p>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
                showSearch
            />
            <p></p>
            <p>禁用状态</p>
            <Cascader
                disabled
                options={options}
                onChange={onChange}
                placeholder="Please select"
                showSearch
            />
        </BrandProvider>
    );
};

export const Load = () => {
    const optionLists = han.map(index => ({
        value: `操作命令${index}`,
        label: `操作命令${index}`,
        isLeaf: false,
    }));

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
                        label: '操作命令一',
                        value: 'dynamic1',
                    },
                    {
                        label: '操作命令二',
                        value: 'dynamic2',
                    },
                ];
                setOptions([...options]);
            }, 1000);
        };

        return (
            <Cascader
                placeholder="Please select"
                options={options}
                loadData={loadData}
                onChange={onChange}
                changeOnSelect
            />
        );
    };
    return (
        <BrandProvider>
            <LazyOptions />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/cascader-cn/">Antd Cascader API</a>
        </>
    );
};

