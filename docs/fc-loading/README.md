# fc-loading 加载

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
target|Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点|object/string||document.body|w,m||
body|同 v-loading 指令中的 body 修饰符|boolean||false|w,m||
fullscreen|同 v-loading 指令中的 fullscreen 修饰符|boolean||true|w,m||
text|显示在加载图标下方的加载文案|string|||w,m||
spinner|自定义加载图标类名|string|||w,m||
background|遮罩背景色|string|||w,m||
component|Loading 自定义插槽|vue 文件/组件代码片段|||w,m||
show|显示状态|boolean||false|w,m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
