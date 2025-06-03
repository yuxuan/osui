/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Pagination from '../src';

export default {
    title: '导航/Pagination 分页',
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
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    function onChange(page, pageSize) {
        console.log('page, pageSize', page, pageSize);
    }

    function onShowSizeChange(current, size) {
        console.log('current, size: ', current, size);
    }

    return (
        <div style={{padding: 30}}>
            <Blockquote>
                <p>和交互规范有所不同，交互规范想要实现的是：showLessItem分页选中中间的状态 + 正常时在开头和结尾的状态，由于分页item个数是antd内部实现的，目前先不支持，保留与antd一致</p>
                <p>SizeChanger的实现也不一致，交互需要在头部，而antd内置为在QuickJumper旁边，且不能调整位置</p>
            </Blockquote>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <BrandProvider brand="icloud" theme={theme}>
                <p>默认状态</p>
                <Pagination
                    showQuickJumper
                    defaultCurrent={2}
                    total={70}
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                    // eslint-disable-next-line arrow-parens
                    showTotal={(total) => `Total ${total} items`}
                />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={80} onChange={onChange} />
                <br />
                <Pagination showQuickJumper defaultCurrent={6} total={100} onChange={onChange} />
                <br />
                <Pagination showQuickJumper defaultCurrent={10} total={100} onChange={onChange} />
                <br />
                <p>对于位置比较小的部分，可以使用showLessItems</p>
                <Pagination showQuickJumper defaultCurrent={6} total={100} onChange={onChange} showLessItems />
                <p>disabled</p>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
                <br />
                <p>size为small时</p>
                <Pagination size="small" showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <p>类型为simple时</p>
                <Pagination showQuickJumper defaultCurrent={2} total={70} onChange={onChange} simple />
                <br />
                <p>隐藏sizeChange和quickJump</p>
                <Pagination
                    showQuickJumper={false}
                    defaultCurrent={2}
                    total={70}
                    onChange={onChange}
                    showSizeChanger={false}
                />
                <br />
                <p>只显示quickJump</p>
                <Pagination onChange={onChange} defaultCurrent={4} total={40} />
                <br />
                <p>只显示sizeChange</p>
                <Pagination onChange={onChange} defaultCurrent={4} total={51} showQuickJumper={false} />
                <br />
            </BrandProvider>
        </div>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/pagination-cn/">Antd Pagination API</a>
        </>
    );
};

