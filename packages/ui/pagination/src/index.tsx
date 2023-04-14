import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import { Pagination as OsuiPagination, PaginationProps } from './OsuiPagination'

const Pagination: React.FC<PaginationProps & { uiType?: 'osui' | 'antd' }> = ({uiType,...props}) => {

    if (uiType === 'antd'){
        return (<AntdPagination {...props} />);
    }

    return (
        <OsuiPagination {...props} />
    );
};

if (process.env.NODE_ENV !== 'production') {
  Pagination.displayName = 'Pagination';
}

export default Pagination;
