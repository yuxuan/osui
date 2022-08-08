/* eslint-disable no-console */
/**
 * 全量build时，有时会因为node_modules被清理，导致一些build的依赖命令没有，build不成功
 * 尝试列出所有没有build成功的包，并尝试重新build
 */
const {difference} = require('lodash');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');

const all = [
    'affix',
    'alert',
    'anchor',
    'auto-complete',
    'avatar',
    'back-top',
    'badge',
    'brand-provider',
    'breadcrumb',
    'button',
    'calendar',
    'card',
    'carousel',
    'cascader',
    'checkbox',
    'col',
    'collapse',
    'comment',
    'config-provider',
    'date-picker',
    'descriptions',
    'divider',
    'drawer',
    'dropdown',
    'empty',
    'flex-centered',
    'form',
    'gap',
    'grid',
    'highlight-text',
    'image',
    'input',
    'input-number',
    'joyride',
    'layout',
    'list',
    'markdown',
    'mentions',
    'menu',
    'message',
    'modal',
    'notification',
    'page-header',
    'pagination',
    'popconfirm',
    'popover',
    'progress',
    'quick-edit',
    'radio',
    'rate',
    'result',
    'row',
    'select',
    'skeleton',
    'slider',
    'space',
    'spin',
    'statistic',
    'steps',
    'switch',
    'segmented',
    'table',
    'tabs',
    'tag',
    'text-overflow-tooltip',
    'time-picker',
    'timeline',
    'tooltip',
    'transfer',
    'tree',
    'tree-select',
    'typography',
    'ui',
    'upload',
    'version',
    'theme-provider',
    'osui-icons',
    'osui-icons-icloud',
];


async function main() {
    const packagesPath = path.join(__dirname, '..', 'packages');
    try {
        const {stdout} = await exec(`find ${packagesPath} -regex ".*/es/index.js" > ./built`);
        console.log(stdout);
    } catch (e) {
        console.error(e);
    }
    const fsContent = fs.readFileSync('./built', {encoding: 'utf-8'});
    const cleaned = fsContent.replace(new RegExp(packagesPath, 'g'), '');
    const name = cleaned.split('\n').map(line => line.split('/')[2]);
    const diff = difference(all, name);
    console.log(diff);
    if (diff.length) {
        diff.forEach(component => {
            const filePath = path.join(__dirname, '..', 'packages', 'ui', component);
            exec(`cd ${filePath} && pnpm build`).then(({stdout}) => {
                console.log(stdout);
            }).catch(e => console.error(e));
        });
    }
    exec('rm ./built');
}

main();
