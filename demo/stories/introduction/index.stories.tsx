import React from 'react';

export default {
    title: 'OSUI介绍/欢迎使用',
};

export const Demo = () => {
    return (
        <>
            <h1>介绍</h1>
            <p>OSUI是基于开源组件封装的基础组件库，主要基于Antd，包含了所有Antd组件</p>
            <p>其中包含了两套主题，来满足两个不同产品风格的设计规范</p>
            <p>建议在OSUI的基础上再封装业务组件，而对于基础组件的调整，在OSUI内调整</p>
            <h1>使用方法</h1>
            <p>OSUI基于Antd，主要对Antd的样式进行了大量调整。对于Antd的api，OSUI只增加对Antd api的扩充，而不会破坏Antd的api</p>
            <p>在使用OSUI时，建议直接对着Antd的文档<a target="_blank" rel="noreferrer" href="https://ant.design/components/overview-cn/">这里</a>开发，参考示例和api等</p>
            <p>对于扩充的api，在OSUI组件demo文档有相关展示</p>
        </>
    );
};

