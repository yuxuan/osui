/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
    SelectUsers,
    MulipleDisplayInPopupByHand,
    MultipleDisplayInPopup,
    Multiple,
    Size,
    Basic,
    TestCase,
    SelectAll,
} from './icloud-demo';

export default {
    title: '数据录入/Select 选择器',
};

export const BasicDemo = Basic;
export const SizeDemo = Size;
export const MultipleDemo = Multiple;
export const MultipleDisplayInPopupDemo = MultipleDisplayInPopup;
export const MulipleDisplayInPopupByHandDemo = MulipleDisplayInPopupByHand;
export const SelectUsersDemo = SelectUsers;
export const TestCaseDemo = TestCase;
export const SelectAllDemo = SelectAll;

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/">Antd Select API</a>
        </>
    );
};


