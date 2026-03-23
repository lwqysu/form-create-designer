# fc-dialog 对话框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
visible|是否显示 Dialog，支持 .sync 修饰符|boolean|true/false|false|w,m||
show-minus|是否显示最小化|boolean|true/false|true|w||
show-full-icon|是否显示全屏图标|boolean|true/false|false|w||
title|Dialog 的标题，也可通过具名 slot （见下表）传入|string|||w,m||
fullscreen|是否为全屏 Dialog|boolean|true/false|false|w||
close-on-click-modal|是否可以通过点击 modal 关闭 Dialog|boolean|true/false|true|w,m||
close-on-press-escape|是否可以通过按下 ESC 关闭 Dialog|boolean|true/false|true|w||
show-close|是否显示关闭按钮|boolean|true/false|true|w,m||
before-close|关闭前的回调，会暂停 Dialog 的关闭|function(done)，done 用于关闭 Dialog|||w,m||
center|是否对头部和底部采用居中布局|boolean|true/false|false|w||
dialog-drag|可拖动头部|boolean|true/false|false|w||
mask-z-index|遮罩层 z-index 值|number/string||1000|m||
is-focus|是否需要焦点控制|boolean|||w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
hide|Dialog 关闭的回调|—|w,m||
show|Dialog 打开的回调|—|w,m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
—|Dialog 的内容|w,m||
title|Dialog 标题区的内容|w,m||
footer|Dialog 按钮操作区的内容|w,m||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
