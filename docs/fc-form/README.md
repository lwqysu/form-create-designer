# fc-form 表单

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
model|表单数据对象|object|||w||
rules|表单验证规则|object|||w||
inline|行内表单模式|boolean|true/false|false|w||
label-position|表单域标签的位置|string|right/left/top|right|w||
label-width|表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值|string|||w||
label-suffix|表单域标签的后缀|string|||w||
show-message|是否显示校验错误信息|boolean|true/false|true|w||
status-icon|是否在输入框中显示校验结果反馈图标|boolean|true/false|false|w||
validate-on-rule-change|是否在 rules 属性改变后立即触发一次验证|boolean|true/false|true|w||
size|用于控制该表单内组件的尺寸|string|medium/small/mini||w||
disabled|是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效|boolean|true/false|false|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
validate|任一表单项被校验后触发|被校验的表单项 prop 值，校验是否通过|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
validate|对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise|Function(callback: Function(boolean, object))|w||
validateField|对部分表单字段进行校验的方法|Function(prop: string, callback: Function(errorMessage: string))|w||
resetFields|对整个表单进行重置，将所有字段值重置为初始值并移除校验结果|-|w||
clearValidate|移除整个表单的校验结果|-|w||
