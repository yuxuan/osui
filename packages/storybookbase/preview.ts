import type {Preview} from '@storybook/react-vite';
import '../ui-theme/icloud-theme/es/vars.css';
import './global.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            codePanel: true,
        },
    },
};

export default preview;
