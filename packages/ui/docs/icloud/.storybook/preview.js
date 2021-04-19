import { addDecorator } from '@storybook/react';
import '@osui/icloud-theme/dist/theme/vars.css';
import '@osui/icloud-theme/dist/antd4-styles-patch.css';

addDecorator(storyFn => <div style={{ padding: 30 }}>{storyFn()}</div>);

export const parameters = {
    options: {
        storySort: {
            order: ['OSUI介绍', '通用', '数据录入', '导航', '数据展示', '反馈', '其它', '布局', '场景', 'FE'],
        },
    },
};