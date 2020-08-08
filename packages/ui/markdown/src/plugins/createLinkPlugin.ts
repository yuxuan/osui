/**
 * @file remark link 相对路径替换插件
 * @author zhangguoqing02
 */
import {dirname, join} from 'path';
import {Node} from 'unist';
import visit from 'unist-util-visit';
import {REGEXP_FILE_PATH, REGEXP_IS_FILE} from './common';

interface Params {
    name: string;
    ref: string;
    path?: string;
}

// 根据相对路径获取兼容 iCode 的绝对路径
const getICodePath = (relativePath: string, params: Params) => {
    const {name, ref, path = ''} = params;
    const targetPrefix = `/repos/${name}/blob/${ref}:`;

    // 如果 relativePath 是 / 开头表示的绝对路径，如：/src/index.js，
    // 则直接返回从仓库根目录开始的文件路径
    if (relativePath.startsWith('/')) {
        return targetPrefix + relativePath.slice(1);
    }

    const isFile = path && REGEXP_IS_FILE.test(window.location.pathname);
    const targetPath = join(
        isFile ? dirname(path) : path,
        relativePath
    );

    return targetPrefix + targetPath;
};

// 传入 Router 中的参数 params
const createLinkPlugin = (params: Params) => () => (tree: Node) => {
    visit(tree, 'link', node => {
        const url = node.url as string;
        if (REGEXP_FILE_PATH.test(url)) {
            // eslint-disable-next-line no-param-reassign
            node.url = getICodePath(url, params);
        }
    });
};

export default createLinkPlugin;
