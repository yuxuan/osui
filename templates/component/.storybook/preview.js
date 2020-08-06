import {addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import {
    INITIAL_VIEWPORTS,
  } from '@storybook/addon-viewport';
import '@osui/theme/dist/theme.less';

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
