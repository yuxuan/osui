/* eslint-disable import/no-extraneous-dependencies */
import React, {createContext, useState} from 'react';
import Button from '@osui/button';
import Space from '@osui/space';
import ConfigProvider from '@osui/config-provider';
import {IconExclamationCircleFilled} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import Modal from '../src';

export default {
    title: '反馈/Modal 对话框',
};

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
    title: 'Use Hook!',
    content: (
        <>
            <ReachableContext.Consumer>{name => `Reachable: ${name}!`}</ReachableContext.Consumer>
            <br />
            <UnreachableContext.Consumer>{name => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
        </>
    ),
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };


    const [visible, setVisible] = useState(false);
    const [modal, modalContextHolder] = Modal.useModal();
    const [modal2, modalContextHolder2] = Modal.useModal();

    return (
        <BrandProvider theme={theme}>
            <div style={{padding: 30}}>
                <ConfigProvider prefixCls="meszhan">
                    <button
                        onClick={() => setCssVar(v => !v)}
                    >
                        切换{cssVar ? '不' : ''}使用cssVar
                    </button>
                    <br />
                    {modalContextHolder2}
                    <Button
                        type="primary"
                        onClick={() => {
                            modal2.confirm(config);
                        }}
                    >
                        测试ConfigProvider是否有效，在这里因为class前缀被更改，按钮和弹窗都没有样式
                    </Button>
                </ConfigProvider>
                <br></br>
                <br></br>
                <Space>
                    <ReachableContext.Provider value="Light">
                        {modalContextHolder}
                        <Button
                            type="primary"
                            onClick={() => {
                                modal.confirm(config);
                            }}
                        >
                            Context Provider
                        </Button>
                        <UnreachableContext.Provider value="Bamboo" />
                    </ReachableContext.Provider>
                    <Button type="primary" onClick={() => setVisible(true)}>
                        打开基础modal
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            modal.confirm({
                                title: 'Confirm',
                                icon: null,
                                closable: true,
                                content: 'This is a Confirm Dialog.',
                            });
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            modal.confirm({
                                title: 'Warning',
                                content: 'This is a Warning Dialog.',
                                type: 'warning',
                            });
                        }}
                    >
                        Warning
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            modal.confirm({
                                title: 'Success',
                                content: 'This is a Success Dialog.',
                                type: 'success',
                            });
                        }}
                    >
                        Success
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            modal.confirm({title: 'Info', content: 'This is a Info Dialog.', type: 'info'});
                        }}
                    >
                        Info
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            modal.confirm({title: 'Error', content: 'This is a Error Dialog.', type: 'error'});
                        }}
                    >
                        Error
                    </Button>
                </Space>

                <Modal
                    title="我是标题我是标题"
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
            </div>
        </BrandProvider>
    );
};

export const Size = () => {
    const [visibleA, setVisibleA] = useState(false);
    const [visibleB, setVisibleB] = useState(false);
    const [visibleC, setVisibleC] = useState(false);
    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <Button type="primary" onClick={() => setVisibleA(true)}>
                    Size Small
                </Button>
                <Modal
                    size="small"
                    title="我是标题我是标题"
                    visible={visibleA}
                    onOk={() => setVisibleA(false)}
                    onCancel={() => setVisibleA(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
                <p></p>
                <Button type="primary" onClick={() => setVisibleB(true)}>
                    Size Default
                </Button>
                <Modal
                    size="default"
                    title="我是标题我是标题"
                    visible={visibleB}
                    onOk={() => setVisibleB(false)}
                    onCancel={() => setVisibleB(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
                <p />
                <Button type="primary" onClick={() => setVisibleC(true)}>
                    Size Large
                </Button>
                <Modal
                    size="large"
                    title="我是标题我是标题"
                    visible={visibleC}
                    onOk={() => setVisibleC(false)}
                    onCancel={() => setVisibleC(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
                <p></p>
            </BrandProvider>
        </div>
    );
};

export const Confirm = () => {
    function showConfirm() {
        Modal.confirm({
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showConfirmWithTitle() {
        Modal.confirm({
            title: '注意标题',
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showSuccessConfirm() {
        Modal.success({
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showSuccessConfirmWithTitle() {
        Modal.success({
            title: '成功标题',
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showErrorConfirm() {
        Modal.error({
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showErrorConfirmWithTitle() {
        Modal.error({
            title: '错误标题',
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showWarningConfirm() {
        Modal.warning({
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showWarningConfirmWithTitle() {
        Modal.warning({
            title: '警告标题',
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showInfoConfirm() {
        Modal.info({
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showInfoConfirmWithTitle() {
        Modal.info({
            title: '通知标题',
            closable: true,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    return (
        <BrandProvider>
            <p>没有title的样式</p>
            <Space direction="horizontal">
                <Button type="primary" onClick={() => showConfirm()}>
                    Confirm
                </Button>
                <Button type="primary" onClick={() => showSuccessConfirm()}>
                    Success
                </Button>
                <Button type="primary" onClick={() => showErrorConfirm()}>
                    Error
                </Button>
                <Button type="primary" onClick={() => showWarningConfirm()}>
                    Warning
                </Button>
                <Button type="primary" onClick={() => showInfoConfirm()}>
                    Info
                </Button>
            </Space>
            <br></br>
            <br />
            <p>有title的样式</p>
            <Space direction="horizontal">
                <Button type="primary" onClick={() => showConfirmWithTitle()}>
                    Confirm
                </Button>
                <Button type="primary" onClick={() => showSuccessConfirmWithTitle()}>
                    Success
                </Button>
                <Button type="primary" onClick={() => showErrorConfirmWithTitle()}>
                    Error
                </Button>
                <Button type="primary" onClick={() => showWarningConfirmWithTitle()}>
                    Warning
                </Button>
                <Button type="primary" onClick={() => showInfoConfirmWithTitle()}>
                    Info
                </Button>
            </Space>
        </BrandProvider>
    );
};

export const AutoHeight = () => {
    const [visibleA, setVisibleA] = useState(false);
    return (
        <div style={{padding: 30}}>
            <BrandProvider>
                <Button type="primary" onClick={() => setVisibleA(true)}>
                    Auto Height
                </Button>
                <Modal
                    autoHeight
                    title="我是标题我是标题"
                    visible={visibleA}
                    onOk={() => setVisibleA(false)}
                    onCancel={() => setVisibleA(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
            </BrandProvider>
        </div>
    );
};

export const Demo2 = () => {
    const {confirm} = Modal;
    function showConfirm() {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <IconExclamationCircleFilled />,
            content: 'Some descriptions',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showPromiseConfirm() {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <IconExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
        });
    }

    function showDeleteConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <IconExclamationCircleFilled />,
            content: 'Some descriptions',
            okType: 'danger',
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    function showPropsConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <IconExclamationCircleFilled />,
            content: 'Some descriptions',
            okType: 'danger',
            okButtonProps: {
                disabled: true,
            },
            onOk() {
                console.log('确定');
            },
            onCancel() {
                console.log('取消');
            },
        });
    }

    return (
        <Space>
            <Button onClick={showConfirm}>Confirm</Button>
            <Button onClick={showPromiseConfirm}>With promise</Button>
            <Button onClick={showDeleteConfirm} type="dashed">
                Delete
            </Button>
            <Button onClick={showPropsConfirm} type="dashed">
                With extra props
            </Button>
        </Space>
    );
};

export const confirmWithPromise = () => {
    return (
        <BrandProvider>
            <Demo2 />
        </BrandProvider>
    );
};

export const FullSizeDemo = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                全屏弹框
            </Button>
            <Modal fullScreen visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                在当前页面正中打开一个浮层，承载相应的操作。
            </Modal>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/modal-cn/">
                Antd Modal API
            </a>
        </>
    );
};

export const TestCase = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{padding: 30}}>
            <p>footer错位了</p>
            <BrandProvider brand="icloud">
                <Button type="primary" onClick={() => setVisible(true)}>
                    打开基础modal
                </Button>
                <Modal
                    confirmLoading
                    title="我是标题我是标题"
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                >
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                    何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
                    在当前页面正中打开一个浮层，承载相应的操作。
                </Modal>
                <br />
                <br />
            </BrandProvider>
        </div>
    );
};

export const TestCase2 = () => {
    const Context = React.createContext('light');
    const Demo = () => {
        const [modal, contextHolder] = Modal.useModal();
        return (
            <Context.Provider value="bamboo">
                <Button
                    onClick={() => {
                        modal.confirm({
                            content: (
                                <Context.Consumer>{name => <div className="test-hook">{name}</div>}</Context.Consumer>
                            ),
                        });
                    }}
                >
                    click me
                </Button>
                {contextHolder}
            </Context.Provider>
        );
    };
    return <Demo />;
};
