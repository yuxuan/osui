1# 全局样式目录

此处放置全局的样式、Mixin、变量等，文件命名遵循 [reskript](https://ecomfe.github.io/reskript/) 的规则：

- `xxx.global.less`编写全局样式（不会被css-modules处理）。
- `xxx.var.less`编写变量（会自动被引入到所有`.less`文件里）。

如果有相应的图片等资源，在此处建立`assets`目录下放置。

通过`index.ts`引入全部的样式文件。
