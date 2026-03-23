# fc-cascader 级联选择

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
readonly|是否只读|Boolean|true/false|false|w,m||
label|输入框说明|String|||w,m||
disabled|是否禁用|Boolean|true/false|false|w,m||
visible|是否显示|Boolean|true/false|true|w,m||
requisite|是否必输|Boolean|true/false|false|w||
placeholder|输入框中提示|String||请选择|w,m||
symbol|必输标记|String||*|w,m||
position|label位置|String|left/top|left|w||
back-trigger|是否向上触发blur事件|Boolean|true/false|false|w||
options|可选项数据源，键名可通过 props 属性配置|array|||w,m,s||
props|配置选项，具体见下表|object|||w,m,s||
v-model|选中项绑定值v-model|array|||w,m,s||
clearable|是否支持清空选项|boolean||false|w||
expand-trigger|次级菜单的展开方式|string|click/hover|click|w||
filterable|是否可搜索选项|boolean|||w||
before-filter|筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选|function(value)|||w,m||
debounce|搜索关键词输入的去抖延迟，毫秒|number||300|w,m||
change-on-select|是否允许选择任意一级的选项|boolean||false|w||
inline-desc|标题下的描述|string|||m||
popoverType|悬浮类类型|string|||w||
popoverTitle|悬浮类标题|String|||w||
promptInformation|错误提示|String|||w||
popoverContent|悬浮内容|String|||w||
multiple|是否多选|Boolean|||w||
validatorTest|校验规则|Functionunction|||w||
title|展示标题||||s|自助aui-cascader-picker使用|

## props属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
value|指定选项的值为选项对象的某个属性值|string|||w||
label|指定选项标签为选项对象的某个属性值|string|||w||
children|指定选项的子选项为选项对象的某个属性值|string|||w||
disabled|指定选项的禁用为选项对象的某个属性值|string|||w||
checked|指定选项的是否为选中状态||||w||
indeterminate|指定选项的是否为半选中状态||||w||
first-letter-field|数据源中首字母字段的字段名||||s|自助aui-cascader-picker使用|

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
active-item-change|当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用||w||
change|值变化是触发||w,m||
show|弹窗出现时触发||m||
hide|弹窗关闭时触发||m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
getLabel|获取通过label获取对应的value|—|w||
