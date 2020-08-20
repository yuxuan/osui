import React from 'react';
import {Popover, Button, Input, Menu} from 'antd';
import {PopoverProps as AntdPooverProps} from 'antd/es/popover';
import classNames from 'classnames';
import {SearchOutlined} from '@ant-design/icons';
import './index.less';

const clsPrePopfix = 'osui-search-select-list-popover';
const clsPreBtnfix = 'osui-search-select-list-button';

/**
 * selectList的每个选项
 * todo, icon应该定义成什么类型，之后和btn样式一起修改，btn也需要icon
 */
export interface LiItemProps{
    label: string;
    value: string;
    icon?: any;
    handleClickItem: (item: any) => void;
}
const LiItem: React.FC<LiItemProps> = props => {
    function handleClickItem() {
        props.handleClickItem(props);
    }
    return (<li
        onClick={handleClickItem}
        key={props.value}
        value={props.value}
    >
        {/* {icon? icon : null}*/}
        <span>{props.label}</span>
    </li>
    );
};

/**
* popoverClassName:popover的className
* btnClassName:button的className
* placeholder:input搜索的placeholder内容
* btnName:按钮的名称
* menuList:导航列表，若不传的话就没有上面的导航列表
* selectlist:下拉选项列表
* defaultMenuSelect:默认选中的menu
* handleClickItem:点击menu回传的函数
* handleSearch:点击搜索回传的函数
* handleClickMenu:点击下拉选项回传的函数
*/
export interface SeacrhSelectListProps extends AntdPooverProps{
    popoverClassName?: string;
    btnClassName?: string;
    placeholder?: string;
    btnName?: string;
    menuList?: any[];
    selectlist?: any[];
    defaultMenuSelect?: string;
    handleClickItem: (item: any) => void;
    handleSearch: (val: any) => void;
    handleClickMenu?: (key: any) => void;
}
const SeacrhSelectList: React.FC<SeacrhSelectListProps> = props => {
    const {
        popoverClassName,
        btnClassName,
        btnName,
        menuList,
        selectlist,
        defaultMenuSelect,
        placeholder,
        handleClickItem,
        handleSearch,
        handleClickMenu,
    } = props;
    let menu = null;

    const [searchVal, setSearchVal] = React.useState();
    function handleChangeSearch(e: any) {
        setSearchVal(e.target.value);
    }
    function handleSearchFunc() {
        handleSearch(searchVal);
    }
    // menuList 存在，则赋默认menu值，若没有则第一个为默认
    if (menuList && menuList.length) {
        const selectSelectedKey = defaultMenuSelect ? [`${defaultMenuSelect}`] : [menuList[0].value];
        menu = (<Menu
            mode="horizontal"
            defaultSelectedKeys={selectSelectedKey}
            onClick={handleClickMenu}
        >
            {
                menuList.map((item: any) => <Menu.Item key={item.value}>{item.label}</Menu.Item>)
            }
        </Menu>);
    }
    const content = (<div className="select-list-wrap">
        <div className="input-box">
            <Input
                placeholder={placeholder || '请输入搜索的内容'}
                value={searchVal}
                onChange={handleChangeSearch}
                suffix={
                    <SearchOutlined onClick={handleSearchFunc} />
                }
            />
        </div>
        <ul className="list-box">
            {selectlist && selectlist.length && selectlist.map(item => (<LiItem
                handleClickItem={handleClickItem}
                label={item.label}
                value={item.value}
                key={item.value}
            />
            ))}
        </ul>
    </div>);
    {/* todo button OsuiSelect完成后，看基于select修改还是自己写btn */}
    return (
        <>
            <Popover
                overlayClassName={classNames(clsPrePopfix, popoverClassName)}
                content={content}
                title={menu}
                {...props}
            >
                <Button className={classNames(clsPreBtnfix, btnClassName)} type="primary">{btnName}</Button>
            </Popover>
        </>
    );
};

export default SeacrhSelectList;
