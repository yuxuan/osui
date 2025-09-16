import glob from 'glob';
import genConfig from '../../../storybookbase/main';
import {join, dirname} from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
// 列出所有上层目录的stories， 除了ui这个目录，不包含node_modules目录，拼接成相对当前目录上层目录的stories
const stories = glob.sync('../**/stories/*.stories.[tj]s{,x}', {
    ignore: ['../ui/stories/*.stories.[tj]s{,x}', '../**/node_modules/**'],
}).map((story) => story.replace('../', '../../'));
console.log(stories);
const config = {
    ...genConfig(getAbsolutePath, process.cwd()),
    stories: [
        // 列出所有上层目录的stories
        '../../alert/stories/*.stories.[tj]s{,x}',
        ...stories,
    ],
};
export default config;
