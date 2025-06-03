import React, {useState} from 'react';
import Button from '@osui/button';
import Modal from '../src';

export default {
    title: 'Modal',
};

export const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visibleBig, setBigVisible] = useState(false);
    return (
        <div style={{padding: 30}}>
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
                bodyBorder
                bodyStyle={{maxHeight: 200}}
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
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
                何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
            </Modal>
        </div>
    );
};
