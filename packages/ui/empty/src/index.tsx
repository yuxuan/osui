import React from 'react';
import {Empty as AntdEmpty} from 'antd';
import {EmptyProps as AntdEmptyProps} from 'antd/lib/empty';
import classNames from 'classnames';
import ImageEmpty from './empty';
import ImageError from './error';
import './index.less';

const clsPrefix = 'osui-empty';

export interface EmptyProps extends AntdEmptyProps {
    type?: 'empty' | 'error' | '404';
    size?: 'small' | 'large';
}
const Empty: React.FC<EmptyProps> = ({className, image, type, size, ...props}) => {
    const innerClassName = classNames(
        className,
        clsPrefix,
        {[`${clsPrefix}-${size}`]: size}
    );
    let Image = ImageEmpty;
    switch (type) {
        case 'empty':
            Image = ImageEmpty;
            break;
        case 'error':
            Image = ImageError;
            break;
        default:
            Image = ImageEmpty;
    }
    const innerImage = image ?? <Image />;
    return <AntdEmpty className={innerClassName} {...props} image={innerImage} />;
};

export default Empty;
