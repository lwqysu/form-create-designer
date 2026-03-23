# fc-form-item 表单项

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
prop|表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的|string|||w|传入 Form 组件的 model 中的字段|
label|标签文本|string|||w||
label-width|表单域标签的的宽度，例如 '50px'|string|||w||
required|是否必填，如不设置，则会根据校验规则自动生成|boolean|true/false|false|w||
rules|表单验证规则|object/array|||w||
error|表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息|string|||w||
show-message|是否显示校验错误信息|boolean|true/false|true|w||
size|用于控制该表单域下组件的尺寸|string|medium/small/mini|-|w||
validateStatus|手动控制校验状态|string||-|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
—|Form Item 的内容|w||
label|标签文本的内容|w||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
resetField|对该表单项进行重置，将其值重置为初始值并移除校验结果|-|w||
clearValidate|移除该表单项的校验结果|-|w||
