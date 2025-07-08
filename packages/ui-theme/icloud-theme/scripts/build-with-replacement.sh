#!/bin/bash
set -e

echo "🚀 开始构建 iCloud 主题 (带变量替换)"
echo "node $(node -v)"
echo "npm $(npm -v)"
echo "pnpm $(pnpm -v)"

# 清理输出目录
echo "🧹 清理输出目录..."
rm -rf es
rm -rf lib
rm -rf temp

# 创建一个临时的variables目录结构用于编译
echo "📁 准备编译目录..."
mkdir -p temp

# 复制整个variables目录到temp
echo "📄 复制variables目录..."
cp -r variables/* temp/

# 第一步：处理TypeScript源文件的变量替换
echo "🔄 处理颜色变量替换..."
node scripts/ts-theme-replacer.mjs

# 创建tsconfig.json用于编译
echo "📝 创建 tsconfig.json..."
cat > temp/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "../tmp",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": false,
    "noImplicitAny": false,
    "suppressImplicitAnyIndexErrors": true,
    "noImplicitReturns": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  },
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
EOF

# 第二步：编译处理后的文件
echo "🏗️ 编译ES模块..."
swc temp -d es --source-maps

echo "🏗️ 编译CommonJS模块..."
swc temp -d lib --source-maps --config module.type=commonjs

# 第三步：生成类型定义
echo "📝 生成类型定义..."
mkdir -p tmp
cd temp && tsc && cd ..
cp -r tmp/* es
cp -r tmp/* lib
rm -rf tmp

echo "🧹 清理临时文件..."
rm -rf temp

echo '✅ TypeScript编译完成'

# 第四步：生成CSS变量文件
echo "🎨 生成CSS变量文件..."
node scripts/build.mjs


echo "🎉 构建成功！已生成替换变量后的最终产物"