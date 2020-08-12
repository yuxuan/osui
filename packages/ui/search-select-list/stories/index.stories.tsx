import * as React from 'react';
import SearchSelectList from '../src';

export default {
    title: 'OSUI-Search-select-list',
};

export const Demo = () => {
    const menuList = ['分支', '标签'];
    const list = [{
        value: 1,
        label: '选项一',
    }, {
        value: 1,
        label: '选项二',
    }, {
        value: 1,
        label: '选项三',
    }];
    return (
        <>
            <SearchSelectList menuList={menuList} list={list} />
        </>
    );
};
