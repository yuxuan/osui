# 组件目录

以组件为粒度，每一个组件建立一个文件夹，以`PascalCase`的形式命名，下面放置`index.tsx`以**默认导出**的形式提供组件。

组件自身的样式以`index.less`文件实现。

如果组件仅用于另一个组件，则放置在组件的目录下，无需独立一个目录。如果组件相对复杂，也可以继续以子目录的形式组织。

```
/components
    /UserList
        /RowAction # 复杂的子组件
            index.tsx
            index.less
            config.ts
        User.tsx # 独立子组件
        User.less # 独立子组件的样式
        index.tsx # 组件实现，默认导出
        index.less # 组件样式
```

注意：链接类组件特殊放置在`links`目录下。
