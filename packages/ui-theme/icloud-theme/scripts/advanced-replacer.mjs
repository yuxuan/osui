/**
 * 高级变量替换工具
 *
 * 该脚本用于在指定的文件中替换变量引用，支持以下替换模式：
 * - 十六进制颜色值（如 "#ffffff"）
 * - CSS 变量函数调用（如 var(--primary-color)）
 * - colors[] 数组访问（如 colors['primary']）
 *
 * 用法：
 *   node advanced-replacer.mjs <文件路径1> [文件路径2] [文件路径3] ...
 *
 * 示例：
 *   node advanced-replacer.mjs ../lib/index.js
 *   node advanced-replacer.mjs ../lib/index.js ../es/index.js
 *   node advanced-replacer.mjs ../lib/*.js
 *
 * 参数：
 *   文件路径 - 需要处理的文件路径，支持相对路径和绝对路径
 *
 * 注意事项：
 *   - 脚本会自动加载 ../lib/index.js 中的变量定义
 *   - 只处理指定的文件，不会递归处理目录
 *   - 会自动跳过不存在的文件并给出提示
 */

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
 * 清理双重引号
 */
function cleanDoubleQuotes(content) {
    // 清理可能产生的双重引号
    return content.replace(/""/g, '"').replace(/''/g, '\'');
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
        {
            pattern: /var\((--[^)]+)\)/g,
            replacer: (match, varName) => {
                if (variables[varName]) {
                    replacedCount++;
                    const cleanValue = getUnquotedValue(variables[varName]);
                    return `"${cleanValue}"`;
                }
                return match;
            },
        },
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
    replacedContent = cleanDoubleQuotes(replacedContent);

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

    // 获取命令行参数中的文件路径
    const targetFiles = process.argv.slice(2);

    if (targetFiles.length === 0) {
        // eslint-disable-next-line no-console
        console.error('❌ 请提供要处理的文件路径');
        // eslint-disable-next-line no-console
        console.log('用法: node advanced-replacer.mjs <文件路径1> [文件路径2] ...');
        process.exit(1);
    }

    // 加载变量
    const variables = await loadVariables();
    if (!variables || Object.keys(variables).length === 0) {
        // eslint-disable-next-line no-console
        console.error('❌ 未能加载到变量数据');
        process.exit(1);
    }

    // eslint-disable-next-line no-console
    console.log(`📋 加载了 ${Object.keys(variables).length} 个变量`);

    let totalReplacements = 0;

    // 处理指定的文件
    for (const filePath of targetFiles) {
        const resolvedPath = path.resolve(filePath);

        if (!fs.existsSync(resolvedPath)) {
            // eslint-disable-next-line no-console
            console.log(`⚠️ 文件不存在，跳过: ${filePath}`);
            continue;
        }

        const stat = fs.statSync(resolvedPath);
        if (!stat.isFile()) {
            // eslint-disable-next-line no-console
            console.log(`⚠️ 不是文件，跳过: ${filePath}`);
            continue;
        }

        // eslint-disable-next-line no-console
        console.log(`\n📄 处理文件: ${path.relative(process.cwd(), resolvedPath)}`);

        totalReplacements += processFile(resolvedPath, variables);
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
