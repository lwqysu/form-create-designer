# fc-upload 上传

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 适用渠道 | 备注 |
| ----- | :-------- | ---- | ---- | ---- | ---- | :---- |
action|必选参数，上传的地址|string|||w||
headers|设置上传的请求头部|object|||w||
multiple|是否支持多选文件|boolean|||w||
data|上传时附带的额外参数|object|||w||
file-name|上传的文件字段名|string||file|w||
with-credentials|支持发送 cookie 凭证信息|boolean|true/false|false|w||
show-file-list|是否显示已上传文件列表|boolean|true/false|true|w||
drag|是否启用拖拽上传|boolean|true/false|false|w||
accept|接受上传的文件类型（thumbnail-mode 模式下此参数无效）|string|||w||
on-preview|点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据|function(file)|||w||
on-remove|文件列表移除文件时的钩子|function(file, fileList)|||w||
on-success|文件上传成功时的钩子|function(response, file, fileList)|||w||
on-error|文件上传失败时的钩子|function(err, file, fileList)|||w||
on-progress|文件上传时的钩子|function(event, file, fileList)|||w||
on-change|文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用|function(file, fileList)|||w||
before-upload|上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。|function(file)|||w||
before-remove|删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。|function(file, fileList)|||w||
list-type|文件列表的类型|string|text/picture/picture-card|text|w||
auto-upload|是否在选取文件后立即进行上传|boolean|true/false|true|w||
file-list|上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]|array||[]|w||
http-request|覆盖默认的上传行为，可以自定义上传的实现|function|||w||
disabled|是否禁用|boolean|true/false|false|w||
limit|最大允许上传个数|number|||w||
on-exceed|文件超出个数限制时的钩子|function(files, fileList)||-|w||

## 事件

| 事件名称 | 说明 | 回调参数 | 适用渠道 | 备注 |
| ------ | :-------- | :---- | ---- | :---- |
clear|清空已上传的文件列表（该方法不支持在 before-upload 中调用）|—|w||
abort|取消上传请求|（ file: fileList 中的 file 对象 ）|w||

## 插槽

| 插槽名称 | 说明 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | :---- |

## 方法

| 方法名称 | 说明 | 参数 | 适用渠道 | 备注 |
| ------ | :-------- | ---- | ---- | :---- |

## 例子
```
<fc-upload
    :disabled="isDel"
    :before-upload="handleBeforeUpload"
    :fileType="fileType2"
    :fileCount="1"
    :serverFilePath="serverFilePath"
    :localFilePath="localFilePath"
    :fileSize="fileSize2"
    :fileArray="serverFileList"
    :on-error="handleError"
    :on-cover="handleCover"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    :on-exceed="handleExceed"
    :on-remove="handleRemove"
    @outSize="handleOutSize"
    ref="upload"
>
    <div slot="tip" class="aui-upload__tip">
    只能上传mp4/webm/ogg文件，且不超过{{ fileSize2 }}M
    </div>
</fc-upload>
```
###方法及解释
```
data(){
    return {
        fileType: [
        "*.zip;*.rar;*.doc;*.docx;*.xlsx;*.xls;*.pdf;*.cvs",
      ],
      //服务器文件路径
      serverFilePath:"",
      //本地路径
      localFilePath: [],
      //服务器文件集合
      serverFileList: [],
    }
    
}
methods:{
/**
 * 上传前的操作，可以在这儿处理好文件上传服务器的地址
 */
async handleBeforeUpload(file) {
    
    console.log("beforeupload", file);
},
/**
 *处理文件上传失败方法
 */
handleError(e) {
    this.pushInfo(e.errmsg);
    this.uploadSuccess = false;
},
/**
 *移除前，参数为要移除的文件
 */
async beforeRemove(file, fileList) {
    let res = await this.pushConfirm("TEC373", "是", "否", file.fileName);
    return res;
},
/**
 *上传成功后的方法，参数为上传的文件列表
 */
async handleSuccess(fileList) {
    this.pushInfo("TEC262");
    console.log("列表", fileList);
    this.uploadSuccess = true;
    this.fileName = fileList[0].fileName;
    await this.uploadTxtFile();
},
/**
 *超出最大数
 */
handleExceed() {
    this.pushInfo("TEC263");
},
/**
 *处理移除的方法，参数为要删除的文件，可进行本地删除和将服务器删除（自己实现)
 */
async handleRemove(file, fileList) {
    if (!file.status) {
    //文件未上传时不处理
    this.$refs["upload"].delete(file);
    //删除列表显示
    return;
    }
    //文件已上传时
    this.uploadSuccess = false;
    try {
    let filePath = "";
    if (this.dm.DOC_TYP_CD == "3") {
        this.baseServerPath = this.baseServerPath2;
    } else {
        this.baseServerPath = "file/knowledge/";
    }
    if (file.filePath.indexOf(this.baseServerPath) > -1) {
        ///此种类型未修改时删除
        filePath = file.filePath;
    } else {
        //新增时删除
        filePath = this.serverFilePath + file.fileName;
    }
    this.communication(ServicesNames.DELETESERVERFILE, {
        OpType: "1",
        FilePath: filePath,
    });
    this.$refs["upload"].delete(file); //删除列表显示
    } catch (e) {
    this.$refs["upload"].delete(file);
    //删除列表显示
    return;
    }
},
/**
 *处理文件超出大小
 */
handleOutSize(name, limit, size) {
    this.pushInfo("TEC372", name, limit);
},
}

```
## 注意事项
  1. abc的aui-properties的fileHttpUrl配置应该本地配置或服务器配置(地址可以和aase直连地址相同，但是地址后需要加上'/')
