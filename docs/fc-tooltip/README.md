# fc-tooltip 文字提示

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
effect|默认提供的主题|String|dark/light|dark|w||
content|显示的内容，也可以通过slot#content传入 DOM|String|||w||
placement|Tooltip 的出现位置|String|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|bottom|w||
disabled|Tooltip 是否可用|Boolean|true/false|false|w||
popper-options|popper.js 的参数|Object||{boundariesPadding: 10, gpuAcceleration: false}|w|参考popper.js文档|
enterable|鼠标是否可进入到 tooltip 中|Boolean|true/false|true|w||
hide-after|Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏|number||0|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
content|展示多行文本或者是设置文本内容的格式|w||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
