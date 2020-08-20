# Redux Action目录

以模块为粒度进行组织，如`repo.js`中放置和代码库有关的内容。

每一个文件内包含一系列的Action类型常量，以及一系列的Action Creator或Thunk。**不要直接暴露Action对象**。

在`index.js`中导出所有模块的内容。
