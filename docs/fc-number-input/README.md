# fc-number-input 数字输入框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
v-model|绑定值|string/number|||s|v-model与value相同功能|
value|绑定值|string/number|||s|v-model与value相同功能|
placeholder|占位提示文字|string||请输入|s||
type|文本框类型|text/password|text/password|text|s|text为正常数字模式，password为密码模式，密码模式也只能输入数字密码|
minlength|文本最小长度|number|||s||
maxlength|文本最大长度|number|||s||
max|数字最大值|number|||s||
decimal|保留小数位数|number|||s|计划修改为decimal-counts|
disabled|是否禁用|boolean|true/false|false|s||
size|文本框尺寸|text|small/normal/large|noraml|s||
align|文本对齐方式|text|left/center/right|left|s||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
blur|失去焦点时触发|Event|s||
focus|获得焦点时触发|Event|s||
input|文本改变时触发|value（改变之后的值）|s||
change|文本改变时触发|value（改变之后的值）|s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
focus|主动将焦点设置到此元素|--|s||
blur|主动将焦点设置出此元素|--|s||
