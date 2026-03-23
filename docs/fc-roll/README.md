# fc-roll 滚动公告栏

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
step|数值越大速度滚动越快|Number||1|w,m||
options|滚动的数据对象||||w,m|在 m 端是 aui-roll-item 的形式，在 w 端是 data 收起来的形式|
title|公告栏标题|String||-|w,m||
height|自定义高度(px)|Number||30|w,m|m=item-height|
hoverStop|是否启用鼠标 hover 控制|Boolean||true|w,m||
direction|滚动方向|string|up/down/left/right|1|w,m|m=direction|
interval|切换时间间隔|Number||1000(ms)|w,m|m=interval|
autoPlay|是否自动播放使用 switch 切换时候需要置为 false|Boolean||true|w,m||
duration|切换动画的持续时间|Number||400|w,m|新版的w端和m端已经统一成了 duration|

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
ScrollEnd|一次滚动完成的回调事件||w,m,s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
default|内容插槽|w,m||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
