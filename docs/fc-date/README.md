# fc-date 日期框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
popover-type|弹出提示类型|string|phone/amount/account||w||
popover-title|弹出提示标题|string|||w||
popover-content|弹出提示内容|string|||w||
label|输入框说明|string|||w,m||
requisite|是否必输|Boolean|true/false|false|w||
disabled|是否禁用|Boolean|true/false|false|w,m,s||
symbol|必输标记|string||*|w||
position|label位置|string|left/top|left|w||
readonly|是否只读|Boolean|true/false|false|w,m||
placeholder|输入框中提示|String||请输入|w,m,s||
back-trigger|是否向上触发blur事件|Boolean|true/false|false|w||
noinput|只读（不可输入，可以下拉选择日期）|boolean|true/false|true|w||
clearable|是否显示清除按钮|boolean|true/false|true|w||
start-placeholder|范围选择时开始日期的占位内容|string|||w||
end-placeholder|范围选择时结束日期的占位内容|string|||w||
type|显示类型|string|year/month/date/daterange|date|w,m,s|s:year/month/datew:year/month/date/daterange|
format|显示在输入框中的格式|string||yyyy-MM-dd|w,m,s||
onPick|选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效|Function({ maxDate, minDate })|||w||
disabledDate|自定义标记特定日期是否应该禁用，返回 true 表示禁用，false 表示不禁用，不返回表示和原有逻辑一致(这样不影响和 disable-weekend 等禁用属性同时使用)|Function|||w,m,s||
default-time|范围选择时选中日期所使用的当日内具体时刻|string[]|||w|数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00|
value-format|可选，绑定值的格式。不指定则绑定值为 Date 对象|string|||w,m,s||
v-model|表单值, v-model 绑定。当值为空时，为单选；当值为[]时，为多选；设置值为'TODAY'可快捷选取当前日期。placeholder只有在值为空或[]时显示。|String|||w,m,s||
show-popup-header|是否显示弹窗头部，当为多选时强制显示|boolean|true/false||m||
popup-header-title|弹窗头部文字|String|||m||
min-date|最小日期|string|||s||
max-date|最大日期|string|||s||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|用户确认选定的值时触发|组件绑定值。格式与绑定值一致，可受 value-format 控制|w,m,s||
blur|当 input 失去焦点时触发|组件实例|w,s||
focus|当 input 获得焦点时触发|组件实例|w,s||
show|弹窗显示时触发||m|m=Calendar|
hide|弹窗关闭时触发||m|m=Calendar|

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
each-day|用以自定义每一天的显示渲染，推荐使用该 slot 来替代 render-function|m||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
setDisabled|设置input是否可用||w,m||
setVisible|设置input是否可见||w,m||
setRequisite|设置input是否必输||w||
setReadonly|设置input是否只读||w,m||
setPopover|设置悬浮提示||?待确定||
getDates|获取当前日期列表||m||
switchViewToToday|渲染当天所在月份||m||
switchViewToMonth|渲染特定年月日期||m||
switchViewToCurrentValue|渲染当前值所在月份||m||
