// const withCSS = require('./build-tools/next-css');
// const withLess = require('./build-tools/next-less');
// const withTM = require('next-transpile-modules')([
//   "@osui/affix",
//   "@osui/alert",
//   "@osui/anchor",
//   "@osui/auto-complete",
//   "@osui/avatar",
//   "@osui/back-top",
//   "@osui/badge",
//   "@osui/branch-dropdown",
//   "@osui/brand-provider",
//   "@osui/breadcrumb",
//   "@osui/button",
//   "@osui/calendar",
//   "@osui/card",
//   "@osui/carousel",
//   "@osui/cascader",
//   "@osui/checkbox",
//   "@osui/col",
//   "@osui/collapse",
//   "@osui/comment",
//   "@osui/config-provider",
//   "@osui/date-picker",
//   "@osui/descriptions",
//   "@osui/directory-navigator",
//   "@osui/divider",
//   "@osui/drawer",
//   "@osui/dropdown",
//   "@osui/empty",
//   "@osui/flex-centered",
//   "@osui/form",
//   "@osui/gap",
//   "@osui/grid",
//   "@osui/highlight-text",
//   "@osui/image",
//   "@osui/input",
//   "@osui/input-number",
//   "@osui/joyride",
//   "@osui/layout",
//   "@osui/list",
//   "@osui/markdown",
//   "@osui/mentions",
//   "@osui/menu",
//   "@osui/menu-dropdown",
//   "@osui/message",
//   "@osui/modal",
//   "@osui/notification",
//   "@osui/page-header",
//   "@osui/pagination",
//   "@osui/popconfirm",
//   "@osui/popover",
//   "@osui/progress",
//   "@osui/radio",
//   "@osui/rate",
//   "@osui/result",
//   "@osui/row",
//   "@osui/search-select-list",
//   "@osui/select",
//   "@osui/skeleton",
//   "@osui/slider",
//   "@osui/space",
//   "@osui/spin",
//   "@osui/statistic",
//   "@osui/steps",
//   "@osui/switch",
//   "@osui/table",
//   "@osui/tabs",
//   "@osui/tag",
//   "@osui/text-overflow-tooltip",
//   "@osui/time-picker",
//   "@osui/timeline",
//   "@osui/toggle-button",
//   "@osui/tooltip",
//   "@osui/transfer",
//   "@osui/tree",
//   "@osui/tree-select",
//   "@osui/typography",
//   "@osui/upload",
//   "@osui/version",
//   "@osui/ui",
//   "antd",
// ]);
// const hasha = require('hasha');
// const LessPluginFunctions = require('less-plugin-functions');

// const config = {
//   cssModules: {
//     getLocalIdent: ({resourcePath}, localIdentName, localName) => {
//       if (/\.global\.(css|less)$/.test(resourcePath) || /node_modules/.test(resourcePath)) {
//         return localName;
//       }
//       return `${localName}__${hasha(resourcePath + localName, {algorithm: 'md5'}).slice(0, 8)}`;
//     }
//   },
//   lessLoaderOptions: {
//     lessOptions: {
//       javascriptEnabled: true,
//       modifyVars: {
//         'ant-prefix': 'ant',
//       },
//       plugins: [
//         new LessPluginFunctions({alwaysOverride: true}),
//       ],
//     },
//   },
//   future: {
//     webpack5: true,
//   },
//   webpack(config, { isServer }) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//             loader: '@ecomfe/svg-mixed-loader',
//         },
//       ]
//     });

//     return config;
//   },
// };

// module.exports = withTM(withCSS(withLess(config)));
export default {};
