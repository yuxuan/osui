import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import { PaginationProps as AntdPaginationProps } from 'antd/es/pagination';
import classNames from 'classnames';
import {IconRightArrow, IconLeftArrow} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-pagination';

export type PaginationProps = AntdPaginationProps;

export const itemRender: AntdPaginationProps['itemRender'] = (current, type, originalElement) => {
    if (type === 'prev') {
        return <IconLeftArrow />;
    }
    if (type === 'next') {
        return <IconRightArrow />;
    }
    return originalElement;
};

const OSUIPagination: React.FC<PaginationProps> = props => {
    return (<AntdPagination {...props} itemRender={itemRender} className={classNames(props.className, clsPrefix)} />);
};

export default OSUIPagination;
