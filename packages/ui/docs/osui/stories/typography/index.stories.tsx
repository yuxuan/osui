import Typography from '@osui/typography';

export default {
    title: 'Typography',
    component: Typography,
};

export const Demo = () => {
    return (
        <>
            <p>PageTitle组件，是把Typography.Title level 3 去掉了bold</p>
            <Typography.PageTitle>页面title</Typography.PageTitle>
        </>
    );
};
