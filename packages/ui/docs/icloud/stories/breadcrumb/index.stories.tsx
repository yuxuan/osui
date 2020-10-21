import Breadcrumb from '@osui/breadcrumb';

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
};

export const Demo = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
};
