import BrandProvider from '@osui/brand-provider';
import Divider from '../src';

export default {
    title: '布局/[new_dev]分割线 Divider',
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <Divider>使用场景</Divider>
            <p>实线</p>
            <p></p>
            <Divider />
            <p>虚线</p>
            <Divider dashed />
            <p></p>
            <Divider>对齐方式</Divider>
            <p>左对齐</p>
            <Divider orientation="left">Left Align</Divider>
            <p>右对齐</p>
            <Divider orientation="right">Right Align</Divider>
            <p>居中对齐</p>
            <Divider orientation="center">Center Align</Divider>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/divider-cn/">Antd Divider API</a>
        </>
    );
};

