import React from 'react';
import {PageHeader as AntdPageHeader} from 'antd';
import {PageHeaderProps as AntdPageHeaderProps} from 'antd/es/page-header';
import classNames from 'classnames';
import {IconArrowLeftOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-page-header';

export interface PageHeaderProps extends AntdPageHeaderProps {
    noPadding?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({className, noPadding, backIcon, ...props}) => {
    const innerClassName = classNames(
        className,
        clsPrefix,
        {
            [`${clsPrefix}-no-padding`]: noPadding,
        }
    );
    const innerBackIcon = backIcon ?? <IconArrowLeftOutlined />;
    return <AntdPageHeader className={innerClassName} {...props} backIcon={innerBackIcon} />;
};

export default PageHeader;
