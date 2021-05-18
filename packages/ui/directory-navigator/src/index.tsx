import React from 'react';
import classNames from 'classnames';
import {Tree as AntdTree} from 'antd';
import {TreeProps as AntdTreeProps} from 'antd/lib/tree';
import './index.less';

const clsPrefix = 'osui-directory-navigator';

export type DirectoryNavigatorProps = AntdTreeProps;

const DirectoryNavigator: React.FC<DirectoryNavigatorProps> = ({className, ...props}) => {
    return (
        <div className={classNames(`${clsPrefix}-container`, className)}>
            <AntdTree.DirectoryTree
                className={classNames(`${clsPrefix}-tree`)}
                {...props}
            />
        </div>
    );
};


export default DirectoryNavigator;
