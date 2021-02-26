import React from 'react';
import Typography from '@osui/typography';

export default {
    title: '布局/Typography 排版',
    component: Typography,
};

export const Demo = () => {
    const { Title } = Typography;

    return (
        <>
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>
            <Title level={4}>h4. Ant Design</Title>
            <Title level={5}>h5. Ant Design</Title>
        </>
    );
};
