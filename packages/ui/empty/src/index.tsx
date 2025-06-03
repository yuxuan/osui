import React, {useContext} from 'react';
import {Empty as AntdEmpty, ConfigProvider} from 'antd';
import {EmptyProps as AntdEmptyProps} from 'antd/es/empty';
import classNames from 'classnames';
import ImageEmpty from './empty';
import ImageError from './error';
import ImageFilteredEmpty from './filteredEmpty';
import {useStyle} from './style';

const clsPrefix = 'osui-empty';

export interface EmptyProps extends AntdEmptyProps {
    type?: 'empty' | 'error' | '404' | 'filteredEmpty';
    size?: 'small' | 'large';
}
const Empty: React.FC<EmptyProps> = ({className, image, type, size, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('empty', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
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
        case 'filteredEmpty':
            Image = ImageFilteredEmpty;
            break;
        case 'error':
            Image = ImageError;
            break;
        default:
            Image = ImageEmpty;
    }
    const innerImage = image ?? <Image />;
    return wrapSSROsui(
        <AntdEmpty
            className={innerClassName}
            {...props}
            image={innerImage}
        />
    );
};

export default Empty;
