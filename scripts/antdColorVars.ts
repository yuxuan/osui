// 引入全部antd less变量，替换为css vars
import fs from 'fs';
import path from 'path';
import less from 'less';
import css from 'css';
import lessToJs from 'less-vars-to-js';
import {isColor} from './isColor';

const NODE_MODULES_PATH = path.resolve('..', 'node_modules');

const antdDefaultLessVarsPath = path.resolve(NODE_MODULES_PATH, 'antd/lib/style/themes/default.less');

// 这个是为了compile less之后能够把真正的值取出来
const renderContent = (lessContent: string = '', cssVarsContent: string = '') => `
${lessContent}
${cssVarsContent}
`;

// 匹配 @foo-bar: xxx;
const lessVarsRegExp = /@([a-z0-9-]+):(.*);/;

function buildCssVariablesContent(rawContent: string) {
    let cssRefLessContent = ':root {\n';
    const found = rawContent.match(new RegExp(lessVarsRegExp, 'g'));
    if (!found) {
        return;
    }
    found.forEach(matched => {
        const matches = new RegExp(lessVarsRegExp).exec(matched);
        if (!matches) {
            return;
        }
        const varName = matches[1];
        cssRefLessContent += `--${varName}: @${varName};\n`;
    });
    cssRefLessContent += '}\n';
    const combinedLess = renderContent(rawContent, cssRefLessContent);
    return combinedLess;
}

type DictStr = Record<string, string>;

function filterColorVars(csscontent: string) {
    const cssVars: DictStr = {};
    const ast = css.parse(csscontent);
    if (!ast) {
        return;
    }
    const rule: css.Rule = ast.stylesheet!.rules.find(({type}) => type === 'rule')!;
    if (!rule) {
        return;
    }
    rule.declarations!.forEach(({property, value}: css.Declaration) => {
        if (property && value && isColor(value)) {
            cssVars[property] = value;
        }
    });
    return cssVars;
}

const isLessVarReference = (value: string) => /^@[a-z0-9-]+[^\s]$/.test(value);

function writeFileSyncProduceColorLessCssVars(path: string, cssVars: DictStr) {
    let fileContent = '';
    Object.entries(cssVars).forEach(([key, value]) => {
        if (isLessVarReference(value)) {
            fileContent += `@${key.replace('--', '')}: var(${value});\n`;
        }
        else {
            fileContent += `@${key.replace('--', '')}: var(${key});\n`;
        }
    });
    fs.writeFileSync(path, fileContent);
}

function writeFileSyncProduceColorCssVarsValue(path: string, cssVars: DictStr) {
    let fileContent = ':root { \n';
    Object.entries(cssVars).forEach(([key, value]) => {
        fileContent += `    ${key}: ${value};\n`;
    });
    fileContent += '}';
    fs.writeFileSync(path, fileContent);
}

function loadLessVars(path: string) {
    const content = fs.readFileSync(path, 'utf-8');
    const lessVars = lessToJs(content);
    return lessVars;
}

// --alert-error-bg-color: var(--error-color);
function cssVarsKeepLessReference(input: DictStr): DictStr {
    const result: DictStr = {};
    Object.entries(input).forEach(([key, value]) => {
        if (isLessVarReference(value)) {
            result[`--${key.replace('@', '')}`] = `var(--${value.replace('@', '')})`;
        }
    });
    return result;
}

const lessVarObj = loadLessVars(antdDefaultLessVarsPath);
const cssRefs = cssVarsKeepLessReference(lessVarObj);

// 将antd的less变量替换为css vars
function transformAntdLessToCss(
    target: string,
    options: {inputLessVarsPath: string, outputCssValuesPath: string, withReference?: boolean}
) {
    const antLessVarsPath = target;
    // less import dependency
    const antdThemesPath = path.resolve(NODE_MODULES_PATH, 'antd/lib/style/themes');
    const content = fs.readFileSync(antLessVarsPath, 'utf-8');
    const cssRefLessContent = buildCssVariablesContent(content);

    const combinedLess = renderContent(content, cssRefLessContent);
    // 编译获取less的真正色值
    less.render(
        combinedLess,
        {
            javascriptEnabled: true,
            paths: [antdThemesPath],

        }
    ).then(output => {
        // 选出颜色的部分
        const cssVars = filterColorVars(output.css);
        if (!cssVars) {
            console.error('Parse Error');
            return;
        }

        const {inputLessVarsPath, outputCssValuesPath, withReference} = options;
        if (withReference) {
            Object.keys(cssVars).forEach(key => {
                if (cssRefs[key]) {
                    cssVars[key] = cssRefs[key];
                    // console.log(`'${key}': '${cssVars[key]}',`);
                }
            });
        }
        // 将less映射成为css vars
        writeFileSyncProduceColorLessCssVars(inputLessVarsPath, cssVars);
        // 将css vars的色值写入文件
        writeFileSyncProduceColorCssVarsValue(outputCssValuesPath, cssVars);
    });
}

// 这样就可以获得原来antd less变量对应的颜色
transformAntdLessToCss(
    antdDefaultLessVarsPath,
    {
        inputLessVarsPath: './output/full-less-vars.less',
        outputCssValuesPath: './output/full-css-vars.css',
        withReference: true,
    }
);

const antdDarkLessVarsPath = path.resolve(NODE_MODULES_PATH, 'antd/lib/style/themes/dark.less');
transformAntdLessToCss(
    antdDarkLessVarsPath,
    {inputLessVarsPath: './output/dark-less-vars.less', outputCssValuesPath: './output/dark-css-vars.css'}
);
