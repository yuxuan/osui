import React from 'react';
import Divider from '@osui/divider';
import './index.css';

export default {
    title: '通用/超链接',
};

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
    `;

    return (
        <>
            <p><strong>FE说明：</strong>组件库中不包含A组件，文档只展示a的样式</p>
            <p><strong>FE说明：</strong>项目中建议使用<a href="https://github.com/ecomfe/react-omni-link">react-omni-link</a></p>
            <Divider>展示</Divider>
            <h3>普通样式</h3>
            <p><strong>FE说明：</strong>没有单独加组件封装，见css实现方式</p>
            <a href="www.baidu.com" className="text-link">www.baidu.com</a>
            <br />
            <br />
            <h3>加强样式</h3>
            <a href="www.baidu.com">www.baidu.com</a>
            <br />
            <br />
            <h3>disabled样式</h3>
            <a href="www.baidu.com" disabled>www.baidu.com</a>
            <Divider>普通样式css代码</Divider>
            <pre>
                {/* eslint-disable-next-line react/no-danger */}
                <code lang="css" dangerouslySetInnerHTML={{__html: cssCode}} />
            </pre>
        </>
    );
};
