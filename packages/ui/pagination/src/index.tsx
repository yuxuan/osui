import {Pagination as AntdPagination} from 'antd';
import type {PaginationProps} from 'antd/es/Pagination';
import React, {ComponentProps, FC, useState} from 'react';
import {OutlinedDown, OutlinedUp} from 'acud-icon';
import './index.less';

type showTotal = ((total: number, range: [number, number]) => React.ReactNode) | boolean;
// eslint-disable-next-line complexity, max-len
const Pagination: FC<Omit<PaginationProps, 'showTotal'> & {showTotal?: showTotal}> = props => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const showTotal = props.showTotal ?? (total => `共${total}条`);
    const showQuickJumper = props.showQuickJumper ?? true;
    const showSizeChanger = !props.simple
        && props.showSizeChanger !== false
        && ((props?.total && props?.total > (props.totalBoundaryShowSizeChanger || 50))
        );

    const innerSizeChangerConfig = {
        suffixIcon: (
            dropdownVisible ? <OutlinedUp /> : <OutlinedDown />
        ),
        onDropdownVisibleChange: (visible: boolean) => {
            setDropdownVisible(visible);
        },
    };
    const showSizeChangerConfig = showSizeChanger && (
        typeof props.showSizeChanger === 'object' ? {
            ...props.showSizeChanger as any,
            ...innerSizeChangerConfig,
        } : innerSizeChangerConfig
    );
    return (
        // eslint-disable-next-line max-len
        <div className={`osui-pagination ${showQuickJumper ? (props.simple ? 'simple-showQuickJumper' : 'showQuickJumper') : ''} ${showSizeChanger ? 'showSizeChanger' : ''}`}>
            <AntdPagination
                {...props}
                showTotal={showTotal as Pick<ComponentProps<typeof AntdPagination>, 'showTotal'>['showTotal']}
                showQuickJumper={showQuickJumper}
                showSizeChanger={showSizeChanger ? showSizeChangerConfig : false}
            />
        </div>
    );
};

export default Pagination;

