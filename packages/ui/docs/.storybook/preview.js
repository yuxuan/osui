import {addDecorator} from '@storybook/react';
import '@osui/theme/dist/theme/vars.css';

addDecorator(storyFn => <div style={{padding: 30}}>{storyFn()}</div>);
