# fc-navmenu 导航菜单

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
mode|模式|string|horizontal/vertical|vertical|w||
collapse|是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）|boolean|true/false|false|w||
background-color|菜单的背景色（仅支持 hex 格式）|string||#ffffff|w||
text-color|菜单的文字颜色（仅支持 hex 格式）|string||#303133|w||
active-text-color|当前激活菜单的文字颜色（仅支持 hex 格式）|string||#409EFF|w||
active-background-color|当前激活菜单的背景颜色（仅支持 hex 格式）|string||#409EFF|w||
default-active|当前激活菜单的 index|string|||w||
default-openeds|当前打开的sub-menu的 key 数组|Array|||w||
unique-opened|是否只保持一个子菜单的展开|boolean|true/false|false|w||
menu-trigger|子菜单打开的触发方式(只在 mode 为 horizontal 时有效)|string||hover|w||
click-item-open|点击子选项是否关闭全部子菜单|boolean|true/false|true|w||
isSpreadMode|垂直状态，平铺时子菜单是否悬浮。|boolean|true/false|false|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
select|菜单激活回调|index: 选中菜单项的 index, indexPath: 选中菜单项的 index path|w||
open|sub-menu 展开的回调|index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path|w||
close|sub-menu 收起的回调|index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
open|展开指定的 sub-menu|index: 需要打开的 sub-menu 的 index|w||
close|收起指定的 sub-menu|index: 需要收起的 sub-menu 的 index|w||
