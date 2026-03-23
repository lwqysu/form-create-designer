# fc-time 时间框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
readonly|完全只读|boolean|true/false|false|w||
disabled|禁用|boolean|true/false|false|w||
clearable|是否显示清除按钮|boolean|true/false|true|w||
size|输入框尺寸|string|normal/small/large||w||
placeholder|非范围选择时的占位内容|string|||w||
start-placeholder|范围选择时开始日期的占位内容|string|||w||
end-placeholder|范围选择时开始日期的占位内容|string|||w||
is-range|是否为时间范围选择，仅对aui-time-picker有效|boolean|true/false|false|w||
picker-options|当前时间日期选择器特有的选项参考下表|object|||w||
value-format|可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象|string|||w||
default-value|可选，选择器打开时默认显示的时间|Date(TimePicker) / string(TimeSelect)|||w|可被new Date()解析(TimePicker) / 可选值(TimeSelect)|
back-trigger|焦点向上触发事件|boolean|true/false|false|w||
noinput|用户不可输入，但是可以选择日期与readonly不同|boolean|true/false|false|w||
label|日期label名称|string|||w||

## Time Select Options属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
start|开始时间|string||0|w||
end|结束时间|string||1|w||
step|间隔时间|string||0|w||

## Time Picker Options属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
selectable-range|可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']|string / array|||w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|用户确认选定的值时触发|组件绑定值|w||
blur|当 input 失去焦点时触发|组件实例|w||
focus|当 input 获得焦点时触发|组件实例|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
