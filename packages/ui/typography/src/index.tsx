import React from 'react';
import {Typography as AntdTypography} from 'antd';
import {TypographyProps as AntdTypographyProps} from 'antd/es/typography/Typography';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-typography';

// eslint-disable-next-line max-len
function TypographyComponent<C extends keyof JSX.IntrinsicElements>(
    {className, ...props}: AntdTypographyProps<C>,
    ref: any
) {
    const innerClassName = classNames(className, clsPrefix);
    // Antd Typography 暴露出来的类型把ref吞掉了
    // @ts-ignore
    return <AntdTypography ref={ref} className={innerClassName} {...props} />;
}

const Typography = React.forwardRef(TypographyComponent) as typeof AntdTypography;

Typography.Text = AntdTypography.Text;
Typography.Link = AntdTypography.Link;
Typography.Title = AntdTypography.Title;
Typography.Paragraph = AntdTypography.Paragraph;

export type {TypographyProps} from 'antd';
export default Typography;
