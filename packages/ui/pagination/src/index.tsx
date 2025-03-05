import {Pagination as AntdPagination} from 'antd';
import type {PaginationProps} from 'antd/es/Pagination';
import React, {FC, useState} from 'react';
import {IconDownOutlined, IconUpOutlined} from '@osui/icons';
import './index.less';

const icloudLocale = {'jump_to': '跳转至', 'page': '', 'jump_to_confirm': 'Go'};
// eslint-disable-next-line complexity
const Pagination: FC<PaginationProps> = props => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const showQuickJumper = (props.showQuickJumper === true || props.showQuickJumper === undefined)
        ? {goButton: true}
        : props.showQuickJumper;

    const showSizeChanger = !props.simple
        && props.showSizeChanger !== false
        && ((props?.total && props?.total > (props.totalBoundaryShowSizeChanger || 50))
        );

    const innerSizeChangerConfig = {
        suffixIcon: (
            dropdownVisible ? <IconUpOutlined /> : <IconDownOutlined />
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
        <div className={`osui-pagination ${showQuickJumper ? props.simple ? 'simple-showQuickJumper' : 'showQuickJumper' : ''} ${showSizeChanger ? 'showSizeChanger' : ''}`}>
            <AntdPagination
                {...props}
                locale={{...icloudLocale, ...props.locale}}
                showQuickJumper={showQuickJumper}
                showSizeChanger={showSizeChanger ? showSizeChangerConfig : false}
            />
        </div>
    );
};

export default Pagination;

