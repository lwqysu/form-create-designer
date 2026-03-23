# fc-search 搜索框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
placeholder|输入框占位文本|string||搜索(search)|w,m,s||
disabled|禁用|boolean||false|w,m,s||
v-model|必填值，输入绑定值|string|||w,m,s||
debounce|获取输入建议的去抖延时|number||300|w,m||
options|返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它|Array|||w,m,s||
trigger-on-focus|是否在输入框 focus 时显示建议列表|boolean||true|w||
label|输入框关联的label文字|string|||w,s||
cancel-text|取消文字|String||取消(cancel)|m||
auto-fixed|是否自动固定在顶端|Boolean||true|m||
top|自动固定时距离顶部的距离|String||0px|m||
max-lines|搜索框的显示条数|Number||5|w,m,s||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
select|点击选中建议项时触发|(item)|w,m,s|m=result-click,s=selected|
cancel|点击取消按钮时触发||m||
change|输入文字变化时触发|(value)|s||
focus|输入框获取到焦点时触发||w,m,s|s=inputed|
blur|输入框失去焦点时触发||w,m,s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
setFocus|获取 input 焦点，在 Safari 上你必须在 click 事件回调里使用才能生效||m||
