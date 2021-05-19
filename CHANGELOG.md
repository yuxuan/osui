# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



**Note:** Version bump only for package osui-monorepo





# [1.0.0-beta.1](https://gitee.com/gitee-fe/osui/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2021-05-18)

**Note:** Version bump only for package osui-monorepo





# [1.0.0-beta.0](https://gitee.com/gitee-fe/osui/compare/v0.12.1...v1.0.0-beta.0) (2021-05-17)


### Bug Fixes

* 调整Form.useLabelLayout ([32f4721](https://gitee.com/gitee-fe/osui/commits/32f47217d6babe2a37768425034a03ba459d990e))
* 调整osui色盘 ([b50d39b](https://gitee.com/gitee-fe/osui/commits/b50d39bc66d3725cb8bf711fa0773bdcc003aec8))
* 色盘颜色revert ([975c245](https://gitee.com/gitee-fe/osui/commits/975c2453d1db7fbb517c6c743e0e0b99a5559afb))
* 修复switch small的圆点位置 ([deaa266](https://gitee.com/gitee-fe/osui/commits/deaa266bb6017057714d258fada6370803e2f2a7))
* breadcrumb只有一个面包屑时不加粗 ([907e600](https://gitee.com/gitee-fe/osui/commits/907e6006a0215a9a89541266125c4824909d1259))
* button 依赖修复 ([1ea3cb3](https://gitee.com/gitee-fe/osui/commits/1ea3cb3072ca6a528d5f7a7a071b43e447e30f82))
* colors 暴露tagColors, uiColors, rotatingColors ([c37b3fe](https://gitee.com/gitee-fe/osui/commits/c37b3fe49f0764162825fec5de18a790c9b5dc77))
* form layout减少侵入性，不要重设margin ([2b89133](https://gitee.com/gitee-fe/osui/commits/2b891339128b0d815240f8c55967c7396e963a27))
* form提供layout解决方案 ([310f5e2](https://gitee.com/gitee-fe/osui/commits/310f5e21f61f18e429ae74a4d2251610ce942c71))
* form修复表单align冲突的问题 ([4ec064c](https://gitee.com/gitee-fe/osui/commits/4ec064cd5a2167d9a4eb60af36d04276f05944c3))
* input form error状态样式调整 ([84530fb](https://gitee.com/gitee-fe/osui/commits/84530fb9f64fdb7835df47765a5571fdc13d8373))
* input search icon clear icon颜色, onSearch callback修复 ([d75f772](https://gitee.com/gitee-fe/osui/commits/d75f7722779fb175093a0011b50bcda3a40ecfd6))
* input select empty 调整 ([8e146c4](https://gitee.com/gitee-fe/osui/commits/8e146c422b78b2c40b6dbe7a6c87d82fe85561ed))
* input.Search加addon的样式 ([a198a04](https://gitee.com/gitee-fe/osui/commits/a198a04952d5a7b7c8ec76d1d096daf44ccceaac))
* space vertical间距修复 ([ae04fe4](https://gitee.com/gitee-fe/osui/commits/ae04fe483c67654a102e210b88cd3860349113a7))
* switch圆点超出距离 ([3cd142c](https://gitee.com/gitee-fe/osui/commits/3cd142cc8c92e403e34d6e717cfbcab7b03d0a50))





# Change Log

# 0.12.12
Space
- 修复垂直模式下，padding-right的问题

# 0.12.11
Form
- 修复useLabelLayout在动态加载的Form.Item不生效的问题

# 0.12.10
升级antd依赖到 >=4.40 <4.16.0
# 0.12.9
Switch
- 修复small size圆点偏移的问题

Input
- 修复表单内error时，focus下样式不对的问题

# 0.12.5 0.12.6 0.12.7 0.12.8
Form
- 调整form layout

Switch
- 调整Switch的圆点偏移问题

# 0.12.4
Input
- 修复Input.Search有addonBefore时样式错误的问题

# 0.12.3
Input
- Input搜索和清除icon颜色
- onSearch callback修复

# 0.12.2
Input
- active的边框样式调整

BrandProvider, Select
- Empty的调整


# 0.12.1
AutoComplete
- 修复受控时内部状态依然会更新的问题

Breadcrumb
- 只有一级时不加粗

# 0.12.0
支持 antd 4.15.0

# 0.11.15
Button
- 去掉最小宽度

Input
- 调整addon样式和交互
# 0.11.14

Input
- 调整affix、suffix padding距离为8px
- 调整clearIcon padding为8px

Dropdown
- 调整menu item line-height 为 20px
# 0.11.13

Breadcrumb
- 调整字体颜色， 调整/间距为4px

Tabs
- 修复antd 4.14 margin的问题

# 0.11.12
Input
- 增加withSuffixIcon属性，当属性为true时，如果没有给suffix icon，那么会用默认的IconSearchOutline作为图标，且图标的使用方式与按钮的方式相同

# 0.11.11
AutoComplete
- 使用HighlightText高亮Options

HighlightText
- 新增HighlightText组件

Empty
- 增加size small|large

Input
- addOn时修复border的问题

# 0.11.10

Joyride
- 新增joyride组件

Dropdown
- 下拉菜单最小宽度为100px

# 0.11.9
【iCloud】

InputNumber
- 去掉hover箭头的大小变化

# 0.11.8
【iCloud】

Select
- clear icon位置调整

BrandProvider
- 增加locale=zhCN的默认配置，这样table内的pagination不需要单独配置

InputNumber
- 调整高度

# 0.11.7
【iCloud】

Button
- 增加disabledReason属性
- 调整文档内容

# 0.11.6
【iCloud】

Select
- 修复Multip没有arrow时，clear icon位置不对的问题

Upload
- demo中icon使用@osui/icons-icloud

@osui/icons-icloud
- 调整upload icon

# 0.11.5
【iCloud】

Breadcrumb
- 导出props的interface

Button
- 补充交互文档

Table
- 增加memo

Tabs
- 样式调整

Switch
- 替换icon

# 0.11.4
【iCloud】

Button
- 调整最小宽度 由68px减小到56px
- 调整line-height为20px

Checkbox
- 调整border color

Dropdown
- 调整demo对齐问题

Empty
- 调整error.svg

InputNumber
- 调整样式

Modal
- 调整关闭按钮颜色

Select
- 调整箭头位置

Tooltip
- 调整min-height

BrandProvider
- 调整支持antd autoInsertSpaceInButton， renderEmpty的覆盖
- 注意：需要用在antd ConfigProvider里面

# 0.11.3
【iCloud】

Modal
- 修复滚动条，margin换padding

Button
- 调整icon类型，仅用icon来处理

Input
- 调整disable border颜色

# 0.11.2
【iCloud】

# 0.11.1
Form
- 添加 Form.ErrorList

# 0.11.0

统一调整：

- 使用icloud-icon：请在webpack中配置resolve: alias: {‘@osui/icons’: ‘@osui/icons-icloud’}
- 调整disabled颜色包括：disable border 颜色， disable 字体颜色， disable背景颜色

Alert
- 调整info颜色
- 调整icon

AutoComplete
-增加了更多交互说明

Button
- 调整disabled颜色
- 调整了搜索icon
- 调整了large的时候字体为16px

Checkbox
- 调整disabled颜色

Dropdown
- 增加了demo里面显示箭头

Input
- 调整了disable样式
- 增加了只读
- 不确定只读和禁用的区别
- 搜索icon，颜色需要调整

InputNumber
- 调整了disable样式
- 调整了上下选择数字的样式

Pagination
- 调整了disable样式
- 去掉了Go按钮
- 去掉了只有simple的示例
- 调整了icon颜色

Popover
- 增加了标题
- 增加了内容可关闭的示例

Select
- 调整了disable样式
- 调整了选项disable文字颜色
- 调整了icon颜色
- 调整了多选的icon

Switch
- 关闭颜色发生了变化，可能不是预期的
- 调整了hover，active颜色

Tabs
- 调整了字号为14px
- 字号加粗
- 调整了间距

TimePicker
- 新增时间段选择demo

Tooltip
- 调整背景颜色

BackTop
- 调整icon

Empty
- 调整图片
- 增加404
- 增加error

Menu
- Menu发生了不确定的颜色变化
- icon调整

Progress
- 文档调整

Radio
- disable文字颜色变化

Slider
- disable颜色变化
- 文档内容变化

Step
- icon调整
- 字体颜色调整

Table
- 表头调整

Tree
- 间距调整

Drawer
- 调整icon
- 调整分割线颜色

Modal
- 调整icon
- 调整icon位置

Collapse
- 调整icon

Cascader
- 调整icon

## 0.10.10

统一调整：

调整对@osui/icons的依赖：
- 单包组件移除@osui/icons的依赖，更改为@osui/theme，@osui/icloud-theme对icon的依赖，原因是，不同主题对应的icon包不同，若组件中依赖需要依赖两个不同的包

iCloud主题调整：

osui-icons 图标默认大小由 16px 改为 14px，因为字体大小调整为12px

Tree
- 调整展开图标大小
- 调整TreeNode间距

Table
- 表格高度调整到40px
- 标题font-weight:normal
- 分页间距调整为10px
- 去掉表头下边框
- 修复连接颜色
- 调整checkbox样式
- 调整expandable样式
- checkbox和expandable共同出现时的顺序

Message
- 调整了倒计时与x的间距

Form
- 调整了lable的颜色
- 调整了组件border的颜色

Slider
- 增加inputNumber的demo
- 增加mark，并调整样式
- 去掉type，改用BrandProvider

Modal
- 调整confirm按钮的样式

Cascader
- 调整级联选择字体颜色
- icon颜色
- 下拉宽度

Button
- 调整了icon的大小
- 增加了带icon的size的demo

Collapse
- 调整面板标题文字字号应为12px
- 禁用面板缺少底色背景#F5F5F5

Drawer
- 调整标题字号应为16px

Progress
- 调整文字字号为14px
- 调整圆形线宽10px

Breadcrumb
- 调整文字颜色

Radio
- 已勾选样式内圆为10px

-----

OSC主题调整：

Table
- 标题font-weight:600

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


# OSUI THEME

## 0.13.0
- 调整为新色盘

# iCloud Theme

## 0.12.6
- js暴露颜色变量

## 0.12.5
- 颜色调整还没有最终确认，调整回来
