# fc-radio 单选框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
disabled|是否禁用|boolean||false|w,m,s||
options|可选列表，可以用字符串组成的数组或者 key=>value 的形式|Array|||w,m,s||
label|label文字|string|||s||
type|单选框类型|string|radio/button|radio|w||
v-model|表单值，使用v-model绑定|string|||w,m,s||

## options属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
label|Radio的显示的值|string|||w,m||
value|Radio的value值|string/number/boolean|||w,m||
disabled|是否禁用|boolean||false|w,m||
border|是否显示边框|boolean||false|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|绑定值变化时触发的事件|选中的 Radio label 值|w,m,s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
each-item|自定义如何显示每一项|m||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
