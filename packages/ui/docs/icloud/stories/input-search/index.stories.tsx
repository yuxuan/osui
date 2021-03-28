import React from 'react';
import Input from '@osui/input';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';

export default {
    title: '数据录入/Input 搜索框',
};

export const Demo = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <p>能让用户探索更多内容或筛选指定内容。</p>
            <h3>使用场景</h3>
            <p>当数据量庞大并且结构复杂时，建议为用户提供搜索功能，让用户可以快速找到想要的信息。</p>
            <Divider>展示</Divider>
            <p><strong>FE说明：</strong>下面demo使用的是Input + 后缀icon，注意：要加allowClear</p>
            <Input.Search
                allowClear
                withSuffixIcon
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                onSearch={console.log}
            />
            <br />
            <br />
            <Input.Search
                disabled
                withSuffixIcon
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                onSearch={console.log}
            />
            <br />
            <br />
            <p><strong>FE说明：</strong>下面demo使用的是Input.Search</p>
            <Input.Search
                allowClear
                style={{ width: 400 }}
                placeholder="input search text"
                enterButton="搜索"
                onSearch={onSearch}
            />
            <br />
            <br />
            <Input.Search
                allowClear
                disabled
                style={{ width: 400 }}
                placeholder="input search text"
                enterButton="搜索"
            />
            <br />
            <br />
            <BrandProvider brand="icloud">
                <Input.Search
                    allowClear
                    style={{ width: 400 }}
                    placeholder="input search text"
                    onSearch={console.log}
                />
            </BrandProvider>
        </>
    );
};


