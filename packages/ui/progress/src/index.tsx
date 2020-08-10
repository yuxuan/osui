import * as React from 'react';
import { Progress as AntdProgress} from 'antd';
import { ProgressProps as AntdProgressProps} from 'antd/lib/Progress';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-progress';

export type ProgressProps = AntdProgressProps;

const Progress: React.FC<ProgressProps> = props => {
    return <AntdProgress className={classNames(clsPrefix, props.className)} {...props} />;
};

export default Progress;
