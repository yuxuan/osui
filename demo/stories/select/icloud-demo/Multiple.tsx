/* eslint-disable no-console */
import React, {useCallback} from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default () => {
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
                <Select
                    mode="multiple"
                    placeholder="请选择"
                    style={{width: 240}}
                    onChange={handleChange}
                    options={
                        [
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'a', label: 'a', disabled: true},
                            {value: 'b', label: 'b', disabled: true},
                            {value: 'c', label: 'c', disabled: true},
                        ]
                    }
                />
                <br />
                <br />
                <p>有默认值</p>
                <Select
                    allowClear={false}
                    mode="multiple"
                    defaultValue={['lucy']}
                    style={{width: 240}}
                    onChange={handleChange}
                    options={
                        [
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'a', label: 'a', disabled: true},
                            {value: 'b', label: 'b', disabled: true},
                            {value: 'c', label: 'c', disabled: true},
                        ]
                    }
                />
                <br />
                <br />
                <p>可清除样式</p>
                <Select
                    allowClear
                    mode="multiple"
                    defaultValue={['lucy']}
                    style={{width: 240}}
                    onChange={handleChange}
                    options={
                        [
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'a', label: 'a', disabled: true},
                            {value: 'b', label: 'b', disabled: true},
                            {value: 'c', label: 'c', disabled: true},
                        ]
                    }
                />
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
                    options={
                        [
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'a', label: 'a', disabled: true},
                            {value: 'b', label: 'b', disabled: true},
                            {value: 'c', label: 'c', disabled: true},
                        ]
                    }
                />
                <br />
                <br />
                <p>禁用</p>
                <Select
                    allowClear={false}
                    mode="multiple"
                    defaultValue={['lucy', 'jack']}
                    style={{width: 240}}
                    onChange={handleChange}
                    options={
                        [
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'a', label: 'a', disabled: true},
                            {value: 'b', label: 'b', disabled: true},
                            {value: 'c', label: 'c', disabled: true},
                        ]
                    }
                />
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
