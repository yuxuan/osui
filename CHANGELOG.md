# Change log

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