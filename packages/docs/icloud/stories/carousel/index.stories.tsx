/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Carousel from '@osui/carousel';

export default {
    title: '数据展示/Carousel 走马灯',
    component: Carousel,
};

export const Demo = () => {

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/carousel-cn/">Antd Carousel API</a>
        </>
    );
};

