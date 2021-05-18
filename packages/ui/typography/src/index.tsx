import React from 'react';
import {Typography as AntdTypography} from 'antd';
import {TypographyProps as AntdTypographyProps} from 'antd/lib/typography/Typography';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-typography';

interface TypographyInterface extends React.ForwardRefExoticComponent<AntdTypographyProps> {
    Text: typeof AntdTypography.Text;
    Link: typeof AntdTypography.Link;
    Title: typeof AntdTypography.Title;
    Paragraph: typeof AntdTypography.Paragraph;
    PageTitle: typeof PageTitle;
}

const Typography = React.forwardRef(
    ({className, ...props}, ref) => {
        const innerClassName = classNames(className, clsPrefix);
        // Antd Typography 暴露出来的类型把ref吞掉了
        // @ts-ignore
        return <AntdTypography ref={ref} className={innerClassName} {...props} />;
    }
) as TypographyInterface;

const PageTitle: typeof AntdTypography.Title = ({className, level, ...props}) => {
    const innerClassName = classNames(className, `${clsPrefix}-page-title`);
    return <AntdTypography.Title {...props} className={innerClassName} level={3} />;
};

Typography.Text = AntdTypography.Text;
Typography.Link = AntdTypography.Link;
Typography.Title = AntdTypography.Title;
Typography.Paragraph = AntdTypography.Paragraph;
Typography.PageTitle = PageTitle;

export default Typography;
