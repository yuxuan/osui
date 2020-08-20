# 枚举目录

以模块为粒度进行组织，如`repo.js`中放置和代码库有关的内容。

每个枚举量都以`PascalCase`的形式命名，枚举是一个简单的对象，键以`CONSTANT_CASE`的形式命名，值可以是字符串和数字等简单类型。

```javascript
export const HighlightResult = {
    SUCCESS: 0,
    TOO_MANY_LINES: 1,
    LINE_TOO_LONG: 2,
    LANGUAGE_UNSUPPORTED: 3,
    UNKNOWN_FAIL: 4
};
```

在`index.js`中导出所有模块的内容。
