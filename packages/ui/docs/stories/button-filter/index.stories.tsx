import React from 'react';
import {Row} from 'antd';
import {IconGitFilter, IconBranchFilter} from '@osui/icons';
import ButtonFilter from '@osui/toggle-button';
// eslint-disable-next-line @reskript/import-order

export default {
    title: 'toggle-button',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter num={18}>筛选普通样式</ButtonFilter>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter hasArrow >筛选带箭头</ButtonFilter>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter hasShowNumber num={18}>筛选带数值</ButtonFilter>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter hasArrow hasSelectNumber num={22}>筛选带数值</ButtonFilter>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter hasArrow beforeIcon={<IconGitFilter className="before-icon" />}>筛选带icon</ButtonFilter>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ButtonFilter hasArrow beforeIcon={<IconBranchFilter className="before-icon" />}>筛选带icon</ButtonFilter>
            </Row>
        </div>);
};
