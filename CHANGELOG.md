# Change log

##
调整对@osui/icons的依赖：
- 单包组件移除@osui/icons的依赖，更改为@osui/theme，@osui/icloud-theme对icon的依赖，原因是，不同主题对应的icon包不同，若组件中依赖需要依赖两个不同的包
## 0.10.9

SearchSelectList:
- 支持自由扩展下拉菜单
- 修复空数组时反显为0的问题
- render方法改为传入数据
- 导出LiItem自定义render
- 增加input输入框可清除功能
- btnName支持React.ReactNode是否会更好些

## 0.10.8

Breaking Change: 目前由于是内部试用阶段，breaking的修改不单独调整版本。未来正式版会注意。带来不变敬请谅解。

Button：
- 删除only-icon类型，更换为type="icon"，因为<Button icon={<Xxxx/>} /> 时，antd会添加class icon-ony。容易混淆。icon的用法为 <Button type="icon" icon=<Xxxx> />

------

Modal：
- 字号调整，标题14px，内容12px
- 调整底部border
- 调整不传入width时的default宽度

Progress：
- 增加已完成状态的Demo
- 调整circel内的字体大小
- 调整circel的边缘变为方形

Drawer：
- 去掉标题下分割线
- footer操作按钮padding-right: 20px

Collapse：
- 字号调整为12px
- 描边调整，修复重复border的问题
- 禁用状态颜色调整

Breadcrumb
- 调整最后一级加粗
- 调整hover link字体颜色

Badge
- 徽标大小、padding调整
- 添加文字徽标，通过type表明成功、失败、警告类型
- 取消进行中动效
- 增加仅文字的demo

Backtop
- 修复滚到页面上BackTop不消失的问题
- 增加transparent效果
- 调整大小

Steps
- 调整背景颜色等样式
- 增加compact模式
- 增加line形式
- 增加垂直的demo

Timeline
- 样式调整

Tag
- 样式调整

Radio
- 样式调整

Button
- 增加min-width，osc的min-width为68px
- 删除only-icon类型，更换为type="icon"，因为<Button icon={<Xxxx/>} /> 时，antd会添加class icon-ony。容易混淆。icon的用法为 <Button type="icon" icon=<Xxxx> />
- 调整了primary类型的box-shadow

## 0.10.7

fix: 修复collpase箭头不居中的问题
## 0.10.6

chore: 修复版本错误
## 0.10.5

fix: text-overflow-tooltip支持maxWidth和style props
fix: dropdown满足osui和icloud调整

## 0.10.4

- fix: 调整table,pagination 增加brand context, 来展示对应的分页
- fix: 调整menu dropdown osc主题样式
- fix: modal 调整
    - Modal设置了centered默认为true, 如果不想centered可以设置成false覆盖
    - Modal最大高度限制: osc 80vh; icloud: 上下留50px
    - Modal去掉了bodyHeight, 因为这个属性没有什么意义, 一般不会直接限制死高度的, 而且可以通过 bodyStyle来设置
    - Modal添加bodyBorder: Boolean属性, osc控制什么时候展示bodyBorder
    - Modal修复了Confirm的Icon
- fix: 增加TextOverflowTooltip，只在text overflow的时候展示


## 0.10.3

- fix: 修复date-picker suffix color
- fix: checkbox、radio。调整checkbox、radio disabled时的border-color
- fix: input-number加line-height的修复

## 0.10.2, 0.10.1

- fix： 补齐antd组件，补齐文档，添加version组件
- fix：修复osc主题button hover样式
- fix：修复button disable时tooltip不显示的问题
- fix：collapse箭头位置
- fix：tree样式的更新

## 0.10.0

- 支持Antd@4.10.0
- 支持less@4.0.0
- 支持`ant-prefix`