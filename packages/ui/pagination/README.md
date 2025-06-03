# @osui/pagination

## 安装说明

### 方式一

单包使用

```
yarn install @osui/pagination
```

```
import Pagination from '@osui/pagination'
```

### 方式二

从 `@osui/ui` 统一引入

```
yarn install @osui/ui
```

```
import {Pagination} from '@osui/ui';
```

```jsx
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
    <div style={{ order: 2 }}>1</div>
    <div style={{ order: 3 }}>2</div>
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div style={{ order: 1 }}>4</div>
        <div style={{ order: 3, marginLeft: 'auto' }}>5</div>
    </div>
</div>
```

