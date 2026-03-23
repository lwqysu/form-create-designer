# fc-header 头部组件

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
showBack|是否显示返回文字|Boolean||true|m||
backText|返回文字|String||Back|m||
preventGoBack|是否阻止返回|Boolean||false|m||
title|标题|String|||m||
showMore|是否显示右侧的更多图标|Boolean||false|m||
rightHtml|header右侧显示的文本内容，如果showMore存在则不显示|String||——|m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
click-more|点击右侧更多时触发||m||
click-back|当left-options.preventGoBack为true时点击左边返回时触发||m||
click-title|点击标题时触发||m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
left|左侧部分插槽，在返回文字后，不会影响到原有的图标|m||
overwrite-left|重写左侧部分的返回文字及图标|m||
right|右侧部分插槽|w,m||
overwrite-title|标题插槽，用于自定义标题位置内容|w,m||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
