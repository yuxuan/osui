import React, { useState } from 'react';
import Button from '@osui/button';
import Space from '@osui/space';
import {IconExclamationCircleFilled} from '@osui/icons';
import Modal from '@osui/modal';

export default {
    title: '反馈/Modal 对话框',
};

export const Demo = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{ padding: 30 }}>
            <Button type="primary" onClick={() => setVisible(true)}>
                打开基础modal
            </Button>
            <Modal
                title="我是标题我是标题"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
            </Modal>
        </div>);
};

export const Size = () => {
    const [visibleA, setVisibleA] = useState(false);
    const [visibleB, setVisibleB] = useState(false);
    const [visibleC, setVisibleC] = useState(false);
    return (
        <div style={{ padding: 30 }}>
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
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
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
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
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
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
            </Modal>
            <p></p>
        </div>);
};


export const Confirm = () => {

    function showConfirm() {
        Modal.confirm({
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

    return (
        <>
            <Space direction="horizontal">
                <Button type="primary" onClick={() => showConfirm()}>Confirm</Button>
                <Button type="primary" onClick={() => showSuccessConfirm()}>Success</Button>
                <Button type="primary" onClick={() => showErrorConfirm()}>Error</Button>
                <Button type="primary" onClick={() => showWarningConfirm()}>Warning</Button>
                <Button type="primary" onClick={() => showInfoConfirm()}>Info</Button>
            </Space>
        </>
    );
};

export const AutoHeight = () => {
    const [visibleA, setVisibleA] = useState(false);
    return (
        <div style={{ padding: 30 }}>
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
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
            </Modal>
        </div>
    );
};

export const confirmWithPromise = () => {

    const { confirm } = Modal;

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
