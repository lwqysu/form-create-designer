# fc-dropdown 下拉菜单

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
type|菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)|string|||w||
size|菜单尺寸，在split-button为 true 的情况下也对触发按钮生效|string|medium/small/mini||w||
split-button|下拉触发元素呈现为按钮组|boolean|true/false|false|w||
placement|菜单弹出位置|string|top/top-start/top-end/bottom/bottom-start/bottom-end|bottom-end|w||
trigger|触发下拉的行为|string|hover/click|hover|w||
options|下拉选项数组|array|||w||
label|下拉菜单label名称|string|||w||

## options属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
value|指令|string/number/object|||w||
disabled|禁用|boolean|true/false|false|w||
divided|显示分割线|boolean|true/false|false|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
click|split-button 为 true 时，点击左侧按钮的回调|—|w||
selected|点击菜单项触发的事件回调|dropdown-item 的指令|w||
visible-change|下拉框出现/隐藏时触发|出现则为 true，隐藏则为 false|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
