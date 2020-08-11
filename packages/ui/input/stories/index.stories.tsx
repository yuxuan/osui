
import * as React from 'react';
import {Form, InputNumber} from 'antd';
import {SearchOutlined, ExclamationCircleFilled, WarningFilled} from '@ant-design/icons';
import '@osui/theme/dist/theme/vars.css';
import Input from '../src';
const {TextArea} = Input;

export default {
    title: 'OSUI-Input',
};

const Item = props => {
    return (
        <div className="list_item" style={{ 'margin': '20px 0' }}>
            {props.children}
        </div>
    );
};

export const Demo = () => {
    return (<div style={{ padding: '50px' }}>
        <h2></h2>
        <Item>
            <InputNumber style={{ width: 100 }} min={1} max={10} defaultValue={3} />
        </Item>
        <Item >
            <Input style={{ width: 200 }} placeholder="请输入" />
        </Item>
        <Item>
            <Input
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                suffix={
                    <SearchOutlined onClick={() => {
                        console.log(1);
                    }}
                    />
                }
            />
        </Item>
        <Item>
            <TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
        </Item>
    </div>);
};
