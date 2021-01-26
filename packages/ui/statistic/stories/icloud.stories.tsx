import React from 'react';
import Row from '@osui/row';
import Col from '@osui/Col';
import Button from '@osui/button';
import Statistic from '../src';

export default {
    title: '未实现/Statistic 统计数值',
    component: Statistic,
};

export const Demo = () => {

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                </Button>
            </Col>
            <Col span={12}>
                <Statistic title="Active Users" value={112893} loading />
            </Col>
        </Row>
    );
};
