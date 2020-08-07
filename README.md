# osui

#### 介绍
osui是基于开源组件库（例如antd），封装的一套业务性质的组件

#### 软件架构
采用monorepo模式，

快速了解monorepo基本用法：https://zhuanlan.zhihu.com/p/71385053
可以参考这篇文章快速了解monorepo的基本用法


#### 安装教程


#### 使用说明


#### 参与贡献

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

4.  新建 Pull Request

