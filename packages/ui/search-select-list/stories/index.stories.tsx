import React, {useState} from 'react';
import {Row} from 'antd';
import SearchSelectList from '../src';

export default {
    title: '业务/OSUI-Search-Select-List',
};

export const Demo = () => {
    const menuList = [{
        value: 'key1',
        label: '分支',
    }, {
        value: 'key2',
        label: '标签',
    }];
    const selectlist: any[] = [];
    for (let i = 0; i < 10; i++) {
        selectlist.push({
            value: i,
            label: `选项${i + 1}`,
            icon: '',
        });
    }
    const [selectVal, setSelectVal] = useState();
    const [searchVal, setSearchVal] = useState();
    const [menuVal, setMenuVal] = useState('');
    function handleClickItem(item: any): void {
        setSelectVal(item.label);
    }
    function handleSearch(val: any): void {
        setSearchVal(val);
    }
    function handleClickMenu(e: any): void {
        const val = menuList.filter(item => item.value === e.key)[0].label;
        setMenuVal(val);
    }
    return (
        <>
            <p>当前点击的menu是 <span style={{color: '#4C88FF'}}>{menuVal}</span></p>
            <p>当前搜索的是 <span style={{color: '#4C88FF'}}>{searchVal}</span></p>
            <p>当前点击了 <span style={{color: '#4C88FF'}}>{selectVal}</span></p>
            <Row style={{marginBottom: 30}}>
                <SearchSelectList
                    btnName={'存在menu'}
                    defaultMenuSelect={'key1'}
                    placement="topLeft"
                    menuList={menuList}
                    selectlist={selectlist}
                    handleClickItem={handleClickItem}
                    handleSearch={handleSearch}
                    handleClickMenu={handleClickMenu}
                />
            </Row>
            <Row>
                <SearchSelectList
                    popoverClassName={'myPopoverClassName'}
                    btnClassName={'myBtnClassName'}
                    btnName={'不存在menu'}
                    defaultMenuSelect={'key1'}
                    placeholder={'请输入'}
                    placement="topLeft"
                    selectlist={selectlist}
                    handleClickItem={handleClickItem}
                    handleSearch={handleSearch}
                />
            </Row>
        </>
    );
};
