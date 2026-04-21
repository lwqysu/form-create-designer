
export function formTemplate(json, options) {
    return `<template>
  <form-create
    v-model="formData"
    v-model:api="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
</template>

<script>
import formCreate from "@form-create/element-ui";

export default {
  components: {
    formCreate: formCreate.$form()
  },
  data () {
    const option = formCreate.parseJson('${options.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}');
    return {
      formData: {},
      fapi: null,
      rule: formCreate.parseJson('${json.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}'),
      option: option
    }
  },
  methods: {
    onSubmit (formData) {
      //todo 提交表单
    }
  }
}
<\/script>`
}

export function formTemplateV3(json, options) {
    return `<template>
  <form-create
    v-model="formData"
    v-model:api="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
</template>

<script setup>
import {ref} from "vue";
import formCreate from "@form-create/element-ui";

const option = ref(formCreate.parseJson('${options.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}'));
const rule = ref(formCreate.parseJson('${json.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}'));
const fapi = ref(null);
const formData = ref({});

const onSubmit =  (formData) => {
  //todo 提交表单
}
<\/script>`
}


export function htmlTemplate(json, options) {
    return `<html lang="zh">
    <head>
        <meta charset="UTF-8">
        <!-- Import style -->
        <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css"/>
        <!-- Import Vue 3 -->
        <script src="https://unpkg.com/vue@3"></script>
        <!-- Import element-plus -->
        <script src="https://unpkg.com/element-plus"></script>
        <!-- Import formCreate -->
        <script src="https://unpkg.com/@form-create/element-ui@3"></script>
        <script src="https://unpkg.com/@form-create/designer@3"></script>
    </head>
    <body>
        <div id="app">
            <form-create :rule="rule" :option="options" v-model="formData" v-model:api="api" @submit="onSubmit"></form-create>
        </div>
        <script>
            const App = {
                data() {
                    return {
                        rule: formCreate.parseJson('${json.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}'),
                        options: formCreate.parseJson('${options.replaceAll('\\', '\\\\').replaceAll('\'', '\\\'')}'),
                        formData: {},
                        api: null,
                    };
                },
                methods: {
                    onSubmit(formData){
                        console.log('submit', formData);
                    }
                }
            };
            const app = Vue.createApp(App);
            app.use(ElementPlus).use(formCreate);
            app.mount("#app");
        </script>
    </body>
</html>`
}

export function sfcTemplate(json, options) {
    const rule = JSON.parse(json);
    const option = JSON.parse(options || '{}');
    
    // 生成模板部分
    const template = generateTemplateWithForm(rule, option);
    
    // 生成 script 部分
    const script = generateScript(rule);
    
    return `<template>
${template}
</template>

${script}

<style scoped>
</style>`;
}

// 组件类型映射
const componentMap = {
    'input': 'fc-input',
    'fcInput': 'fc-input',
    'counter': 'fc-counter',
    'fcCounter': 'fc-counter',
    'select': 'fc-select',
    'fcSelect': 'fc-select',
    'radio': 'fc-radio',
    'fcRadio': 'fc-radio',
    'checkbox': 'fc-check-box',
    'fcCheckBox': 'fc-check-box',
    'date': 'fc-date',
    'fcDate': 'fc-date',
    'time': 'fc-time',
    'fcTime': 'fc-time',
    'switch': 'fc-switch',
    'fcSwitch': 'fc-switch',
    'slider': 'fc-slider',
    'fcSlider': 'fc-slider',
    'rate': 'fc-rate',
    'fcRate': 'fc-rate',
    'upload': 'fc-upload',
    'fcUpload': 'fc-upload',
    'text': 'fc-text',
    'fcText': 'fc-text',
    'button': 'fc-button',
    'fcButton': 'fc-button',
    'card': 'fc-card',
    'fcCard': 'fc-card',
    'row': 'fc-row',
    'fcRow': 'fc-row',
    'col': 'fc-col',
    'fcCol': 'fc-col',
    'tabs': 'fc-tabs',
    'fcTabs': 'fc-tabs',
    'tab-item': 'fc-tab-item',
    'fcTabItem': 'fc-tab-item',
    'collapse': 'fc-collapse',
    'fcCollapse': 'fc-collapse',
    'collapse-item': 'fc-collapse-item',
    'fcCollapseItem': 'fc-collapse-item',
    'textarea': 'fc-text-area',
    'fcTextarea': 'fc-text-area',
    'password': 'fc-password',
    'fcPassword': 'fc-password',
    'number-input': 'fc-number-input',
    'fcNumberInput': 'fc-number-input',
    'input-tag': 'fc-input-tag',
    'fcInputTag': 'fc-input-tag',
    'cascader': 'fc-cascader',
    'fcCascader': 'fc-cascader',
    'transfer': 'fc-transfer',
    'fcTransfer': 'fc-transfer',
    'tree': 'fc-tree',
    'fcTree': 'fc-tree',
    'tag': 'fc-tag',
    'fcTag': 'fc-tag'
};

function generateTemplateWithForm(rule, option) {
    const formOptions = option.form || {};
    const formProps = {
        inline: formOptions.inline || false,
        hideRequiredAsterisk: formOptions.hideRequiredAsterisk || false,
        labelPosition: formOptions.labelPosition || 'right',
        size: formOptions.size || 'default',
        labelWidth: formOptions.labelWidth || '125px',
        ref: 'form',
        model: 'formData',
        'submit.prevent': true
    };
    
    const formPropsStr = Object.entries(formProps)
        .map(([key, value]) => {
            if (typeof value === 'boolean') {
                return `${key}="${value}"`;
            } else if (key === 'submit.prevent') {
                return `@${key}`;
            } else {
                return `${key}="${value}"`;
            }
        })
        .join(' ');
    
    let template = `  <el-form ${formPropsStr}>`;
    
    // 生成表单项
    rule.forEach(item => {
        const componentType = item._fc_drag_tag || item.type;
        const componentName = componentMap[componentType];
        
        if (componentName) {
            // 生成表单项标签
            let formItemProps = [];
            if (item.title) {
                formItemProps.push(`label="${item.title}"`);
            }
            if (item.field) {
                formItemProps.push(`prop="${item.field}"`);
            }
            
            const formItemPropsStr = formItemProps.length > 0 ? ' ' + formItemProps.join(' ') : '';
            template += `
    <el-form-item${formItemPropsStr}>`;
            
            // 生成组件标签
            let componentProps = [];
            
            // 添加 v-model
            if (item.field) {
                componentProps.push(`v-model="formData.${item.field}"`);
            }
            
            // 添加其他属性
            if (item.props) {
                Object.entries(item.props).forEach(([key, value]) => {
                    // 跳过必输标记属性
                    if (key === 'symbol' && value === '*') {
                        return;
                    }
                    if (key !== 'children' && value !== undefined && value !== null) {
                        // 只添加用户实际设置的属性，跳过默认值
                        if (value !== false && value !== '' && value !== 0 && value !== null) {
                            if (typeof value === 'boolean') {
                                componentProps.push(`${key}="${value}"`);
                            } else if (typeof value === 'number') {
                                componentProps.push(`:${key}="${value}"`);
                            } else if (typeof value === 'string') {
                                componentProps.push(`${key}="${value}"`);
                            } else if (typeof value === 'object') {
                                componentProps.push(`:${key}="${JSON.stringify(value)}"`);
                            }
                        }
                    }
                });
            }
            
            // 添加占位符属性（如果有）
            if (item.placeholder && item.placeholder !== '') {
                componentProps.push(`placeholder="${item.placeholder}"`);
            }
            
            const propsStr = componentProps.length > 0 ? ' ' + componentProps.join(' ') : '';
            
            if (item.children && item.children.length > 0) {
                // 有子组件
                template += `
      <${componentName}${propsStr}>
`;
                template += generateComponentChildren(item.children);
                template += `      </${componentName}>`;
            } else {
                // 无自闭合
                template += `
      <${componentName}${propsStr} />`;
            }
            
            template += `
    </el-form-item>`;
        }
    });
    
    // 添加提交和重置按钮
    template += `
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>`;
    
    return template;
}

function generateComponentChildren(children) {
    let template = '';
    children.forEach(item => {
        const componentType = item._fc_drag_tag || item.type;
        const componentName = componentMap[componentType];
        
        if (componentName) {
            let componentProps = [];
            
            if (item.field) {
                componentProps.push(`v-model="formData.${item.field}"`);
            }
            
            if (item.props) {
                Object.entries(item.props).forEach(([key, value]) => {
                    // 跳过必输标记属性
                    if (key === 'symbol' && value === '*') {
                        return;
                    }
                    if (key !== 'children' && value !== undefined && value !== null) {
                        if (value !== false && value !== '' && value !== 0 && value !== null) {
                            if (typeof value === 'boolean') {
                                componentProps.push(`${key}="${value}"`);
                            } else if (typeof value === 'number') {
                                componentProps.push(`:${key}="${value}"`);
                            } else if (typeof value === 'string') {
                                componentProps.push(`${key}="${value}"`);
                            } else if (typeof value === 'object') {
                                componentProps.push(`:${key}="${JSON.stringify(value)}"`);
                            }
                        }
                    }
                });
            }
            
            const propsStr = componentProps.length > 0 ? ' ' + componentProps.join(' ') : '';
            
            if (item.children && item.children.length > 0) {
                template += `
        <${componentName}${propsStr}>
`;
                template += generateComponentChildren(item.children);
                template += `        </${componentName}>`;
            } else {
                template += `
        <${componentName}${propsStr} />`;
            }
        } else if (typeof item === 'string') {
            template += `
        ${item}`;
        }
    });
    return template;
}

function generateScript(rule) {
    // 提取字段名
    const fields = [];
    rule.forEach(item => {
        if (item.field) {
            fields.push(item.field);
        }
        if (item.children && item.children.length > 0) {
            extractFields(item.children, fields);
        }
    });
    
    // 生成表单数据
    let formData = '';
    fields.forEach((field, index) => {
        formData += "  " + field + ": ''";
        if (index < fields.length - 1) {
            formData += ",\n";
        }
    });
    
    return `<script setup>
import { ref, reactive } from 'vue'

const form = ref(null)
const formData = reactive({
${formData}
})

const submitForm = async () => {
  if (!form.value) return
  
  try {
    await form.value.validate()
    console.log('submit', formData)
    // 这里可以添加提交逻辑
  } catch (error) {
    console.error('验证失败:', error)
  }
}

const resetForm = () => {
  if (!form.value) return
  form.value.resetFields()
}
</script>`;
}

function extractFields(children, fields) {
    children.forEach(item => {
        if (item.field) {
            fields.push(item.field);
        }
        if (item.children && item.children.length > 0) {
            extractFields(item.children, fields);
        }
    });
}
