# osui

## 介绍
osui是基于开源组件库（例如antd，导出了所有antd组件），封装的一套业务性质的组件。按照UE规范，对antd组件样式和部分功能做了调整

## 软件架构
采用monorepo模式，

快速了解monorepo基本用法：https://zhuanlan.zhihu.com/p/71385053
可以参考这篇文章快速了解monorepo的基本用法

## 使用说明

注意：
- 需要项目自行安装antd
- 需要项目安装主题
- 需要项目在less入口文件添加 `@import "~@osui/theme/dist/theme/vars.css"`
- 需要项目配置webpack，可以参考`examples`
- 需要项目的less-loader配置`modifyVars: {'ant-prefix': 'ant'}`或其他prefix
### 使用组件

使用OSUI有两种方式

#### 方式一： 整包安装

```
yarn add @osui/ui
```

```
import {Button} from '@osui/ui';
```

#### 方式二：单包使用

```
yarn add @osui/button
```

```
import Button from '@osui/button';
```

从`0.10.0`之后，项目需要在`less-loader`中配置modifyVars，添加`{'ant-prefix': 'ant'}`字段。 否则编译时会报错。

### 使用主题

```
yarn add @osui/theme
```

主题是**必须安装**的，不论是单包还是整包使用组件库，都需要主题。

### 使用icons

```
yarn add @osui/icons
```

有些组件是需要`@osui/icons`的，或者项目中需要使用icons


### 结合create-react-app使用

参考`example/create-react-app/my-app`的方式，（简单粗暴的复制粘贴吧）

#### 说明

本主题覆盖了antd主题，因此需要参考[antd create-react-app 主题替换的方案](https://ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE)，即配合`craco`使用

`example/create-react-app/my-app`中，需要注意的以下几点：

1. 注意`package.json`中的依赖，`dependencies`和`devDependencies`都是必须的
2. 在`App.less`引入`@import '~@osui/theme/dist/theme/vars.css';`
3. 在`App.less`引入`@import '~antd/dist/antd.less';` antd有说明
4. `craco.config.js`是CRA没有的
5. `eslint`需要自己配置

### 结合reskript使用

参考`example/reskript/my-app`的方式，（简单粗暴的复制粘贴吧）

#### 说明

1. 注意`package.json`中的依赖，`dependencies`和`devDependencies`都是必须的
2. `settings.js` devLogin 关闭了，如果有需要自行打开

### 引入样式

与antd一样，需要在app入口引入less文件来添加样式。
在入口js引入下面代码：

```
import '@osui/theme/dist/theme/vars.css';
import '@osui/theme/antd4-styles-patch.css'; // 去掉antd动效等全局覆盖
```

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

### 开发流程

- 确保与master同步
```
git checkout master
git fetch --all
git pull
```
- 分支开发
```
git checkout 开发分支
```

- 提交评审
```
git push --set-upstream origin 开发分支
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

组件名为CamelCase（就是React组件的命名），例如`AppLayout`

#### 步骤

1. clone osui代码库
2. 在osui代码库根目录运行 yarn new-component ComponentName
3. cd osui/packages/ui/component-name
4. yarn storybook
5. 在src下面改组件的源码
6. 在 stories/ 下写组件如何使用

##### `yarn new-component` 不好用？

手动方式：

1. 把`templates/component`复制到`packages/ui`目录下，重命名成新建组件
2. 将`package.json`和`README.md`中的`{componentName}`换成新命名的组件
3. 将`{CapComponentName}`换成大写字母开头，camelcase的形式

#### 开发新组件

组件开发代码在组件文件夹`src/`目录下。开发时可以通过storybook进行调试：

1. 在`stories/`目录下已经有了xxx.stories.tsx
2. 从`src`中引入组件， 仿照`alert`
3. `yarn`
4. `yarn storybook`

#### 覆盖Antd

可以参考`Dropdown`组件，覆盖className的方式。

**需要注意的点：**
1. 透传所有`props`，如果有增加的（如className）采用append的形式，不允许吞掉
2. 不允许删除任何Antd的原有的`props`
3. 组件上的static属性注意要带上，例如`Dropdown.Button`，`Input.Textarea`等

示例： 参考`alert`组件

#### 如何发包（publish）

**NOTE：只能在release分支发布**

- publish前准备工作

cd 项目root目录
git checkout master
git fetch --all
git pull

可能遇到的问题：

./node_modules/.bin/lerna version 或者yarn run version 这个会把修改的版本信息列出来
如果版本号不符合预期的话，可以
1. 强制只升级minor或者patch `yarn run version patch` 或者 `yarn run version minor` 参考：https://github.com/lerna/lerna/tree/main/commands/version#semver-bump
2. 如果出现merge master之后，`yarn run version`更新了全部包，而实际只有个别包更新了的情况，试试用`lerna version --include-merged-tags`

- publish

cd 项目root目录
./node_modules/.bin/lerna publish from-package
每个包package.json都有 prepublishOnly: "yarn run build"，发布前会build，所以不用提前run yarn build了

- after publish

更新之后`git push` push到远程master分支，只有管理员有此操作权限

#### 如何制作icon

`packages/ui-icons`包为`osui`的icon工具包，其中包含`icons-builder`和`osui-icons`。

`icons-builder`用于制作icon，`osui-icons`导出icon包。使用方法如下：

1. 将svg添加到`osui-icons/raw`内，命名为`xxx-xxx.svg`（与组件命名方式相同）
2. 执行 `yarn workspace @osui/icons-builder generate`。会产出新的icon到`osui-icons`。
3. 执行 `yarn workspace @osui/icons build`。产出`dist/`目录。
4. 在需要用到icon的组件，引入`import {IconXxxXxx} from '@osui/icons'`。
5. 使用： `<IconXxxXxxx />`


## 已知问题
1. less 的 calc 问题
    [antd issus](https://github.com/ant-design/ant-design/issues/23125)
    解决方式：检查`less`版本，检查`less-loader`版本，如果用yarn的话，可以用`yarn list less`，确保`less`的版本在3.9.0 - 3.11.2 之间。相关issue： https://github.com/less/less.js/issues/3579。
    **这个在antd4.10.0修复了。**

2. 构建项目时，报错`Variable @ant-prefix is undefined`。
    是因为项目webpack的less-loader没有配置，modifyVars: {'ant-prefix': 'antd'}

3. 构建项目时，报错某些less变量undefined。
    检查是否`style-resources-loader`有添加`antd-vars-patch.less`。检查`style-resources-loader`的rules test是否命中了antd和osui。或者使用`modifyVars`是否正确

4. 项目引入组件库之后，项目内样式和组件库样式不一样：
   antd 样式的覆盖分为两部分：
   1. 调整antd less variables，是antd暴露出来、可以覆盖的less变量，一些组件用了这些变量，见：https://ant.design/docs/react/customize-theme-cn。可以覆盖的变量有这些：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less，osui覆盖了这些：https://gitee.com/gitee-fe/osui/blob/master/packages/ui-theme/osui-theme/src/antd-vars-patch.less。

   2. 然而有些组件的样式是不在这些less变量里面的，我们会通过组件 + less，覆盖antd组件样式。比如https://gitee.com/gitee-fe/osui/blob/master/packages/ui/alert/src/index.less，这里面的样式。所有的osui组件覆盖，都会加`osui-`的前缀，为了调高css权重，和防止误伤。

   组件库demo的样式是干净的。只有组件样式 + antd样式

   项目中的样式如果和组件库的不一样有可能是：
   1. 项目中对同样组件，用了同样的class覆盖，并且权重 > osui 组件样式
   2. modifyVars被覆盖
   3. osui样式没有覆盖到，或者是osui的bug ==> 这个问题请参看是不是demo也是不对的