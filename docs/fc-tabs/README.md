# fc-tabs 标签页

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
type|风格类型|string|tab-bar/card/border-card|tab-bar|w||
closable|标签是否可关闭|boolean||false|w||
addable|标签是否可增加|boolean||false|w||
v-model|绑定值，选中选项卡的 name|string||第一个选项卡的 name|w,m,s||
position|选项卡所在位置|string|top/right/bottom/left|top|w,m||
bar-color|设置底部bar颜色|String|||w,m||
active-text-color|选中时文字颜色|String|||w,m,s||
default-text-color|默认文字颜色|String|||w,m,s||
disabled-text-color|不可点击时文字颜色|String|||w,m||

## fc-tab-item标签属性(w端为 aui-tab-panel,m端为 aui-tab-item)

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
label|选项卡标题|string|||w,m,s||
name|与选项卡 activeName 对应的标识符，表示选项卡别名|string||该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'|w,m,s||
disabled|是否禁用|boolean||false|w,m,s||
closable|标签是否可关闭|boolean||false|w||
badge-label|徽标文字|string|||m||
badge-background|徽标背景颜色|String|||m||
badge-color|徽标文字颜色|String|||m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
tab-click|tab 被选中时触发|被选中的标签 tab 实例|w,m,s|m端为item-click，建议统一为 tab-click|
tab-remove|点击 tab 移除按钮后触发|被删除的标签的 name|w||
tab-add|点击 tabs 的新增按钮后触发|—|w||
tab-changed|tab切换时触发的事件|（newIndex，oldIndex）|s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
