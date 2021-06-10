import React from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default {
    title: '数据录入/Select 选择器',
};

export const Demo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider brand="icloud">
                <h2>基础下拉</h2>
                <p>placeholder</p>
                <Select placeholder="请选择" style={{ width: 240 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有默认值</p>
                <Select defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>disabled</p>
                <Select defaultValue="lucy" style={{ width: 240 }} disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>loading</p>
                <Select defaultValue="lucy" style={{ width: 240 }} loading>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>无边框样式</p>
                <Select defaultValue="lucy" style={{ width: 240 }} noBorder>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>内容为空</p>
                <Select defaultValue="lucy" style={{ width: 240 }} />
            </BrandProvider>
        </>
    );
};


export const Size = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <Space>
            <Select placeholder="small size" style={{ width: 240 }} size="small">
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select placeholder="default size" style={{ width: 240 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select placeholder="large size" style={{ width: 240 }} onChange={handleChange} size="large">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Space>
    );
};

export const MultipleDemo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider>
                <h2>无限制下拉多选</h2>
                <p>默认多选使用方式：</p>
                <Select mode="multiple" placeholder="请选择" style={{ width: 240 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有默认值</p>
                <Select
                    allowClear={false}
                    mode="multiple"
                    defaultValue="lucy"
                    style={{ width: 240 }}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
                <br />
                <br />
                <p>可清除样式</p>
                <Select
                    allowClear
                    mode="multiple"
                    defaultValue="lucy"
                    style={{ width: 240 }}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有限制下拉多选</p>
                <p>待补充</p>
                <p>含搜索功能的下拉多选</p>
                <p>待补充</p>
                <p>复合内容选择器</p>
                <p>待补充</p>
                <p>含搜索功能下拉单选</p>
                <p>待补充</p>
            </BrandProvider>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/">Antd Select API</a>
        </>
    );
};

