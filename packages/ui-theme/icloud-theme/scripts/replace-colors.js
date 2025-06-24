/* eslint-disable no-console */
const fs = require('fs');

// 颜色映射关系
const colorMappings = {
    // 品牌色
    '\'#2468F2\'': 'colors[\'--color-brand-6\']',
    '"#2468F2"': 'colors[\'--color-brand-6\']',
    '\'#144BCC\'': 'colors[\'--color-brand-7\']',
    '"#144BCC"': 'colors[\'--color-brand-7\']',
    '\'#528EFF\'': 'colors[\'--color-brand-5\']',
    '"#528EFF"': 'colors[\'--color-brand-5\']',
    '\'#E6F0FF\'': 'colors[\'--color-brand-1\']',
    '"#E6F0FF"': 'colors[\'--color-brand-1\']',
    '\'#D4E5FF\'': 'colors[\'--color-brand-2\']',
    '"#D4E5FF"': 'colors[\'--color-brand-2\']',
    '\'#A8CAFF\'': 'colors[\'--color-brand-3\']',
    '"#A8CAFF"': 'colors[\'--color-brand-3\']',

    // 灰色系
    '\'#FFFFFF\'': 'colors[\'--color-gray-11\']',
    '"#FFFFFF"': 'colors[\'--color-gray-11\']',
    '\'#fff\'': 'colors[\'--color-gray-11\']',
    '"#fff"': 'colors[\'--color-gray-11\']',
    '\'#F7F7F9\'': 'colors[\'--color-gray-10\']',
    '"#F7F7F9"': 'colors[\'--color-gray-10\']',
    '\'#F2F2F4\'': 'colors[\'--color-gray-9\']',
    '"#F2F2F4"': 'colors[\'--color-gray-9\']',
    '\'#E8E9EB\'': 'colors[\'--color-gray-8\']',
    '"#E8E9EB"': 'colors[\'--color-gray-8\']',
    '\'#D4D6D9\'': 'colors[\'--color-gray-7\']',
    '"#D4D6D9"': 'colors[\'--color-gray-7\']',
    '\'#B8BABF\'': 'colors[\'--color-gray-6\']',
    '"#B8BABF"': 'colors[\'--color-gray-6\']',
    '\'#84868C\'': 'colors[\'--color-gray-5\']',
    '"#84868C"': 'colors[\'--color-gray-5\']',
    '\'#5C5F66\'': 'colors[\'--color-gray-4\']',
    '"#5C5F66"': 'colors[\'--color-gray-4\']',
    '\'#151B26\'': 'colors[\'--color-gray-2\']',
    '"#151B26"': 'colors[\'--color-gray-2\']',
    '\'#070C14\'': 'colors[\'--color-gray-1\']',
    '"#070C14"': 'colors[\'--color-gray-1\']',

    // 成功色
    '\'#30BF13\'': 'colors[\'--color-success-6\']',
    '"#30BF13"': 'colors[\'--color-success-6\']',
    '\'#ECFFE6\'': 'colors[\'--color-success-1\']',
    '"#ECFFE6"': 'colors[\'--color-success-1\']',
    '\'#D1F2C7\'': 'colors[\'--color-success-2\']',
    '"#D1F2C7"': 'colors[\'--color-success-2\']',
    '\'#A5E693\'': 'colors[\'--color-success-3\']',
    '"#A5E693"': 'colors[\'--color-success-3\']',
    '\'#7BD964\'': 'colors[\'--color-success-4\']',
    '"#7BD964"': 'colors[\'--color-success-4\']',
    '\'#54CC39\'': 'colors[\'--color-success-5\']',
    '"#54CC39"': 'colors[\'--color-success-5\']',
    '\'#1B9908\'': 'colors[\'--color-success-7\']',
    '"#1B9908"': 'colors[\'--color-success-7\']',
    '\'#0B7300\'': 'colors[\'--color-success-8\']',
    '"#0B7300"': 'colors[\'--color-success-8\']',
    '\'#054D00\'': 'colors[\'--color-success-9\']',
    '"#054D00"': 'colors[\'--color-success-9\']',
    '\'#012600\'': 'colors[\'--color-success-10\']',
    '"#012600"': 'colors[\'--color-success-10\']',

    // 警告色/橙色
    '\'#FF9326\'': 'colors[\'--color-warning-6\']',
    '"#FF9326"': 'colors[\'--color-warning-6\']',
    '\'#FFF4E6\'': 'colors[\'--color-warning-1\']',
    '"#FFF4E6"': 'colors[\'--color-warning-1\']',
    '\'#FFECD4\'': 'colors[\'--color-warning-2\']',
    '"#FFECD4"': 'colors[\'--color-warning-2\']',
    '\'#FFD8A8\'': 'colors[\'--color-warning-3\']',
    '"#FFD8A8"': 'colors[\'--color-warning-3\']',
    '\'#FFC27D\'': 'colors[\'--color-warning-4\']',
    '"#FFC27D"': 'colors[\'--color-warning-4\']',
    '\'#FFAB52\'': 'colors[\'--color-warning-5\']',
    '"#FFAB52"': 'colors[\'--color-warning-5\']',
    '\'#D97116\'': 'colors[\'--color-warning-7\']',
    '"#D97116"': 'colors[\'--color-warning-7\']',
    '\'#B35209\'': 'colors[\'--color-warning-8\']',
    '"#B35209"': 'colors[\'--color-warning-8\']',
    '\'#8C3800\'': 'colors[\'--color-warning-9\']',
    '"#8C3800"': 'colors[\'--color-warning-9\']',
    '\'#662500\'': 'colors[\'--color-warning-10\']',
    '"#662500"': 'colors[\'--color-warning-10\']',

    // 错误色/红色
    '\'#F33E3E\'': 'colors[\'--color-red-6\']',
    '"#F33E3E"': 'colors[\'--color-red-6\']',
    '\'#FFE8E6\'': 'colors[\'--color-red-1\']',
    '"#FFE8E6"': 'colors[\'--color-red-1\']',
    '\'#FFDBD9\'': 'colors[\'--color-red-2\']',
    '"#FFDBD9"': 'colors[\'--color-red-2\']',
    '\'#FFB6B3\'': 'colors[\'--color-red-3\']',
    '"#FFB6B3"': 'colors[\'--color-red-3\']',
    '\'#FF908C\'': 'colors[\'--color-red-4\']',
    '"#FF908C"': 'colors[\'--color-red-4\']',
    '\'#FF6966\'': 'colors[\'--color-red-5\']',
    '"#FF6966"': 'colors[\'--color-red-5\']',
    '\'#CC292E\'': 'colors[\'--color-red-7\']',
    '"#CC292E"': 'colors[\'--color-red-7\']',
    '\'#A61922\'': 'colors[\'--color-red-8\']',
    '"#A61922"': 'colors[\'--color-red-8\']',
    '\'#800D18\'': 'colors[\'--color-red-9\']',
    '"#800D18"': 'colors[\'--color-red-9\']',
    '\'#590410\'': 'colors[\'--color-red-10\']',
    '"#590410"': 'colors[\'--color-red-10\']',
};

function replaceColorsInFile(filePath) {
    try {
        // 读取文件内容
        let content = fs.readFileSync(filePath, 'utf8');
        console.log('开始替换颜色值...');

        let replacedCount = 0;

        // 遍历所有颜色映射，进行替换
        for (const [hexColor, colorVar] of Object.entries(colorMappings)) {
            const regex = new RegExp(hexColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            const matches = content.match(regex);
            if (matches) {
                content = content.replace(regex, colorVar);
                console.log(`替换 ${hexColor} -> ${colorVar} (${matches.length} 次)`);
                replacedCount += matches.length;
            }
        }

        // 写回文件
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`\n✅ 替换完成！总共替换了 ${replacedCount} 个颜色值`);

    } catch (error) {
        console.error('❌ 替换过程中出现错误:', error.message);
    }
}

// 执行替换
const targetFile = '../variables/acud/acudTheme.ts';

if (fs.existsSync(targetFile)) {
    replaceColorsInFile(targetFile);
} else {
    console.error(`❌ 文件不存在: ${targetFile}`);
}
