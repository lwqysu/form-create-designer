# fc-progress 进度条

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
percentage|百分比（必填）|number|0-100|0|w,m,s|新版的w端和m端都已经统一成了percent属性|
type|进度条类型|string|line/circle|line|w,m,s|m端需要统一aui-progress 和 aui-circle 组件为type|
stroke-width|进度条的宽度，单位 px|number||6|w,m,s|s=strkeWidth|
stroke-color|线条颜色|string||#3FC7FA|w,m,s|s=strkeColor|
trail-color|背景线条颜色|string||#D9D9D9|w,m,s|s=trackColor|
circle-width|环形进度条画布宽度（只在 type=circle 时可用）|number||126|w,m,s|新版的 w=circle-width|
show-text|是否显示进度条文字内容|boolean||true|w,s||
text-inside|进度条显示文字内置在进度条内（只在 type=line 时可用）|Boolean||false|w,s|s=textInside|
hint|进度条当前状态|string|success/error/warning||w,m,s|w端目前没有 warning / info|
show-cancel|是否显示取消按钮|boolean||true|m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
cancel|点击取消按钮时触发|—|m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
