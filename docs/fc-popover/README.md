# fc-popover 弹出框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
trigger|触发方式|String|click/focus/hover/manual|click|w||
title|标题|String|||w,m||
content|显示的内容，也可以通过 slot 传入 DOM|String|||w,m||
placement|出现位置|String|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|bottom|w,m|w: top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end m:top/bottom/left/right|
disabled|Popover 是否可用|Boolean|true/false|false|w,m||
visible|状态是否可见|Boolean|true/false|false|w|web端手动触发显示需要用到|
popper-options|popper.js 的参数|Object||{ boundariesElement: 'body', gpuAcceleration: false }|w|参考 popper.js 文档|

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
show|显示时触发|—|w,m||
hide|隐藏时触发|—|w,m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
content|Popover 内嵌 HTML 文本|w,m|m=content|
reference|触发 Popover 显示的 HTML 元素|w|m=default|

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
