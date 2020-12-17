# Redux Reducer目录

以Store的结构为粒度组织，每个一级属性对应一个子目录，如`repo`对应Store中的`repo`这个属性。每个目录通过`index.ts`文件以**默认导出**的形式暴露一个Reducer函数。

```
/reducers
    /repo
        current.ts
        queries.ts
        index.ts
    index.ts
```

在`index.ts`中使用`combineReducers`将子Reducer组合起来后，以**默认导出**的形式暴露。
