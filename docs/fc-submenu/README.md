# fc-submenu 子菜单

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
index|唯一标志|string|||w||
disabled|是否禁用|boolean|true/false|false|w||
body-height|设置submenu的高度和窗口高度一致|boolean|true/false|false|w||
showSearch|是否显示搜索框|boolean|true/false|false|w||
fetch-suggestions|搜索框进行搜索时的调用方法(showSearch为true时添加才会被调用，与aui-autocomplete组件的使用方法一致)|Function||-|w||
menu-data|搜索框搜索的数据|Array||-|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
select|选择某一项搜索结果时的回调(showSearch为true时添加才会被调用)|menu-data中的某一项|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
