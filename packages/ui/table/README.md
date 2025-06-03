# @osui/table

## 安装说明

### 方式一

单包使用

```
yarn install @osui/table
```

```
import Table from '@osui/table'
```

### 方式二

从 `@osui/ui` 统一引入

```
yarn install @osui/ui
```

```
import {Table} from '@osui/ui';
```



pagination 位置原理（未完全采用）
```jsx
<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
    <div style={{ order: 2 }}>1</div>
    <div style={{ order: 3 }}>2</div>
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div style={{ order: 1 }}>4</div>
        <div style={{ order: 3, marginLeft: 'auto' }}>5</div>
    </div>
</div>
```
