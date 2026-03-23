# fc-switch 滑动开关

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
disabled|是否禁用|boolean||false|w,m,s||
value-map|用于自定义 false 和 true 映射的实际值，用于方便处理比如接口返回了 0 1 这类非 boolean 值的情况|array||[false, true]|w,m||
active-color|switch 打开时的背景色|string||#409EFF|w,m,s||
inactive-color|switch 关闭时的背景色|string||#C0CCDA|w,m,s||
v-model|表单值, 使用v-model绑定|boolean||false|w,m,s||
title|标签文字|string|||m||
inline-desc|标签下的描述性文字|String|||m||
prevent-default|阻止点击时自动设定值|boolean||false|m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|switch 状态发生变化时的回调函数|新状态的值|w,m,s||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
