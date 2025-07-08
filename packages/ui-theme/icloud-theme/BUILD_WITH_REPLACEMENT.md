# iCloud 主题构建说明

## 功能介绍

这个项目现在支持在构建时将所有的颜色变量引用（`colors[xx]` 和 `var(--xx-xx)`）替换为真正的十六进制颜色值，从而生成不依赖变量的最终产物。

## 特性

- ✅ 递归解析 CSS 变量引用（如 `var(--color-warning-6)` → `var(--color-orange-6)` → `#ff9326`）
- ✅ 替换 `colors['--color-xxx']` 格式的引用
- ✅ 替换 `var(--color-xxx)` 格式的引用  
- ✅ 保持原有的代码结构和格式
- ✅ 自动清理不必要的 import 语句
- ✅ 生成正确的 TypeScript 类型定义

## 构建命令

### 使用变量替换构建（推荐）
```bash
pnpm build
```

### 保持原始变量引用构建
```bash
pnpm build:original
```

### 仅测试变量替换
```bash
pnpm replace-ts-vars
```

## 构建流程

1. **颜色变量替换** - 读取 `colors.ts` 中的颜色定义，递归解析所有变量引用
2. **临时文件生成** - 创建替换后的 `acudTheme.ts` 文件到 `temp/` 目录
3. **代码编译** - 使用 SWC 编译 ES 模块和 CommonJS 模块
4. **类型定义生成** - 使用 TypeScript 生成 `.d.ts` 文件
5. **清理** - 删除临时文件

## 示例

### 替换前
```typescript
export const theme = {
    primaryColor: colors['--color-brand-6'],
    warningColor: 'var(--color-warning-6)',
    backgroundColor: colors['--color-gray-11']
};
```

### 替换后
```typescript
export const theme = {
    primaryColor: '#2468f2',
    warningColor: '#ff9326', 
    backgroundColor: '#ffffff'
};
```

## 文件结构

```
scripts/
├── ts-theme-replacer.mjs     # 变量替换脚本
├── build-with-replacement.sh # 带替换的构建脚本
├── build.sh                  # 原始构建脚本  
└── test-replacement.mjs      # 测试脚本
```

## 注意事项

- 构建过程会创建临时的 `temp/` 目录，构建完成后会自动清理
- 所有颜色引用都会被递归解析到最终的十六进制值
- 生成的最终产物不包含任何颜色变量引用，可以独立使用
- 如果颜色变量不存在，会保留原始引用并发出警告

## 测试

运行测试验证替换功能：

```bash
node scripts/test-replacement.mjs
```

测试包括：
- 颜色值解析测试
- 主题文件替换测试  
- 递归变量引用测试
- 错误处理测试