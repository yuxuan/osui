import React from 'react';
import Select from '@osui/select';
import Divider from '@osui/divider';
import Gap from '@osui/gap';
import Input from '@osui/input';
const { TextArea } = Input;

export default {
    title: '数据录入/Input 输入框',
};

export const Demo = () => {
    return (
        <>
            <h2></h2>
            <Input style={{ width: 200 }} placeholder="请输入" />
            <br />
            <br />
            <Input
                disabled
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
            />
            <br />
            <br />
            <Input
                disabled
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                value="什么是只读"
            />
            <br />
            <br />
            <TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
            <br />
            <br />
            <Input.Password style={{ width: 500 }} placeholder="请输入" />
        </>);
};

export const Size = () => {
    return (
        <>
            <Input style={{ width: 200 }} placeholder="small size" size="small" />
            <br />
            <br />
            <Input style={{ width: 200 }} placeholder="default size" />
            <br />
            <br />
            <Input style={{ width: 200 }} placeholder="large size" size="large" />
        </>);
};


export const Complete = () => {
    const { Option } = Select;

    const selectBefore = (
        <Select defaultValue="http://" className="select-before">
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue=".com" className="select-after">
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

    const selectBeforeDisabled = (
        <Select disabled defaultValue="http://" className="select-before">
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const selectAfterDisabled = (
        <Select disabled defaultValue=".com" className="select-after">
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );
    return (
        <>
            <Divider orientation="left">1. 含推荐功能的输入框</Divider>
            <p>见AutoComplete，支持输入，同时支持选择内容</p>
            <Divider orientation="left">2. 含搜索联想功能的输入框</Divider>
            <p>见AutoComplete</p>
            <Divider orientation="left">3. 含推荐和搜索联想功能的输入框</Divider>
            <p>见AutoComplete</p>
            <Divider orientation="left">4. 含搜索联想功能且支持多选的输入框</Divider>
            <p>见Select多选</p>
            <Divider orientation="left">5. 组合输入框</Divider>
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <br />
            <br />
            <Input addonBefore={selectBefore} defaultValue="mysite" />
            <br />
            <br />
            <Input addonAfter={selectAfter} defaultValue="mysite" />
            <Gap orientation="vertical" factor={2} />
            <p>注意，用组合的时候，disabled需要自己加在addonBefore和addonAfter组件上</p>
            <Input disabled addonBefore={selectBeforeDisabled} addonAfter={selectAfterDisabled} defaultValue="mysite" />
            <Divider orientation="left">5. 组合输入框 宽度自适应：待补充</Divider>
            <Divider orientation="left">5. 组合输入框 高度自适应：待补充</Divider>
        </>
    );
};
