# fc-input 输入框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
type|类型|string|text/number/password|text|w,m,s||
max-length|最大输入长度|number|||s||
placeholder|输入框占位文本|string|||w,m,s||
disabled|禁用|boolean|true/false|false|w,m,s||
prefix-text|输入框头部文字|string|||w,m|在插槽prefix实现|
suffix-text|输入框尾部文字|string|||w,m|在插槽suffix实现|
readonly|原生属性，是否只读|boolean|true/false|false|w,m||
label|输入框关联的label文字|string|||w,m|m=AuiInput_title,s=TextArea_labelName|
position|label位置|string|left/top|left|w||
popover-type|弹出提示类型|string|phone/amount/account/||w||
popover-title|弹出提示标题|string|||w||
popover-content|弹出提示内容|string|||w||
visible|是否显示|boolean|true/false|true|w,m||
requisite|是否必输|boolean|true/false|false|w,m|m=AuiInput_required|
validator-test|校验规则|function/regexp|||w,m||
prompt-information|校验错误提示语|string|||w,m|m=AuiInput_error-message|
picture|picture校验|string|||w|m=AuiInput_text-align,AuiInput-masks=NumberInput_decimal,Currency-input_decimal,Currency-input_align,isNumeric,digitalGroupSpacing,digitalGroupSpacingSymbol,integerMaxLengthpicture需要支持居中对其|
symbol|必输标记|string||*|w||
is-sql|是否sql过滤|boolean|true/false|true|w||
back-trigger|是否向上触发blur事件|boolean|true/false|false|w||
is-type|内置验证器，支持email,id-card,china-mobile,, 同样也支持直接传函数, 需要同步返回一个对象{valid:true}或者{valid:false, msg:错误信息}|string/function|||m|m=AuiInput_is-type|
debounce|debounce用以限制change事件触发。如果你需要根据用户输入做ajax请求，建议开启以节省无效请求和服务器资源，单位为毫秒|number|||m|m=AuiInput_debounce|

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
blur|在 Input 失去焦点时触发|(event: Event)|w,m,s||
focus|在 Input 获得焦点时触发|(event: Event)|w,m,s||
change|在 Input 值改变时触发|(value: string/number)|w,m,s||
enter|input输入完成后点击enter(确认)事件|(value, $event)|m||
click-error-icon|点击错误图标时触发，你可以关闭 should-toast-error 然后用这个事件来自定义显示错误的提示内容|(error)|m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
focus|使 input 获取焦点||m||
setDisabled|设置input是否可用||w,m||
setVisible|设置input是否可见||w,m||
setRequisite|设置input是否必输||w,m||
setReadonly|设置input是否只读||w,m||
hideErrorMsg|隐藏错误信息||w||
showErrorMsg|显示错误信息||w||
