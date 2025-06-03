import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import './index.css';

export default {
    title: '通用/超链接',
};

const Blockquote = ({children}) => (
    <blockquote style={{
        background: 'var(--color-brand-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--color-brand-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export const Demo = () => {
    const cssCode = `
    .text-link {
        color: var(--theme-text-color);
    }

    .text-link:hover {
        color: var(--link-hover-color);
    }

    .text-link:active {
        color: var(--link-active-color);
    }

    .text-link:disabled {
        color: var(--theme-disabled-color);
    }
    // 加强样式disabled颜色
    .text-link-strong:disabled {
        color: var(--color-brand-3);
    }
    `;

    return (
        <BrandProvider>
            <Blockquote>
                组件库中不包含A组件，文档只展示a的样式
            </Blockquote>
            <Blockquote>
                项目中建议使用<a href="https://github.com/ecomfe/react-omni-link">react-omni-link</a>
            </Blockquote>
            <Divider>展示</Divider>
            <Blockquote>
                没有单独加组件封装，见css实现方式
            </Blockquote>
            <h3>普通样式</h3>
            <a href="www.baidu.com" className="text-link">www.baidu.com</a>
            <h3>普通样式disabled</h3>
            <a href="www.baidu.com" disabled>www.baidu.com</a>
            <br />
            <br />
            <h3>加强样式</h3>
            <a href="www.baidu.com">www.baidu.com</a>
            <h3>加强样式disabled</h3>
            <a href="www.baidu.com" disabled style={{color: 'var(--color-brand-3)'}}>www.baidu.com</a>
            <Divider>普通样式css代码</Divider>
            <pre>
                {/* eslint-disable-next-line react/no-danger */}
                <code lang="css" dangerouslySetInnerHTML={{__html: cssCode}} />
            </pre>
        </BrandProvider>
    );
};
