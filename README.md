# osui

## 介绍
osui是基于开源组件库（例如antd），封装的一套业务性质的组件

## 软件架构
采用monorepo模式，

快速了解monorepo基本用法：https://zhuanlan.zhihu.com/p/71385053
可以参考这篇文章快速了解monorepo的基本用法

## 使用说明


## 参与贡献

1.  Fork 本仓库 （可以不fork直接拉分支）
2.  新建 feat_xxx 或者 fix_xxx 分支，对分支名尽量和 convertional commits（见下面）保持一致
3.  提交代码

**commit请用 yarn commit**

使用了commitlint，确保commit message需要遵循[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)，如果不满足规范，**无法commit**

使用 yarn commit 可以帮助你更好完成commit message。但是分类比较细致，常用的

- feat 提交新功能开发
- fix 修复问题

如果不确定怎么选择，从这两个选一个。

最短操作路径： yarn commit -> 选feat或者fix -> 回车跳过 -> 输入你干了啥概述（字数限制） -> 回车跳过 -> 回车（没有breaking change的话） -> 回车

熟练之后，可以用git commit 提交符合conventional commits的message。

4.  新建 Pull Request

## 开发说明

### 准备工作

1. clone 代码库到本地
2. 执行：

```
yarn
```

### 如何开发一个新组件

#### 创建新组件

执行

```
yarn new-component 组件名
```

该命令会在`packages/ui/`目录下创建`组件名`目录，并将`package.json`中的`name`改为`@osui/组件名`

（模板在`templates/component`下， 也可以手动复制到`packages/ui`目录下，但要记得替换`组件名`相关内容）

**注意：**

组件名小写字母，多个词用`-`分割，例如`app-layout`

##### `yarn new-component` 不好用？

手动方式：

1. 把`templates/component`复制到`packages/ui`目录下，重命名成新建组件
2. 将`package.json`和`README.md`中的`{componentName}`换成新命名的组件
3. 将`{CapComponentName}`换成大写字母开头，camelcase的形式

#### 开发新组件

组件开发代码在组件文件夹`src/`目录下。开发时可以通过storybook进行调试：

1. 在`stories/`目录下创建`index.stories.tsx`
2. 从`src`中引入组件， 仿照`alert`
3. `yarn`
4. `yarn storybook`

示例： 参考`alert`组件


#### 如何制作icon

`packages/ui-icons`包为`osui`的icon工具包，其中包含`icons-builder`和`osui-icons`。

`icons-builder`用于制作icon，`osui-icons`导出icon包。使用方法如下：

1. 将svg添加到`icons-builder/raw`内，命名为`xxx-xxx.svg`（与组件命名方式相同）
2. 执行 `yarn workspace @osui/icons-builder generate`。会产出新的icon到`osui-icons`。
3. 执行 `yarn workspace @osui/icons build`。产出`dist/`目录。
4. 在需要用到icon的组件，引入`import {IconXxxXxx} from '@osui/icons'`。
5. 使用： `<IconXxxXxxx />`

