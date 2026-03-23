# fc-table 表格

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
table-columns|表头数据,数组中的每一个对象元素代表表格的每一列的属性,这个对象的key可以有：label：表头名 type: 栏位类型，支持4种类型，input，select，date，cascader prop: 列标识，tableData中根据prop来赋值 ifEdit: true为此列可编辑，false为此列不可编辑 ifAmount: true此列为金额列，会自动金额格式化此列数据 isHide: true为此列隐藏，false为此列不隐藏 options: 当type为select时，为此列设置下拉选|对象数组|||w,m,s|s=columns|
table-data|表格数据|对象数组|||w,m,s|s=tableData|
btn-group|操作按钮|对象数组|||w||
picture|输入控制|对象|||w|支持原有picture格式+日期格式|
column-formatter|用来格式化内容|Function(row, column, cellValue)|||w||
is-edit|表格是否可编辑|Boolean|||w||
is-add|表格是否可增加空白行|Boolean|||w||
disabled|表格是否禁用|Boolean|||w||
default-addlength|表格数据为空时默认增加可编辑数据条数,is-add=true生效|Number||5|w||
cols-hide|隐藏的列数据|array|||w,m||
combination-key|表格绑定的快捷键列表|array|||w||
highlight-current-row|是否要高亮当前行|boolean||true|w||
auto-add-row|空白表格是否自动添加空白行|Boolean||true|w||
empty-text|空数据时显示的文本内容，也可以通过 slot="empty" 设置|String||暂无数据|w,m,s|s=errorContent|
show-summary|是否在表尾显示合计行|Boolean||false|w||
summary-method|自定义的合计计算方法|Function({ columns, data })|||w||
column-align|对齐方式|String|left/center/right|left|w,m,s|金额固定右对齐|
pagination-page-size|分页组件每页显示条目个数|Number||10|w||
pagination-current-page|分页组件当前页数，支持 .sync 修饰符|Number||1|w,s|s=pagingIndex|
pagination-layout|分页组件组件布局，子组件名用逗号分隔|String|sizes/prev/pager/next/jumper/->/total/slot|prev, pager, next, jumper, ->, total|w,s||
pagination-page-sizes|分页组件每页显示个数选择器的选项设置|Number[]||[10, 20, 30, 40, 50, 100]|w,s||
pagination-prev-text|分页组件替代图标显示的上一页文字|string|||w||
pagination-next-text|分页组件替代图标显示的下一页文字|string|||w||
pagination-show|内置分页器是否显示|boolean||false|w,s||
table-pagination|外置分页组件|Object|||||

## tablePagination属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
pagination-background|分页组件是否为分页按钮添加背景色|Boolean||false|w,s||
pagination-page-size|分页组件每页显示条目个数|Number||10|w,m,s||
pagination-total|分页组件总条目数|Number|||w,m,s||
pagination-current-page|分页组件当前页数，支持 .sync 修饰符|Number||1|w,m,s||
pagination-layout|分页组件组件布局，子组件名用逗号分隔|String|sizes, prev, pager, next, jumper, ->, total, slot|'prev, pager, next, jumper, ->, total'|w,s||
pagination-page-sizes|分页组件每页显示个数选择器的选项设置|Number[]||[10, 20, 30, 40, 50, 100]|w,s||
pagination-disabled|分页组件是否禁用|boolean||false|w,m,s||

## table-columns属性 tableHeadData 支持特殊表头(多表头)

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
type|对应列的类型。如果设置了 selection 则显示多选框;如果设置了 radio 则显示单选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮|string|selection/index/expand/date/input/cascader/select/amounts:selection||w,s||
para-file|type=select生效|string|||删除|fc保留|
list-name|下拉列表的枚举项名称|string|||删除|fc保留|
options|type=select,cascader生效|string[]|||w||
is-edit|列是否可编辑|boolean||false|w||
readonly|列是否可读,type=input生效|boolean||false|w||
is-hide|列是否隐藏|boolean||false|w,s||
index|如果设置了 type=index，可以通过传递 index 属性来自定义索引|string, Function(index)||-|w||
label|显示的标题|string|||w,m,s||
prop|对应列内容的字段名，也可以使用 property 属性|string|||w,m,s||
width|对应列的宽度|string|||w,m,s||
min-width|对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列|string|||w||
fixed|列是否固定在左侧或者右侧，true 表示固定在左侧|string, boolean|true, left, right||w||
sortable|对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件|boolean, string|true, false, 'custom'|false|w,m||
sort-method|对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致|Function(a, b)|||w,m||
sort-by|指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推。|String/Array/Function(row, index)|||w,m||
formatter|用来格式化内容|Function(row, column, cellValue)|||w,s||
show-overflow-tooltip|当内容过长被隐藏时显示 tooltip|Boolean||false|w||
align|对齐方式|String|left/center/right|left|w,s||
orderBy|针对数字排序的方案|string|desc/asc||s||
selectable|仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选|Function(row, index)|||w||
spillover|溢出处理策略|string|ellipsis/floding|ellipsis|s||
on-row-click|行点击回调|Function|||s||
select-all|全选回调|Function|||s||
select-change|回调函数，选中某一项触发|Function|||s||
select-group-change|回调函数，任意选中项发生变化时就会触发|Function|||s||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
select-all|当用户手动勾选全选 Checkbox 时触发的事件|selection|w,m,s||
selection-change|当选择项发生变化时会触发该事件|selection|w,m,s||
cell-mouse-enter|当单元格 hover 进入时会触发该事件|row, column, cell, event|w||
cell-mouse-leave|当单元格 hover 退出时会触发该事件|row, column, cell, event|w||
cell-click|当某个单元格被点击时会触发该事件|row, column, cell, event|w,m,s||
cell-dblclick|当某个单元格被双击击时会触发该事件|row, column, cell, event|w||
row-click|当某一行被点击时会触发该事件|row, event, column,index|w,m,s||
row-contextmenu|当某一行被鼠标右键点击时会触发该事件|row, event|w||
row-dblclick|当某一行被双击时会触发该事件|row, event|w||
header-click|当某一列的表头被点击时会触发该事件|column, event|w||
header-contextmenu|当某一列的表头被鼠标右键点击时触发该事件|column, event|w||
sort-change|当表格的排序条件发生变化的时候会触发该事件|{ column, prop, order }|w,m,s||
filter-change|当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。|filters|w||
current-radio-change|仅对 type=radio 的列有效,当用户手动勾选单选模式的 Checkbox 时触发的事件|currentRow, oldCurrentRow|w||
size-change|分页组件中每页显示行数发生变化时触发该事件|每页条数size|w,s||
current-page-change|currentPage 改变时会触发|当前页currentPage|w,s||
clickButton|表格行内按钮触发事件|scope,item|w||
cellBlur|光标离开表格栏位触发此事件|scope,index|w|blur,computedValue等同|
cellChange|表格栏位值发生变化时触发的事件|scope,index|w||
combination|在表格内按表格自定义快捷键触发此事件|currentRow,rowindex, columnindex|w||
previous-page|简单分页工具的上一步的事件回调||w||
next-page|简单分页工具下一步的事件回调||w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |
clearSelection|用于多选表格，清空用户的选择，当使用 reserve-selection 功能的时候，可能会需要使用此方法|selection|w||
toggleRowSelection|用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）|row, selected|w||
setCurrentRadioRow|用于type=radio的单选表格，设定某一行为选中行，如果调用时不加参数，则会取消当前选中行。|row|w||
clearSort|用于清空排序条件，数据会恢复成未排序的状态|—|w||
clearFilter|用于清空过滤条件，数据会恢复成未过滤的状态|—|w||
