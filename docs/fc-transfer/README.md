# fc-transfer 穿梭框

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
data|Transfer 的数据源|array[{ key, label, disabled }]||[ ]|w||
filterable|是否可搜索|boolean|true/false|false|w||
filter-placeholder|搜索框占位符|string||请输入搜索内容|w||
filter-method|自定义搜索方法|function|||w||
titles|自定义列表标题|array||['列表 1', '列表 2']|w||
button-texts|自定义按钮文案|array||[ ]|w||
render-content|自定义数据项渲染函数|function(h, option)|||w||
format|列表顶部勾选状态文案|object{noChecked, hasChecked}||{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }|w||
props|数据源的字段别名|object{key, label, disabled}|||w||
left-default-checked|初始状态下左侧列表的已勾选项的 key 数组|array||[ ]|w||
right-default-checked|初始状态下右侧列表的已勾选项的 key 数组|array||[ ]|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
change|右侧列表元素变化时触发|当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |
left-footer|左侧列表底部的内容|w||
right-footer|右侧列表底部的内容|w||

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
clear|清空某个面板的搜索关键词|'left' / 'right'，指定需要清空的面板|w||
