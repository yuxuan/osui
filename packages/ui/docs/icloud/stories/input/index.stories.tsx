import React from 'react';
import Select from '@osui/select';
import Divider from '@osui/divider';
import AutoComplete from '@osui/auto-complete';
import FlexCentered from '@osui/flex-centered';
import BrandProvider from '@osui/brand-provider';
import Button from '@osui/button';
import Form from '@osui/form';
import Gap from '@osui/gap';
import Input from '@osui/input';
const { TextArea } = Input;

const Blockquote = ({children}) => (
    <blockquote style={{
        background: 'var(--color-brand-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--color-brand-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export default {
    title: '数据录入/Input 输入框',
};

export const Demo = () => {
    Form.useLabelLayout('demo');
    return (
        <>
            <BrandProvider brand="icloud">
                <h3>基础输入框展示形式</h3>
                <Input
                    style={{
                        width: 360,
                    }}
                    placeholder="请输入"
                />
                <br />
                <br />
                <Input
                    disabled
                    style={{
                        width: 360,
                    }}
                    value="请输入产品线名称，这个是value的disable状态"
                />
                <br />
                <br />
                <TextArea
                    style={{
                        width: 360,
                        height: 150,
                    }}
                    placeholder="请输入"
                />
                <br />
                <br />
                <p>密码输入框</p>
                <Input.Password
                    style={{
                        width: 360,
                    }}
                    placeholder="请输入"
                />
                <br />
                <br />
                <p>清空按钮输入框</p>
                <Input
                    allowClear
                    style={{
                        width: 360,
                    }}
                    placeholder="请输入"
                    defaultValue="产品线名称"
                />
                <br />
                <br />
                <p>带有前后缀的输入框</p>
                <Input
                    prefix="￥"
                    suffix="RMB"
                    style={{
                        width: 360,
                    }}
                />
                <br />
                <br />
                <Input.Group compact>
                    <Input
                        style={{
                            width: '280px',
                        }}
                        placeholder="Email"
                    />
                    <Select
                        defaultValue="RMB"
                        style={{
                            width: '80px',
                        }}
                    >
                        <Select.Option value="RMB">RMB</Select.Option>
                        <Select.Option value="JPY">JPY</Select.Option>
                    </Select>
                </Input.Group>
                <br />
                <br />
                <Input.Search
                    allowClear
                    withSuffixIcon
                    style={{
                        width: 360,
                    }}
                    placeholder="请输入"
                />
                <p></p>
                <p></p>
                <h3>错误状态</h3>
                <Blockquote>
                    以下仅为form错误状态的demo
                </Blockquote>
                <Form
                    name="demo"
                    labelAlign="left"
                    wrapperCol={{span: 12}}
                >
                    <Form.Item
                        validateMessageLayout="inline"
                        label="产品线名称"
                        validateStatus="error"
                        extra="由大小写字母、数字组成，必须以字母开头"
                        help={'格式错误，请按提示规则录入'}
                    >
                        <Input defaultValue="百度" />
                    </Form.Item>
                    <Form.Item
                        validateMessageLayout="inline"
                        label="产品线名称"
                        validateStatus="error"
                        extra="输入3~10的正整数，数值越大，优先级越高"
                        help={['最大值为***', '最小值为****']}
                    >
                        <Input defaultValue="11" />
                    </Form.Item>
                    <Form.Item
                        label="产品线名称"
                        name="name"
                        validateStatus="error"
                        extra="名称不可重复，创建后不可更改"
                        help={['名称重复，请重新输入']}
                        rules={[{required: true, message: '必填'}]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </BrandProvider>
        </>);
};

export const Size = () => {
    return (
        <>
            <Blockquote>
                <p>大小高度两种：1. small: 24px，2. default: 30px；默认为30px</p>
                <p>宽度有三种： 160px，240px，320px。宽度没有给出默认设置，产品根据规范按需从这三个宽度选择合适的宽度</p>
            </Blockquote>
            <h3>高度</h3>
            <Input
                style={{
                    width: 240,
                }}
                placeholder="small size"
                size="small"
            />
            <p />
            <Input
                style={{
                    width: 240,
                }}
                placeholder="default size"
            />
            <p></p>
            <h3>宽度</h3>
            <Input
                style={{
                    width: 160,
                }}
                placeholder="请输入"
            />
            <p />
            <Input
                style={{
                    width: 240,
                }}
                placeholder="请输入"
            />
            <p />
            <Input
                style={{
                    width: 320,
                }}
                placeholder="请输入"
            />
        </>
    );
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
            <Input allowClear addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <br />
            <br />
            <Input addonBefore={selectBefore} defaultValue="mysite" />
            <br />
            <br />
            <Input.Search withSuffixIcon addonBefore={selectBefore} defaultValue="mysite" />
            <br />
            <br />
            <Input addonAfter={selectAfter} defaultValue="mysite" />
            <Blockquote>
                上面是使用addonBefore，和addonAfter来实现的，而下面是Input.Group的方式
            </Blockquote>
            <Input.Group compact>
                <Select
                    defaultValue="Sign Up"
                    style={{
                        width: '80px',
                    }}
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <AutoComplete
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                />
            </Input.Group>

            <Gap orientation="vertical" factor={2} />
            <p>注意，用组合的时候，disabled需要自己加在addonBefore和addonAfter组件上</p>
            <Input disabled addonBefore={selectBeforeDisabled} addonAfter={selectAfterDisabled} defaultValue="mysite" />
            <Divider orientation="left">5. 组合输入框 宽度自适应：待补充</Divider>
            <Divider orientation="left">5. 组合输入框 高度自适应：待补充</Divider>
            <h2>报错样式</h2>
            <Form
                name="demo"
                labelAlign="left"
                wrapperCol={{span: 12}}
            >
                <Form.Item
                    validateMessageLayout="inline"
                    label="产品线名称"
                    validateStatus="error"
                    extra="由大小写字母、数字组成，必须以字母开头"
                    help={'格式错误，请按提示规则录入'}
                >
                    <Input addonAfter={selectAfter} defaultValue="百度" />
                </Form.Item>
                <Form.Item
                    validateMessageLayout="inline"
                    label="产品线名称"
                    validateStatus="error"
                    extra="由大小写字母、数字组成，必须以字母开头"
                    help={'格式错误，请按提示规则录入'}
                >
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                </Form.Item>
                <Form.Item
                    validateMessageLayout="inline"
                    label="产品线名称"
                    validateStatus="error"
                    extra="由大小写字母、数字组成，必须以字母开头"
                    help={'格式错误，请按提示规则录入'}
                >
                    <Input.Search
                        withSuffixIcon
                        placeholder="input search text"
                        style={{
                            width: 240,
                        }}
                    />
                </Form.Item>
                <Form.Item
                    validateMessageLayout="inline"
                    label="产品线名称"
                    validateStatus="error"
                    extra="由大小写字母、数字组成，必须以字母开头"
                    help={'格式错误，请按提示规则录入'}
                >
                    <Input.Group compact>
                        <Select
                            defaultValue="Sign Up"
                            style={{
                                width: '80px',
                            }}
                        >
                            <Option value="Sign Up">Sign Up</Option>
                            <Option value="Sign In">Sign In</Option>
                        </Select>
                        <AutoComplete
                            style={{
                                width: '70%',
                            }}
                            placeholder="Email"
                            options={[{ value: 'text 1' }, { value: 'text 2' }]}
                        />
                    </Input.Group>
                </Form.Item>
            </Form>
        </>
    );
};

export const Search = () => {
    return (
        <>
            <BrandProvider brand="icloud">
                <Blockquote>
                    注意：使用enterButton时不可以和withSuffixIcon一起用，也不合理，enterButton会覆盖掉withSuffixIcon
                </Blockquote>
                <h3>基础搜索框</h3>
                <FlexCentered>
                    <Input.Search
                        allowClear
                        withSuffixIcon
                        placeholder="搜索提示文案"
                        style={{
                            width: 240,
                        }}
                    />
                    <Gap orientation="horizontal" factor={6} base={4} />
                    <Input.Search
                        allowClear
                        enterButton="搜索"
                        placeholder="搜索提示文案"
                        style={{
                            width: 240,
                        }}
                    />
                </FlexCentered>
                <br />
                <FlexCentered>
                    <Input.Search
                        disabled
                        withSuffixIcon
                        placeholder="搜索提示文案"
                        style={{
                            width: 240,
                        }}
                    />
                    <Gap orientation="horizontal" factor={6} base={4} />
                    <Input.Search
                        disabled
                        enterButton={<Button disabled type="primary">搜索</Button>}
                        placeholder="搜索提示文案"
                        style={{
                            width: 240,
                        }}
                    />
                    <Gap orientation="horizontal" factor={6} base={4} />
                    <Input.Search
                        loading
                        enterButton="搜索"
                        placeholder="搜索提示文案"
                        style={{
                            width: 240,
                        }}
                    />
                </FlexCentered>
                <Blockquote>
                    下面第一个这种不在规范内，不要使用，如果要用，加上 withSuffixIcon
                </Blockquote>
                <Input.Search
                    placeholder="搜索提示文案"
                    style={{
                        width: 240,
                    }}
                />
            </BrandProvider>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/input-cn/">Antd Input API</a>
        </>
    );
};

