# @osui/message

## 安装说明

### 方式一

单包使用

```
yarn install @osui/message
```

```
import message from '@osui/message'
```

### 方式二

从 `@osui/ui` 统一引入

```
yarn install @osui/ui
```

```
import {message} from '@osui/ui';
```

### 静态方法的修改
[ConfigProvider.config()](https://ant.design/components/config-provider-cn#configproviderconfig)
利用了 holderRender 包裹了 message 的静态方法生成 dom, 具体看 @osui/message 的 useSetStaticMessage 以及 @osui/brand-provider 的 SetStaticMethodStyle
要求 antd 5.13.0+
由于 antd 的 ConfigProvider.config 会覆盖 globalHolderRender, 推荐使用 @osui/brand-provider  的 config，如需覆盖可以传第二个参数为 true, 覆盖后 静态方法会丢失 @osui 自定义样式
