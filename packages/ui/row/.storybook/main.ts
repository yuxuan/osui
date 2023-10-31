import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';
import {join, dirname} from 'path';
import {createRequire} from 'module';
import {existsSync} from 'fs';

/**
 * Get's the file path to a module folder.
 * @param {string} moduleEntry
 * @param {string} fromFile
 */
const getModuleDir = (moduleEntry: string) => {
    const packageName = moduleEntry.includes('/')
        ? moduleEntry.startsWith('@')
            ? moduleEntry.split('/').slice(0, 2).join('/')
            : moduleEntry.split('/')[0]
        : moduleEntry;
    const require = createRequire(import.meta.url);
    const lookupPaths = require.resolve.paths(moduleEntry)?.map((p) => join(p, packageName)) || [];
    return lookupPaths.find((p) => existsSync(p));
};

console.log('123: ', getModuleDir('@osui/icloud-theme') + '/dist/antd-vars-patch.less');

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
    stories: [
        '../stories/**/*.stories.[tj]s{,x}',
        '../stories/**/*.stories.mdx',
    ],
    addons: [
        // {
        //     name: '@storybook/addon-docs',
        //     options: {
        //       jsxOptions: {},
        //       csfPluginOptions: null,
        //       mdxPluginOptions: {},
        //       transcludeMarkdown: true,
        //     },
        // },
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-interactions'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
            css: {
                preprocessorOptions: {
                    less: {
                        resources: [
                            getModuleDir('@osui/icloud-theme/dist/antd-vars-patch.less') + '/dist/antd-vars-patch.less',
                        ],
                        modifyVars: {
                            'ant-prefix': 'ant',
                        },
                        javascriptEnabled: true,
                        extractCSS: false,
                    }
                }
            }
        });
    },
};
export default config;


// import type {StorybookConfig} from '@storybook/react-vite';
// import {mergeConfig} from 'vite';
// import {join, dirname, resolve} from 'path';
// import {fileURLToPath} from 'url';
// import generateConfig from '../../../storybookbase/main';

// console.log(generateConfig);

// export default generateConfig;
