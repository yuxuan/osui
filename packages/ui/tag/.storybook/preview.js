import {addDecorator, addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs';
import {
    INITIAL_VIEWPORTS,
  } from '@storybook/addon-viewport';
// import '@osui/theme/dist/theme/vars.css';
import '@osui/icloud-theme/dist/theme/vars.css';
import './global.css';

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS
        }
    },
});

addDecorator(storyFn => <div style={{padding: 30, background: '#fff'}}>{storyFn()}</div>);
