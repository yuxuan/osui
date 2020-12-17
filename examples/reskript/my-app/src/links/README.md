# 链接目录

目录下放置系统中会使用的各种链接，包括站内路由地址的引用和站外地址的链接。

以模块为粒度进行组织，如`repo.tsx`中放置和代码库有关的内容。

使用[react-omni-link](https://github.com/ecomfe/react-omni-link)来组织链接，尽量使用[`createLink`](https://github.com/ecomfe/react-omni-link#template-link)函数，如有更复杂的逻辑，则自行编写组件。

如果一个链接的URL会用于其它场景（如`history.push`），则需要先在`urls`目录下声明一个URL对象，再在此处引用该URL后生成链接组件。
