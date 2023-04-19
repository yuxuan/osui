import {Pagination as AntdPagination} from 'antd';
import type {PaginationProps} from 'antd/es/Pagination';
import React, {FC} from 'react';
import './index.less';

const icloudLocale =  { 'jump_to': '跳转至', 'page': '', jump_to_confirm: 'Go' };
const Pagination: FC<PaginationProps> = (props) => {

    const showQuickJumper = (props.showQuickJumper === true || props.showQuickJumper === undefined)
        ? { goButton: true }
        : props.showQuickJumper;

    const showSizeChanger = !props.simple && (props.showSizeChanger !== false) && (props.showSizeChanger || props?.total > (props.totalBoundaryShowSizeChanger || 50));

    return (
        <div className={`osui-pagination ${showQuickJumper?props.simple?'simple-showQuickJumper':'showQuickJumper' :''} ${showSizeChanger?'showSizeChanger':''}`}>
            <AntdPagination {...props} locale={{ ...icloudLocale, ...props.locale }} showQuickJumper={showQuickJumper} />
        </div>
    )
};

export default Pagination;

