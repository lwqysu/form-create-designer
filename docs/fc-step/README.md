# fc-step 步骤条

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
direction|显示方向|string|vertical/horizontal|horizontal|w,m,s||
active|设置当前激活步骤|number||0|w,m,s||
current-status|设置当前步骤的状态|string|wait/process/finish/error/success|process|w,m||
finish-status|设置结束步骤的状态|string|wait/process/finish/error/success|finish|w,m||
stepNum|转弯模式下每行的步骤数量|number||6|w|目前试了该属性不起作用|
title|标题|string|||w,m,s||
description|描述性文字|string|||w,m,s||
status|设置当前步骤的状态，不设置则根据 steps 确定状态|string|wait/process/finish/error/success||w,m||
stepNumber|步骤对应的数字|string|||m||
is-last|步骤是否是最后一个|boolean|||m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
