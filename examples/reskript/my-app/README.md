# fe-init

前端代码库初始化模板

## 开发

```shell
yarn start
```

## 代码检查

```shell
yarn lint
```

设置有提交前的 Git Hook，会自动进行检查，如检查不通过无法提交代码。

## 构建

```shell
yarn build # 普通构建
yarn analyze # 构建后提供报告
```

## 配置

以`fe-init`为例，基于`ee-fe-tools`的项目默认不会暴露 webpack 的配置文件，如需更改则可参考[ee-fe-tools](http://icode.baidu.com/repos/baidu/ee-fe/ee-fe-tools/blob/master:README.md) 的文档修改`settings.js`
