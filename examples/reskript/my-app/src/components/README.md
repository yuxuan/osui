# 组件目录

以组件为粒度，每一个组件建立一个文件夹，以`PascalCase`的形式命名，下面放置`index.js`以**默认导出**的形式提供组件。

组件自身的样式以`index.less`文件实现。

如果组件仅用于另一个组件，则放置在组件的目录下，无需独立一个目录。如果组件相对复杂，也可以继续以子目录的形式组织。

```
/components
    /UserList
        /RowAction # 复杂的子组件
            index.js
            index.less
            config.js
        User.js # 独立子组件
        User.less # 独立子组件的样式
        index.js # 组件实现，默认导出
        index.less # 组件样式
    index.js # 导出全部组件
```

注意：链接类组件特殊放置在`links`目录下。

使用`index.js`对外暴露需要的组件，有些组件仅在`components`下相互引用，则不需要导出给外部，确保导出的是外部需要的最小集。
