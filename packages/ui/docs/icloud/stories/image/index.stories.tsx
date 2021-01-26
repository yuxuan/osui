import React from 'react';
import Image from '@osui/image';

export default {
    title: '未实现/Image 图片',
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
