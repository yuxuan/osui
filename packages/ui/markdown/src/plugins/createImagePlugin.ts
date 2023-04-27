/**
 * @file remark image 相对路径替换插件
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

const getICodeRawFilePath = (relativePath: string, params: Params) => {
    const {name, ref, path = ''} = params;
    const targetPath = (() => {
        if (relativePath.startsWith('/')) {
            return relativePath.slice(1);
        }
        else {
            const isFile = path && REGEXP_IS_FILE.test(window.location.pathname);

            // 如果 relativePath 不以 / 开头，说明它是相对路径
            return join(
                isFile ? dirname(path) : path,
                relativePath
            );
        }
    })();

    return `/rest/files/blob/get/fileraw?repo=${name}&commit=${ref}&path=${targetPath}`;
};

const createImagePlugin = (params: Params) => () => (tree: Node) => {
    visit(tree, 'image', (node: any) => {
        const url = node.url;
        if (REGEXP_FILE_PATH.test(url)) {
            // eslint-disable-next-line no-param-reassign
            node.url = getICodeRawFilePath(url, params);
        }
    });
};

export default createImagePlugin;
