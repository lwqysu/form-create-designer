# fc-check-box 多选框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
options|每个选项属性|object|||w,m||
v-model|表单值，使用v-model绑定|string/Array|||w,m,s||
disabled|是否禁用|boolean||false|w,m,s||
min|可被勾选的 checkbox 的最小数量|number|||w,m,s||
max|可被勾选的 checkbox 的最大数量|number|||w,m,s||
label|标题|string|||w,m,s||
requisite|是否为必选|boolean||false|w,m||
indeterminate|代替indeterminate|boolean|||w,s||
position|label 位置，可以设置为 left 或者 right|String||right|w||

## options属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
label|选中状态的显示值（只有在checkbox-group或者绑定对象类型为array时有效）|string/number|||w,m||
value|选中状态的值|string|||w,m||
disabled|是否禁用|boolean||false|w,m||
checked|当前是否勾选|boolean||false|w,m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|当绑定值变化时触发的事件|更新后的值|w,m,s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
