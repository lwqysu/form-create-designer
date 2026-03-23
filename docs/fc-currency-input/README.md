# fc-currency-input 金额输入框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
v-model|绑定值|string/number|||s|v-model与value相同功能|
value|绑定值|string/number|||s|v-model与value相同功能|
placeholder|占位提示文字|string||请输入|s||
minlength|文本最小长度|number|||s||
maxlength|文本最大长度|number|||s||
disabled|是否禁用|boolean|true/false|false|s||
size|文本框尺寸|text|small/normal/large|noraml|s||
align|文本对齐方式|text|left/center/right|left|s||
max|金额最大值|number||9007199254740991 2^53 − 1|s||
min|金额最小值|number||−9007199254740991 (−(2^53 − 1))|s||
leading-zero|前导零，为了对齐使用，e.g.000,001|string|allow/deny|allow|s||
currency-symbol|货币符号|string|||s||
currency-symbol-placement|货币符号布局，即显示在输入额前或者后|string|p/s|p|s|p为前置,s为后置|
decimal|小数点后保留位数|number|||s|计划改为decimal-counts|
digital-group-spacing|数字分割位数|number||3|s|计划修改为delimiter|
digital-group-spacing-symbol|数字分隔符号|string||,|s||
integer-max-length|整数部分最大长度|number|||||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
blur|失去焦点时触发|Event|s||
focus|获得焦点时触发|Event|s||
input|文本改变时触发|value（改变之后的值）|s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
focus|主动将焦点设置到此元素|--|s||
blur|主动将焦点设置出此元素|--|s||
