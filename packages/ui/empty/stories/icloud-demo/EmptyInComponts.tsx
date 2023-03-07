import React from 'react';
import Table from '@osui/table';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';
import Popover from '@osui/popover';
import Modal from '@osui/modal';
import Button from '@osui/button';
import Empty from '../../src';

export default () => {
    const style = {
        width: 240,
    };
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            <BrandProvider brand="icloud">
                <h3>Select</h3>
                <Select style={style} />
                <p />
                <h3>Table</h3>
                <Table dataSource={[]} />
                <p />
                <h3>Popover</h3>
                <Popover content={<Empty size="small" />} title="卡片标题">
                    <span>Hover me</span>
                </Popover>
                <p />
                <h3>Modal</h3>
                <Button type="primary" onClick={() => setVisible(true)}>
                    Open Modal
                </Button>
                <Modal
                    title="上传数据"
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    onOk={() => setVisible(false)}
                >
                    <Empty />
                </Modal>
            </BrandProvider>
        </>
    );
};
