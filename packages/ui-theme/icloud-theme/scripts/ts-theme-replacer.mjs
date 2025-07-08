/* eslint-disable max-statements */
/**
 * TypeScript主题文件变量替换工具
 *
 * 该脚本用于在构建时创建临时的acudTheme.ts文件，将其中的colors[xx]引用
 * 替换为真正的十六进制颜色值。支持递归解析CSS变量直到找到最终的十六进制值。
 *
 * 用法：
 *   node ts-theme-replacer.mjs
 *
 * 功能：
 *   1. 读取原始的acudTheme.ts文件
 *   2. 加载colors.ts中的颜色定义
 *   3. 递归解析var()引用直到找到十六进制值
 *   4. 替换所有colors[xx]引用为实际的十六进制值
 *   5. 生成临时文件用于编译
 */

/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 解析var()引用直到找到十六进制值
 * @param {string} value - 待解析的值
 * @param {Object} colorMap - 颜色映射表
 * @param {Set} visited - 访问过的变量，避免循环引用
 * @returns {string} 解析后的十六进制值
 */
function resolveColorValue(value, colorMap, visited = new Set()) {
    if (typeof value !== 'string') {
        return value;
    }

    // 如果已经是十六进制颜色值，直接返回
    if (/^#[0-9a-fA-F]{3,8}$/.test(value)) {
        return value;
    }

    // 解析var()函数
    const varMatch = value.match(/^var\((--[^)]+)\)$/);
    if (varMatch) {
        const varName = varMatch[1];

        // 避免循环引用
        if (visited.has(varName)) {
            console.warn(`❌ 检测到循环引用: ${varName}`);
            return value;
        }

        if (colorMap[varName]) {
            visited.add(varName);
            return resolveColorValue(colorMap[varName], colorMap, visited);
        }
    }

    return value;
}

/**
 * 构建颜色解析映射表
 * @param {string} colorsFilePath - colors.ts文件路径
 * @returns {Object} 颜色映射表
 */
function buildColorMap(colorsFilePath) {
    try {
        const colorsContent = fs.readFileSync(colorsFilePath, 'utf8');
        const colorMap = {};

        // 解析uiColors对象
        const uiColorsMatch = colorsContent.match(/export const uiColors = \{([\s\S]*?)\};/);
        if (uiColorsMatch) {
            const uiColorsContent = uiColorsMatch[1];
            // 匹配每一行的颜色定义
            const colorRegex = /['"`]([^'"`]+)['"`]\s*:\s*['"`]([^'"`]+)['"`]/g;
            let match;
            while ((match = colorRegex.exec(uiColorsContent)) !== null) {
                colorMap[match[1]] = match[2];
            }
        }

        // 解析rotatingColors对象
        const rotatingColorsMatch = colorsContent.match(/export const rotatingColors = \{([\s\S]*?)\};/);
        if (rotatingColorsMatch) {
            const rotatingColorsContent = rotatingColorsMatch[1];
            const colorRegex = /['"`]([^'"`]+)['"`]\s*:\s*['"`]([^'"`]+)['"`]/g;
            let match;
            while ((match = colorRegex.exec(rotatingColorsContent)) !== null) {
                colorMap[match[1]] = match[2];
            }
        }

        console.log(`📋 成功加载 ${Object.keys(colorMap).length} 个颜色变量`);
        return colorMap;
    } catch (error) {
        console.error('❌ 加载颜色变量失败:', error.message);
        return {};
    }
}

/**
 * 解析所有颜色值到十六进制
 * @param {Object} colorMap - 原始颜色映射表
 * @returns {Object} 解析后的颜色映射表
 */
function resolveAllColors(colorMap) {
    const resolvedColors = {};

    for (const [key, value] of Object.entries(colorMap)) {
        resolvedColors[key] = resolveColorValue(value, colorMap);
    }

    return resolvedColors;
}

/**
 * 替换主题文件中的颜色引用
 * @param {string} content - 文件内容
 * @param {Object} resolvedColors - 解析后的颜色映射表
 * @returns {Object} 替换结果
 */
function replaceColorsInTheme(content, resolvedColors) {
    let replacedContent = content;
    let replacedCount = 0;

    // 替换colors[xxx]形式的引用
    const colorsPattern = /colors\[['"`]([^'"`]+)['"`]\]/g;
    replacedContent = replacedContent.replace(colorsPattern, (match, colorKey) => {
        if (resolvedColors[colorKey]) {
            replacedCount++;
            return `'${resolvedColors[colorKey]}'`;
        }
        console.warn(`⚠️ 未找到颜色变量: ${colorKey}`);
        return match;
    });

    // 直接替换var()函数调用 - 检查是否已经在引号内
    const varPattern = /(['"`])?var\((--[^)]+)\)(['"`])?/g;
    replacedContent = replacedContent.replace(varPattern, (match, startQuote, varName, endQuote) => {
        if (resolvedColors[varName]) {
            replacedCount++;
            const quote = startQuote || endQuote || '\'';
            return `${quote}${resolvedColors[varName]}${quote}`;
        }
        console.warn(`⚠️ 未找到CSS变量: ${varName}`);
        return match;
    });

    return {content: replacedContent, replacedCount};
}

/**
 * 主函数
 */
async function main() {
    console.log('🚀 开始TypeScript主题文件变量替换...');

    const sourceDir = path.join(__dirname, '../variables/acud');
    const tempDir = path.join(__dirname, '../temp');

    const acudThemeSource = path.join(sourceDir, 'acudTheme.ts');
    const colorsSource = path.join(sourceDir, 'colors.ts');
    const tempAcudTheme = path.join(tempDir, 'acud', 'acudTheme.ts');

    // 检查源文件是否存在
    if (!fs.existsSync(acudThemeSource)) {
        console.error(`❌ 源文件不存在: ${acudThemeSource}`);
        process.exit(1);
    }

    if (!fs.existsSync(colorsSource)) {
        console.error(`❌ 颜色文件不存在: ${colorsSource}`);
        process.exit(1);
    }

    // 检查临时目录是否存在（应由build-with-replacement.sh创建）
    if (!fs.existsSync(tempAcudTheme)) {
        console.error(`❌ 临时文件不存在: ${tempAcudTheme}`);
        console.error('请确保build-with-replacement.sh已正确复制文件');
        process.exit(1);
    }

    // 加载和解析颜色变量
    console.log('📖 加载颜色变量...');
    const colorMap = buildColorMap(colorsSource);

    console.log('🔍 解析颜色引用...');
    const resolvedColors = resolveAllColors(colorMap);

    // 读取主题文件
    console.log('📄 读取主题文件...');
    const themeContent = fs.readFileSync(tempAcudTheme, 'utf8');

    // 替换颜色引用
    console.log('🔄 替换颜色引用...');
    const {content: replacedContent, replacedCount} = replaceColorsInTheme(themeContent, resolvedColors);

    // 保留import语句，避免导致严重的bug
    console.log('🔧 保持原有的import语句...');
    let finalContent = replacedContent;

    // 为export default添加显式的类型注解，解决TypeScript编译错误
    console.log('🔧 添加类型注解...');
    finalContent = finalContent.replace(
        /export default \{/,
        'export default ({'
    );
    finalContent = finalContent.replace(
        /\};\s*$/,
        '}) as ThemeConfig;'
    );

    // 写入临时文件
    console.log('💾 更新临时文件...');
    fs.writeFileSync(tempAcudTheme, finalContent, 'utf8');

    console.log('✅ 处理完成！');
    console.log(`   - 替换了 ${replacedCount} 个颜色引用`);
    console.log(`   - 处理的主题文件: ${path.relative(process.cwd(), tempAcudTheme)}`);

    return tempAcudTheme;
}

// 运行主函数
main().catch(error => {
    console.error('❌ 执行失败:', error);
    process.exit(1);
});
