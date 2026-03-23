# fc-select 下拉框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
readonly|是否只读|Boolean|true/false|false|w,m||
popover-title|弹出提示标题|String|||w||
popover-content|弹出提示内容|String|||w||
label|输入框说明|String|||w,m,s||
disabled|是否禁用|Boolean|true/false|false|w,m,s||
visible|是否可见|Boolean|true/false|true|w,m||
requisite|是否必输|Boolean|true/false|false|w,m||
options|下拉框数据|Array||[]|w,m||
placeholder|输入框中提示|String||请选择|w,m,s||
symbol|必输标记|String||*|w||
position|label位置|String|left/top|left|w||
is-vmodel-label|选中的value值是否为label|Boolean|true/false|false|w,m||
back-trigger|是否向上触发blur事件|Boolean|true/false|false|w||
multiple|是否多选|boolean||false|w||
clearable|单选时是否可以清空选项|boolean||false|w||
collapse-tags|多选时是否将选中值按文字的形式展示|boolean||false|w||
multiple-limit|多选时用户最多可以选择的项目数，为 0 则不限制|number||0|w||
filterable|是否可搜索|boolean||false|s||
v-model|表单值，使用v-model绑定|String/Number/Object|||w,m,s||
value-map|设置键值对映射用以自动转换接口数据, 如 ['value', 'label']|array|||m||
max-lines|下拉框的显示条数|Number||5|w,m,s||
validatorTest|校验方法||||w||
promptInformation|提示错误信息||||w||
popover-type|是否悬浮弹出||true/false|false|s||
para-file|下拉选项数据所在的json文件名|String|||w,m,s||
list-name|下拉选项json文件中的key|String|||w,m,s||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
focus|获取焦点触发|—|w,m,s||
blur|失去焦点触发|—|w,m,s||
change|值改变触发|—|w,m,s||
remove-tag|多选模式下移除tag时触发|移除的tag值|w||
clear|可清空的单选模式下用户点击清空按钮时触发|—|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
setDisabled|设置是否可用||w,m|w,m|
setVisible|设置是否可见||w,m|w,m|
setRequisite|设置是否必输||w|w,m|
setReadonly|设置是否只读||w,m|w,m|
