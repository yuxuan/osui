import React from 'react';
import Image from '../src';

export default {
    title: '数据展示/Image 图片',
    component: Image,
};

export const Demo = () => {
    function ImageDemo() {
        return (
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        );
    }

    return (<ImageDemo />);
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/image-cn/">Antd Image API</a>
        </>
    );
};

