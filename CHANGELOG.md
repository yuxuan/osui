# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://gitee.com/gitee-fe/osui/compare/v1.0.0-beta.1...v1.1.1) (2021-08-05)


### Bug Fixes

* 当treeData格式的table没有children时,不展示expandIcon ([2ebe438](https://gitee.com/gitee-fe/osui/commits/2ebe43817933d3d954cb8e04f9c942e9a767caaf))
* 调整collapse,table可以适配antd4.16.6 ([7c5fbb3](https://gitee.com/gitee-fe/osui/commits/7c5fbb37c89eae4e22499b388aef2b4311b21fff))
* 调整input, 增加table的testcase ([e3d9551](https://gitee.com/gitee-fe/osui/commits/e3d9551289e6c5158574b1f5a30bdd7dc57e8a26))
* 调整select, autocomplete的样式问题 ([dd86eae](https://gitee.com/gitee-fe/osui/commits/dd86eae06efc0c3629a8e41d05f861bbd24320dd))
* 调整tab ([9835c5e](https://gitee.com/gitee-fe/osui/commits/9835c5e6326ebd23f943940e3dc08ee602af71aa))
* 冻结规范样式调整 ([8d795b8](https://gitee.com/gitee-fe/osui/commits/8d795b8ebc6355ae8094f4c1e3252b6c50989c2f))
* 面包屑展示前两个item ([f379497](https://gitee.com/gitee-fe/osui/commits/f379497a9cd8580c6f37cedb14323a87f89d4cec))
* 修复less统一使用@{ant-prefix} ([3a48dbf](https://gitee.com/gitee-fe/osui/commits/3a48dbf9f9da18e242e3a162208b4469da6f760b))
* 修复modal-confirm内不带icon加载时样式错乱问题 ([8134581](https://gitee.com/gitee-fe/osui/commits/8134581a14e2aa20ec24ee2639d43ba380d981b3))
* 修复modal-confirm内加载带icon的组件时样式错乱问题 ([832f14b](https://gitee.com/gitee-fe/osui/commits/832f14b9eed769f1a71c34aafabe39e6ef0c2322))
* 修复quickedit build的问题 ([7ea81e1](https://gitee.com/gitee-fe/osui/commits/7ea81e1b046d4705cb4eb8c4d3f4ad8b74430aab))
* 修复select箭头和清除按钮位置错位的问题 ([17e1194](https://gitee.com/gitee-fe/osui/commits/17e1194ad81405fd5f058a6d46f7672e42342f1c))
* 修复space 4.16.6的支持 ([73a2b9e](https://gitee.com/gitee-fe/osui/commits/73a2b9e9c596a9a9b060b5c7cb552e67c19a80dd))
* 修复tree-select build的问题 ([b40888b](https://gitee.com/gitee-fe/osui/commits/b40888bc460526a558d7ced22f914f7161fd44b5))
* 修复tree-select选中颜色 ([6000504](https://gitee.com/gitee-fe/osui/commits/6000504f550ff71b716c4b5b246be720bfbfa56d))
* 修复Treeselect.TreeNode丢失的问题 ([ff546bb](https://gitee.com/gitee-fe/osui/commits/ff546bb6be9f978268ce181266765966e64e5056))
* 修复webpack@5.46.0 svg inline格式错误的问题 ([9936ac5](https://gitee.com/gitee-fe/osui/commits/9936ac5a5a219725ec4fd0c4c4dfdde11b1ff9bc))
* 增加quick-edit ([d35ffb7](https://gitee.com/gitee-fe/osui/commits/d35ffb72d6ec4a3499de111462880d4444138c3b))
* 增加rate的调整 ([7f4ad04](https://gitee.com/gitee-fe/osui/commits/7f4ad042882e6f2eaf5598c6555b98dbb18c64f1))
* 重构message组件 ([544bd7f](https://gitee.com/gitee-fe/osui/commits/544bd7f8dd023809bf694d5fb0d5c268b237198b))
* back-top调整 ([197c1b8](https://gitee.com/gitee-fe/osui/commits/197c1b8a54c5ed692408d9451ea5cabfff852e0e))
* button 调整 ([5531fec](https://gitee.com/gitee-fe/osui/commits/5531fecc42a755ce002960fd93df102d30fb2cb9))
* Button classname修复, flexcenter增加说明 ([f9b4474](https://gitee.com/gitee-fe/osui/commits/f9b44748933bbde83a6f0a5f2e73bede60d261e0))
* button face disabled样式调整 ([347f570](https://gitee.com/gitee-fe/osui/commits/347f5704a097bbb014fe6ca4dc57dcf2ec3ac571))
* button loading 添加flexcentered ([1646429](https://gitee.com/gitee-fe/osui/commits/164642960e04da7f8dd2b96036af8485a2f978c6))
* checkbox 样式调整 ([0ce34ad](https://gitee.com/gitee-fe/osui/commits/0ce34ad7c94f5c230ebd8266cf896224ece3d158))
* collapse调整 ([6bd5bd5](https://gitee.com/gitee-fe/osui/commits/6bd5bd5f1e9093363209faf748e8220f08792798))
* datepicker导出完整属性 ([7349e2a](https://gitee.com/gitee-fe/osui/commits/7349e2a7287e730ed7f73353162ff01bd9eb968e))
* Datepicker类型修复 ([f0439f1](https://gitee.com/gitee-fe/osui/commits/f0439f1edbadecec5ec4305b9309485db1b63ed7))
* form 报错时不在添加额外的margin-top ([76835a7](https://gitee.com/gitee-fe/osui/commits/76835a780ec605dc919ec322d86ec5b2e6e492e9))
* form svg变成inline的在less中 ([0eac47e](https://gitee.com/gitee-fe/osui/commits/0eac47ec2aeebc37a4c02a5f2970cb8fead62aa6))
* gap默认为4px, space修复nest时候的间距 ([00cf204](https://gitee.com/gitee-fe/osui/commits/00cf2045fbaf9bf4190f12851b45fd3602fb8b1a))
* input 样式 ([27571ed](https://gitee.com/gitee-fe/osui/commits/27571ed46443ff32db3b195a8a4bc45749c4f2e5))
* input onsearch透传的问题 ([1e0666a](https://gitee.com/gitee-fe/osui/commits/1e0666aecebbda4c9fae20dbf8d4ce578cebf6b6))
* input去掉select时高亮 ([f1f9724](https://gitee.com/gitee-fe/osui/commits/f1f97240aaaef618e8432fb5997b667c348ec158))
* input样式问题调整 ([eb4855a](https://gitee.com/gitee-fe/osui/commits/eb4855abed35e439d34ac1b6c83b7db9bb452018))
* input组合select放小到28px ([94bc966](https://gitee.com/gitee-fe/osui/commits/94bc9660e5fa90315e5190f3861df68f5da3e7b8))
* joyride修复primaryButton卡住滚动, 增加hideStepSize属性 ([1cd40aa](https://gitee.com/gitee-fe/osui/commits/1cd40aa4c984901898d58a121de741a35966d12b))
* Menu Table TreeSelect用hoistNonReactStatic提升属性 ([2030784](https://gitee.com/gitee-fe/osui/commits/2030784a48712ed5b442e4d819fe55933ae46a9e))
* message 距离顶部51px确保在内容区域内 ([5c578fd](https://gitee.com/gitee-fe/osui/commits/5c578fd2b4ec4132bfaf6ea1ff2fdc666fe9b76f))
* message移出alert的依赖 ([025b550](https://gitee.com/gitee-fe/osui/commits/025b550a5daac6d07b5c3c6e5ebaa7aca0ed45e6))
* Modal footer错位问题修复 ([bff550a](https://gitee.com/gitee-fe/osui/commits/bff550a6e9d94b9dfa3507081a01f25c7c30b4b9))
* radio disabled border ([7856860](https://gitee.com/gitee-fe/osui/commits/78568607c53b6c082288850a17c2fffafc0e9848))
* radio样式调整 ([a32b9d0](https://gitee.com/gitee-fe/osui/commits/a32b9d0b5b3e75052e64b5d87844e066516a4401))
* re-export Menu.Divider ([6d05acc](https://gitee.com/gitee-fe/osui/commits/6d05accc934649f9a4a2d3959880e7fbead7e130))
* searchIcon替换, 主题变量调整 ([10f58ab](https://gitee.com/gitee-fe/osui/commits/10f58abe9c84598e92c69ac63f16d3e52d97308c))
* select dropdown autocomplete ([8ff54b2](https://gitee.com/gitee-fe/osui/commits/8ff54b2b749c16e0887a155827f121ac0b4811f1))
* select dropdown autocomplete 下拉样式调整 ([55651a1](https://gitee.com/gitee-fe/osui/commits/55651a11096aa057592d5fb9806a1b2e20698a45))
* select样是调整 ([102c8c3](https://gitee.com/gitee-fe/osui/commits/102c8c36656423ac8795fe6645a1ef99516f2f06))
* switch 调整 ([3e29a3e](https://gitee.com/gitee-fe/osui/commits/3e29a3eb7aea8f8953204b1d780f62c135cf2475))
* table expand icon 修复 ([e20476b](https://gitee.com/gitee-fe/osui/commits/e20476ba6ffb56424e59b47533613b7ff9f71ccf))
* table调整 ([8b38be6](https://gitee.com/gitee-fe/osui/commits/8b38be69b6dd7af4c4f4266b80706a6451504ab3))
* tree-select type ([fcdfa4d](https://gitee.com/gitee-fe/osui/commits/fcdfa4d4102216c882be245a1a715f5ecaaf849e))





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
