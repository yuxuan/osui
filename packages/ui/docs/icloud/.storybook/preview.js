import {addDecorator} from '@storybook/react';
import '@osui/icloud-theme/dist/theme/vars.css';
import '@osui/icloud-theme/dist/antd4-styles-patch.css';

addDecorator(storyFn => <div style={{padding: 30}}>{storyFn()}</div>);
