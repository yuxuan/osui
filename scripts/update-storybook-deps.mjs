import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storybook 相关依赖及其版本
const storybookDeps = {
    '@storybook/addon-docs': '9.0.11',
    '@storybook/cli': '9.0.11',
    '@storybook/react-vite': '9.0.11',
    'storybook': '9.0.11',
    '@vitejs/plugin-react': '^4.4.1',
    'vite': '^6.3.5',
    'eslint-plugin-storybook': '9.0.11',
    '@chromatic-com/storybook': '4.0.0',
    '@ant-design/cssinjs': '^1.18.4',
};

const removedDeps = [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-viewport',
    '@storybook/blocks',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@osui/theme',
];

// UI 包的根目录
const uiDir = path.resolve(__dirname, '../packages/ui');

// 递归获取所有 package.json 文件
function getAllPackageJsonFiles(dir) {
    const results = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const packageJsonPath = path.join(fullPath, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
                results.push(packageJsonPath);
            }
        }
    }

    return results;
}

// 更新 package.json 文件
function updatePackageJson(filePath) {
    console.log(`正在处理: ${filePath}`);

    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // 如果没有 devDependencies，创建它
    if (!content.devDependencies) {
        content.devDependencies = {};
    }

    // 更新或添加 storybook 相关依赖
    for (const [dep, version] of Object.entries(storybookDeps)) {
        content.devDependencies[dep] = version;
    }

    // 移除不需要的依赖
    for (const dep of removedDeps) {
        delete content.devDependencies[dep];
    }

    // 确保有 storybook 相关的 scripts
    if (!content.scripts) {
        content.scripts = {};
    }

    content.scripts = {
        ...content.scripts,
        'storybook': 'storybook dev -p 8700',
        'sb-upgrade': 'storybook upgrade',
        'build-storybook': 'storybook build',
    };

    // 写回文件
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n');
}

// 主函数
function main() {
    const packageJsonFiles = getAllPackageJsonFiles(uiDir);
    console.log(`找到 ${packageJsonFiles.length} 个 package.json 文件`);

    for (const file of packageJsonFiles) {
        updatePackageJson(file);
    }

    console.log('更新完成！');
}

main();
