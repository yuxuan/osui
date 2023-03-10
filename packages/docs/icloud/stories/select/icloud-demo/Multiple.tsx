/* eslint-disable no-console */
import React, {useCallback} from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default () => {
    const Option = Select.Option;

    const handleChange = useCallback(
        (value: string[]) => {
            console.log(`selected ${value}`);
        },
        []
    );

    return (
        <>
            <BrandProvider>
                <h2>无限制下拉多选</h2>
                <p>默认多选使用方式：</p>
                <Select mode="multiple" placeholder="请选择" style={{width: 240}} onChange={handleChange}>
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
                    defaultValue={['lucy']}
                    style={{width: 240}}
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
                    defaultValue={['lucy']}
                    style={{width: 240}}
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
                <p>禁用</p>
                <Select
                    disabled
                    allowClear={false}
                    mode="multiple"
                    value={['luck', 'jack']}
                    style={{width: 240}}
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
                <p>禁用</p>
                <Select
                    allowClear={false}
                    mode="multiple"
                    defaultValue={['lucy', 'jack']}
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack" disabled>Jack</Option>
                    <Option value="lucy" disabled>Lucy</Option>
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
