import * as React from 'react';
import BranchDropdown from '../src';
// eslint-disable-next-line @reskript/import-order

export default {
    title: 'OSUI-BranchDropDown',
};

export const Demo = () => {
    const list = [{
        title: 'Pull Request 中所有变更',
        desc: '李四 提交于3天前',
        id: '0',
    }, {
        title: 'fix: 修复button方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc329f',
    }, {
        title: 'fix: 修复branch方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc349f',
    }, {
        title: 'fix: 修复select方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc359f',
    }, {
        title: 'fix: 修复dropdown方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc369f',
    }, {
        title: 'fix: 修复tabs方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc339f',
    }];
    const [title, setTitle] = React.useState('');
    function handleMenuItemClick(item: any) {
        setTitle(item.title);
    }
    return (
        <div style={{padding: 30}}>
            <p>当前选中的选项是：<span style={{color: '#4C88FF'}}>{title}</span></p>
            <BranchDropdown
                list={list}
                handleMenuItemClick={handleMenuItemClick}
            />
        </div>);
};
