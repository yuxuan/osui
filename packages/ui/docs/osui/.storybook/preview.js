import {addDecorator} from '@storybook/react';
import '@osui/theme/dist/theme/vars.css';
import '@osui/theme/dist/antd4-styles-patch.css';

addDecorator(storyFn => <div style={{padding: 30}}>{storyFn()}</div>);
