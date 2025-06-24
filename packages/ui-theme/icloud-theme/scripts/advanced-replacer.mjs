import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 动态导入并解析变量
 */
async function loadVariables() {
    try {
        // 导入编译后的变量文件
        const variablesPath = path.join(__dirname, '../lib/index.js');
        if (!fs.existsSync(variablesPath)) {
            throw new Error(`变量文件不存在: ${variablesPath}`);
        }

        const variables = await import(variablesPath);
        return variables.acud || variables.default?.acud;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('加载变量失败:', error.message);
        return {};
    }
}

/**
 * 递归获取所有文件
 */
function getAllFiles(dir, extensions = ['.js', '.mjs']) {
    const files = [];

    if (!fs.existsSync(dir)) {
        return files;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * 获取不带引号的变量值
 */
function getUnquotedValue(value) {
    if (typeof value === 'string') {
        // 如果值本身就有引号，去掉引号
        if ((value.startsWith('"') && value.endsWith('"'))
            || (value.startsWith('\'') && value.endsWith('\''))) {
            return value.slice(1, -1);
        }
    }
    return value;
}

/**
 * 替换文件中的变量
 */
function replaceVariablesInContent(content, variables) {
    let replacedContent = content;
    let replacedCount = 0;

    // 创建一个反向映射，从变量值到变量名
    const valueToKey = {};
    for (const [key, value] of Object.entries(variables)) {
        const cleanValue = getUnquotedValue(value);
        if (typeof cleanValue === 'string' && cleanValue.startsWith('#')) {
            valueToKey[cleanValue.toLowerCase()] = key;
        }
    }

    // 替换模式
    const replacementPatterns = [
        // 替换十六进制颜色值
        {
            pattern: /(["'])#([0-9a-fA-F]{3,8})\1/g,
            replacer: (match, quote, hex) => {
                const fullHex = `#${hex}`.toLowerCase();
                const varKey = valueToKey[fullHex];
                if (varKey && variables[varKey]) {
                    replacedCount++;
                    const cleanValue = getUnquotedValue(variables[varKey]);
                    return `${quote}${cleanValue}${quote}`;
                }
                return match;
            },
        },
        // 替换var()函数调用
        // {
        //     pattern: /var\((--[^)]+)\)/g,
        //     replacer: (match, varName) => {
        //         if (variables[varName]) {
        //             replacedCount++;
        //             const cleanValue = getUnquotedValue(variables[varName]);
        //             return `"${cleanValue}"`;
        //         }
        //         return match;
        //     },
        // },
        // 替换colors[...]调用
        {
            pattern: /colors\[(['"`])([^'"`]+)\1\]/g,
            replacer: (match, quote, varName) => {
                if (variables[varName]) {
                    replacedCount++;
                    const cleanValue = getUnquotedValue(variables[varName]);
                    return `"${cleanValue}"`;
                }
                return match;
            },
        },
    ];

    // 执行所有替换
    for (const {pattern, replacer} of replacementPatterns) {
        replacedContent = replacedContent.replace(pattern, replacer);
    }

    // 清理可能产生的双重引号
    // replacedContent = cleanDoubleQuotes(replacedContent);

    return {content: replacedContent, replacedCount};
}

/**
 * 处理单个文件
 */
function processFile(filePath, variables) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const {content: newContent, replacedCount} = replaceVariablesInContent(content, variables);

        if (replacedCount > 0) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            // eslint-disable-next-line no-console
            console.log(`✅ ${path.relative(process.cwd(), filePath)}: 替换了 ${replacedCount} 个变量`);
        }

        return replacedCount;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`❌ 处理文件失败 ${filePath}:`, error.message);
        return 0;
    }
}

/**
 * 主函数
 */
async function main() {
    // eslint-disable-next-line no-console
    console.log('🚀 开始高级变量替换...');

    // 加载变量
    const variables = await loadVariables();
    if (!variables || Object.keys(variables).length === 0) {
        // eslint-disable-next-line no-console
        console.error('❌ 未能加载到变量数据');
        process.exit(1);
    }

    // eslint-disable-next-line no-console
    console.log(`📋 加载了 ${Object.keys(variables).length} 个变量`);

    // 处理目标目录
    const targetDirs = [
        path.join(__dirname, '../lib'),
        path.join(__dirname, '../es'),
    ];

    let totalReplacements = 0;

    for (const targetDir of targetDirs) {
        if (!fs.existsSync(targetDir)) {
            // eslint-disable-next-line no-console
            console.log(`⚠️ 目录不存在，跳过: ${targetDir}`);
            continue;
        }

        // eslint-disable-next-line no-console
        console.log(`\n📁 处理目录: ${path.relative(process.cwd(), targetDir)}`);

        const files = getAllFiles(targetDir);
        // eslint-disable-next-line no-console
        console.log(`找到 ${files.length} 个文件`);

        for (const file of files) {
            totalReplacements += processFile(file, variables);
        }
    }

    // eslint-disable-next-line no-console
    console.log(`\n🎉 完成！总共替换了 ${totalReplacements} 个变量引用`);
}

// 运行主函数
main().catch(error => {
    // eslint-disable-next-line no-console
    console.error('❌ 执行失败:', error);
    process.exit(1);
});
