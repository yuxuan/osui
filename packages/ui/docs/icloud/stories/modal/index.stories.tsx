import React, { useState } from 'react';
import Button from '@osui/button';
import {IconWarningCircleFill} from '@osui/icons';
import Modal from '@osui/modal';

export default {
    title: '验收中/Modal 对话框',
};

export const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visibleBig, setBigVisible] = useState(false);
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
            <p></p>
            <Button type="primary" onClick={() => setBigVisible(true)}>
                打开大数据modal
            </Button>
            <Modal
                noBorder
                bodyHeight={200}
                title="我是标题我是标题"
                visible={visibleBig}
                onOk={() => setBigVisible(false)}
                onCancel={() => setBigVisible(false)}
            >
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
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
            size: 'small',
            icon: <IconWarningCircleFill />,
            content: '选中的安全组绑定了其他实例，安全组删除后无法恢复！请确定是否要删除安全组"test"',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <>
            <Button type="primary" onClick={() => showConfirm()}>
                Confirm
            </Button>
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
