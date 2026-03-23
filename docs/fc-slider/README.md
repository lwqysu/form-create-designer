# fc-slider 滑块

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
min|最小值|number||0|w,m||
max|最大值|number||100|w,m||
disabled|是否禁用|boolean||false|w,m||
step|步长|number||1|w,m||
show-input|是否显示输入框，仅在非范围选择时有效|boolean||false|w||
show-input-controls|在显示输入框的情况下，是否显示输入框的控制按钮|boolean||true|w||
show-breakpoint|是否显示间断点|boolean||false|w||
show-tooltip|是否显示 tooltip|boolean||true|w||
format-tooltip|格式化 tooltip message|function(value)|||w||
direction|滑块方向|string|horizontal/vertical|horizontal|w,m||
length|滑块长度|string||当滑块为水平模式时默认尽可能占满一行，当为竖向模式时，默认长度为 200px|w,m||
decimal|是否在变化时显示小数|boolean||false|m||
weight|线条宽度|number||6|m|粗细程度仿照font-weight的weight 可用于表示粗细，因为方向分为横竖，用 width 和height 都可能引起歧义|

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）改变后的值||w,m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
