import React, {ImgHTMLAttributes} from 'react';
import {Empty as AntdEmpty} from 'antd';
import {EmptyProps as AntdEmptyProps} from 'antd/es/empty';
import classNames from 'classnames';
import ImageEmpty from './empty.svg';
import Image404 from './404.svg';
import ImageError from './error.svg';
import './index.less';

const clsPrefix = 'osui-empty';

export const IMAGE_EMPTY = (props: ImgHTMLAttributes<unknown>) => (<img src={ImageEmpty} {...props} />);
export const IMAGE_404 = (props: ImgHTMLAttributes<unknown>) => (<img src={Image404} {...props} />);
export const IMAGE_ERROR = (props: ImgHTMLAttributes<unknown>) => (<img src={ImageError} {...props} />);

export interface EmptyProps extends AntdEmptyProps {
    type?: 'empty' | 'error' | '404';
}
const Empty: React.FC<EmptyProps> = ({className, image, type, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    let Image = IMAGE_EMPTY;
    switch (type) {
        case 'empty':
            Image = IMAGE_EMPTY;
            break;
        case 'error':
            Image = IMAGE_ERROR;
            break;
        case '404':
            Image = IMAGE_404;
            break;
        default:
            Image = IMAGE_EMPTY;
    }
    const innerImage = image ?? <Image />;
    return <AntdEmpty className={innerClassName} {...props} image={innerImage} />;
};

export default Empty;
