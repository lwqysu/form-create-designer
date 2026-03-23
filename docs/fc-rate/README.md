# fc-rate 评分

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
max|最大分值|number||5|w,m||
disabled|是否为只读|boolean||false|w,m||
allow-half|是否允许半选|boolean||false|w||
colors|icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色|array||['#F7BA2A', '#F7BA2A', '#F7BA2A']|w,m||
sign|评级对应的符号，从输入框字符中选择的符号，若为图标请使用 icons 属性|string||★|m||
icons|icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名|array||['aui-icon-star-on', 'aui-icon-star-on','aui-icon-star-on']|w,m||
void-icon-class|未选中 icon 的类名|string||aui-icon-star-off|w,m||
show-text|是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容|boolean||false|w,m||
show-score|是否显示当前分数，show-score 和 show-text 不能同时为真|boolean||false|w,m||
texts|辅助文字数组|array||['极差', '失望', '一般', '满意', '惊喜']|w,m||
space|间隙值|number||2|w,m||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|分值改变时触发|改变后的分值|w,m||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
