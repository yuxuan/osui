import {addParameters, addDecorator} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import '@osui/icloud-theme/dist/theme/vars.css';
import './global.css';
// import '@osui/theme/dist/theme/vars.css';

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

addDecorator(storyFn => <div style={{ padding: 30, background: '#fff' }}>{storyFn()}</div>);
