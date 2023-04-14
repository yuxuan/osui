/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Select from '@osui/select';
import Divider from '@osui/divider';
import AutoComplete from '@osui/auto-complete';
import FlexCentered from '@osui/flex-centered';
import BrandProvider from '@osui/brand-provider';
import Button from '@osui/button';
import Form from '@osui/form';
import {version} from 'antd';
import Cascader from '@osui/cascader';
import Gap from '@osui/gap';
import Input from '@osui/input';
const {TextArea} = Input;

const Blockquote = ({children}: {children: React.ReactNode}) => (
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
    const inputRef = React.useRef(null);
    return (
        <>
            {version}
            <BrandProvider>
                <h3>基础输入框展示形式</h3>
                <p>默认样式</p>
                <Input
                    style={{
                        width: 360,
                    }}
                    placeholder="请输入"
                />
                <br />
                <br />
                <p>禁用</p>
                <Input
                    disabled
                    style={{
                        width: 360,
                    }}
                    value="请输入产品线名称，这个是value的disable状态"
                />
                <br />
                <br />
                <p>TextArea</p>
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
                    ref={inputRef}
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
                        className="input-group-addon"
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
                        help={[<div key="1">最大值为***</div>, <div key="2">最小值为****</div>]}
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
        </>
    );
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
    const {Option} = Select;
    // eslint-disable-next-line comma-dangle
    const selectStyle = {width: '78px'};

    const selectBefore = (
        <Select defaultValue="http://" className="select-before" style={selectStyle}>
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue=".com" className="select-after" style={selectStyle}>
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

    const selectBeforeDisabled = (
        <Select disabled defaultValue="http://" className="select-before" style={selectStyle}>
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const selectAfterDisabled = (
        <Select disabled defaultValue=".com" className="select-after" style={selectStyle}>
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
            <Blockquote>
                下面使用addonBefore，和addonAfter来实现的，这种目前视觉规范实现还不完善，规范中select宽度为78px
            </Blockquote>
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
            <br />
            <br />
            <p>注意，用组合的时候，disabled需要自己加在addonBefore和addonAfter组件上</p>
            <Input disabled addonBefore={selectBeforeDisabled} addonAfter={selectAfterDisabled} defaultValue="mysite" />

            <Blockquote>
                下面是Input.Group的方式，如果想使用和addon一样的效果，需要给传入的组件加上className=&quot;input-group-addon&quot;
            </Blockquote>
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <AutoComplete
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                    options={[{value: 'text 1', label: 'text 1'}, {value: 'text 2', label: 'text 2'}]}
                />
            </Input.Group>
            <br />
            <br />
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <Input
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                />
            </Input.Group>
            <br />
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <Input
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                />
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
            </Input.Group>
            <br />
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <Cascader
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                />
            </Input.Group>
            <br />
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
                <Cascader
                    style={{
                        width: '70%',
                    }}
                    placeholder="Email"
                />
                <Select
                    className="input-group-addon"
                    defaultValue="Sign Up"
                >
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
            </Input.Group>

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
                            className="input-group-addon"
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
                            options={[{value: 'text 1', label: 'text 1'}, {value: 'text 2', label: 'text 2'}]}
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
                        value="请输入产品线名称，这个是value的disable状态"
                        style={{
                            width: 240,
                        }}
                    />
                    <Gap orientation="horizontal" factor={6} base={4} />
                    <Input.Search
                        disabled
                        enterButton={<Button disabled type="primary">搜索</Button>}
                        placeholder="搜索提示文案"
                        value="请输入产品线名称，这个是value的disable状态"
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

export const CounterDemo = () => {
    return (
        <>
            <p>提供了一个简易的Input + showCount + maxLength的组件： InputWithCounter</p>
            <p>使用方式如下：</p>
            <p>注意：该方式可能不满足某些设计交互，如达到字数限制时允许用户继续输入，只展示表单错误</p>
            <p>Search没有支持字数限制</p>
            <p>使用时必须结合style: width一起使用，counter的定位是根据width来定位的</p>
            <p>如果不符合可以自己根据Input + div实现Counter的效果</p>
            <p />
            <p />
            <p>showCount</p>
            <Input.InputWithCounter
                showCount
                style={{width: 360}}
            />
            <br />
            <br />
            <p>showCount + maxLength=50</p>
            <Input.InputWithCounter
                showCount
                maxLength={50}
                style={{width: 360}}
            />
            <br />
            <br />
            <p>TextArea showCount</p>
            <Input.TextArea
                showCount
                style={{
                    width: 360,
                    height: 150,
                }}
            />
            <br />
            <br />
            <p>TextArea showCount + maxLength=50</p>
            <Input.TextArea
                showCount
                maxLength={50}
                style={{
                    width: 360,
                    height: 150,
                }}
            />
            <br />
            <br />
            <p>和allowClear一起使用</p>
            <Input.InputWithCounter
                showCount
                allowClear
                value="1111"
                maxLength={50}
                style={{
                    width: 360,
                }}
            />
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


export const TestCase = () => {
    return (
        <>
            {version}
            <Blockquote>
                说明：记录走查问题的测试case。 不需要走查
            </Blockquote>
            <p>hover，focus时才显示clearicon</p>
            <Input
                allowClear
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <Input.Search
                allowClear
                enterButton="搜索"
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <p>disabled，allowClear不会影响，直接传入disabled应该是好的</p>
            <Input.Search
                disabled
                allowClear
                enterButton="搜索"
                value="测试"
                style={{
                    width: 240,
                }}
            />
            <p />
            <Input.Search
                disabled
                allowClear
                withSuffixIcon
                value="测试"
                style={{
                    width: 240,
                }}
            />
            <p />
            <p>左右边距是8px</p>
            <Input
                value="测试测试测试测试测试测试测试测试测试测试"
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <Input
                value="测试测试测试测试测试测试测试测试测试测试"
                allowClear
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <Input.Search
                value="测试测试测试测试测试测试测试测试测试测试"
                withSuffixIcon
                allowClear
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <p>输入框disabled，并且有placeholder时，placeholder的颜色</p>
            <Input.Search
                disabled
                withSuffixIcon
                allowClear
                placeholder="搜索提示文案"
                style={{
                    width: 240,
                }}
            />
            <p />
            <p>Input.Group allow clear</p>
            <Input.Group compact>
                <Select
                    className="input-group-addon"
                    defaultValue="RMB"
                    style={{
                        width: '80px',
                    }}
                >
                    <Select.Option value="RMB">RMB</Select.Option>
                    <Select.Option value="JPY">JPY</Select.Option>
                </Select>
                <Input.Search
                    allowClear
                    withSuffixIcon
                    style={{
                        width: '280px',
                    }}
                    placeholder="Email"
                />

            </Input.Group>

            <p>在form中可以有大小</p>
            <Form size="large" name="demo">
                <Form.Item>
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};
