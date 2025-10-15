/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import Pagination from '../src';

export default {
    title: '导航/[new_dev]分页 Pagination',
};

export const Demo = () => {
    function onChange(page, pageSize) {
        console.log('page, pageSize', page, pageSize);
    }

    function onShowSizeChange(current, size) {
        console.log('current, size: ', current, size);
    }

    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <Divider>基础分页</Divider>
                <p>默认状态</p>
                <Pagination
                    defaultCurrent={1}
                    total={70}
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                />
                <p />
                <p>disabled</p>
                <Pagination
                    disabled
                    defaultCurrent={1}
                    total={70}
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                />
                <p />
                <p>不显示条数、跳转、页面条数选择</p>
                <Pagination
                    showQuickJumper={false}
                    showSizeChanger={false}
                    showTotal={false}
                    total={70}
                    defaultCurrent={1}
                />
                <p />
                <Divider>基础分页页面较多</Divider>
                <Pagination showQuickJumper defaultCurrent={2} total={80} onChange={onChange} />
                <p>disabled</p>
                <Pagination disabled showQuickJumper defaultCurrent={1} total={100} onChange={onChange} />
                <Divider>页码跳转的分页</Divider>
                <p />
                <Pagination
                    showQuickJumper
                    showSizeChanger={false}
                    defaultCurrent={10}
                    total={100}
                    onChange={onChange}
                />
                <Divider>简洁分页</Divider>
                <p>类型为simple时</p>
                <Pagination showQuickJumper={false} defaultCurrent={1} total={70} onChange={onChange} simple />
                <p />
                <p>disabled</p>
                <Pagination disabled showQuickJumper={false} defaultCurrent={1} total={70} onChange={onChange} simple />
                <p />
                <Divider>组件大小</Divider>
                <p>正常大小</p>
                <Pagination defaultCurrent={2} total={500} onChange={onChange} />
                <p />
                <p>size为small时</p>
                <Pagination size="small" showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <p />
                <Divider>其他</Divider>
                <p />
                <p>对于位置比较小的部分，可以使用showLessItems</p>
                <Pagination showQuickJumper defaultCurrent={6} total={100} onChange={onChange} showLessItems />
                <p />
                <p />
                <p>隐藏sizeChange和quickJump</p>
                <Pagination
                    showQuickJumper={false}
                    defaultCurrent={2}
                    total={70}
                    onChange={onChange}
                    showSizeChanger={false}
                />
                <p />
                <p>只显示quickJump</p>
                <Pagination onChange={onChange} showQuickJumper defaultCurrent={4} total={40} />
                <p />
                <p>只显示sizeChange</p>
                <Pagination onChange={onChange} defaultCurrent={4} total={51} showQuickJumper={false} />
                <p />
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

