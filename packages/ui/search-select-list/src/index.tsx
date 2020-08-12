import * as React from 'react';
import {Popover, Button, Input, Menu} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import './index.less';

// const clsPrefix = 'osui-select-search-list';


export interface SeacrhSelectListProps {
    menuList?: any[];
    list?: any[];
}


const SeacrhSelectList: React.FC<SeacrhSelectListProps> = props => {
    const {menuList, list} = props;
    // eslint-disable-next-line
    console.log(menuList, list);

    const menu = menuList && (<Menu mode="horizontal">
        {
            menuList.map((item: any) => <Menu.Item key={item.index}>{item} </Menu.Item>)
        }
    </Menu>);
    const content = (<div className="select-list-wrap">
        <Input
            style={{width: 200}}
            placeholder="请输入搜索关键字"
            className="input"
            suffix={
                <SearchOutlined />
            }
        />
        <ul className="list">
            {list && list.map(item => <li key={item.value} value={item.value}>{item.label}</li>)}
        </ul>
    </div>);
    return (
        <>
            <Popover
                placement="topLeft"
                overlayClassName={'osui-select-search-list-popover'}
                content={content}
                title={menu}
                visible
            >
                <Button type="primary">Hover me</Button>
            </Popover>
        </>
    );
};

export default SeacrhSelectList;

