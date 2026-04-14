import FcDesigner from './components/FcDesigner.vue';
import DragTool from './components/DragTool.vue';
import Struct from './components/Struct.vue';
import HtmlEditor from './components/HtmlEditor.vue';
import FnEditor from './components/FnEditor.vue';
import FnInput from './components/FnInput.vue';
import FetchConfig from './components/FetchConfig.vue';
import ConfigItem from './components/style/ConfigItem.vue';
import FieldInput from './components/FieldInput.vue';
import EventConfig from './components/EventConfig.vue';
import FnConfig from './components/FnConfig.vue';
import Validate from './components/Validate.vue';
import DragBox from './components/DragBox.vue';
import Required from './components/Required.vue';
import TableOptions from './components/TableOptions.vue';
import TreeOptions from './components/TreeOptions.vue';
import SignaturePad from './components/SignaturePad.vue';
import FcTitle from './components/FcTitle.vue';
import FcInputTagPreview from './components/FcInputTagPreview.vue';
import TableFormColumnView from './components/tableForm/TableFormColumnView.vue';
import SizeInput from './components/style/SizeInput.vue';
import ColorInput from './components/style/ColorInput.vue';
import StyleConfig from './components/style/StyleConfig.vue';
import LanguageInput from './components/language/LanguageInput.vue';
import ValueInput from './components/ValueInput.vue';
import FCRow from './components/FCRow.vue';
import FCCol from './components/FCCol.vue';
import FCCard from './components/FCCard.vue';
import FCCollapse from './components/FCCollapse.vue';
import FCCollapseItem from './components/FCCollapseItem.vue';
import FCTabs from './components/FCTabs.vue';
import FCTabItem from './components/FCTabItem.vue';
import formCreate, {designerForm} from './utils/form';
import FcEditor from '@form-create/component-wangeditor';
import draggable from 'vuedraggable/src/vuedraggable';
import AuiWeb from '@agree/aui-plus/es/aui-web'
import '@agree/aui-plus/aui-web/theme-chalk/index.css'
// import AuiWeb from '@agree/aui-web';
// import FcAuiWeb from 'fc-aui-web';
import {
    compareVersion,
    copyTextToClipboard,
    getInjectArg,
    localeOptions,
    localeProps,
    makeOptionsRule,
    makeRequiredRule,
    makeTreeOptions,
    makeTreeOptionsRule,
    toJSON
} from './utils/index';
import globalUseLocale, {t} from './utils/locale';
import './style/index.css';
import './style/icon.css';
import './utils/highlight/style.css';
import menus from './config/menu';
import dragRuleList from './config/index';

const addComponent = (id, component, previewComponent) => {
    designerForm.component(id, previewComponent || component);
    formCreate.component(id, component);
}

designerForm.component('draggable', draggable);
designerForm.component('DragTool', DragTool);
designerForm.component('DragBox', DragBox);
designerForm.component('Validate', Validate);
designerForm.component('Struct', Struct);
designerForm.component('HtmlEditor', HtmlEditor);
designerForm.component('FetchConfig', FetchConfig);
designerForm.component('FnEditor', FnEditor);
designerForm.component('FnInput', FnInput);
designerForm.component('Required', Required);
designerForm.component('TableOptions', TableOptions);
designerForm.component('TreeOptions', TreeOptions);
designerForm.component('TableFormColumn', TableFormColumnView);
designerForm.component('EventConfig', EventConfig);
designerForm.component('ColorInput', ColorInput);
designerForm.component('SizeInput', SizeInput);
designerForm.component('StyleConfig', StyleConfig);
designerForm.component('LanguageInput', LanguageInput);
designerForm.component('ConfigItem', ConfigItem);
designerForm.component('FieldInput', FieldInput);
designerForm.component('FnConfig', FnConfig);
designerForm.component('ValueInput', ValueInput);
addComponent('FcEditor', FcEditor);
addComponent('FcTitle', FcTitle);
addComponent('SignaturePad', SignaturePad);
designerForm.component('fcInputTag', FcInputTagPreview);

// 注册 FC 布局组件 - 使用 Element UI 原生组件作为预览
designerForm.component('fcRow', FCRow);
designerForm.component('fcCol', FCCol);
designerForm.component('fcCard', FCCard);
designerForm.component('fcCollapse', FCCollapse);
designerForm.component('fcTabs', FCTabs);
designerForm.component('fcTabItem', FCTabItem);
// 同时注册带连字符的格式以确保兼容性
designerForm.component('FC-row', FCRow);
designerForm.component('FC-col', FCCol);
designerForm.component('FC-card', FCCard);
designerForm.component('FC-collapse', FCCollapse);
designerForm.component('FC-collapse-item', FCCollapseItem);
designerForm.component('FC-tabs', FCTabs);
designerForm.component('FC-tab-item', FCTabItem);

const install = function (Vue) {
    Vue.component('FcDesigner', FcDesigner);
    Vue.use(AuiWeb);
    // Vue.use(FcAuiWeb);
};

const addMenu = function (menu, before) {
    if (!Array.isArray(menu)) {
        menu = [menu];
    }
    if (before) {
        menus.unshift(...menu);
    } else {
        menus.push(...menu);
    }
}

const addDragRule = function (dragRule, before) {
    if (!Array.isArray(dragRule)) {
        dragRule = [dragRule];
    }
    if (before) {
        dragRuleList.unshift(...dragRule);
    } else {
        dragRuleList.push(...dragRule);
    }
}

FcDesigner.install = install;
FcDesigner.makeOptionsRule = makeOptionsRule;
FcDesigner.copyTextToClipboard = copyTextToClipboard;
FcDesigner.getInjectArg = getInjectArg;
FcDesigner.localeOptions = localeOptions;
FcDesigner.localeProps = localeProps;
FcDesigner.makeRequiredRule = makeRequiredRule;
FcDesigner.makeTreeOptions = makeTreeOptions;
FcDesigner.makeTreeOptionsRule = makeTreeOptionsRule;
FcDesigner.toJSON = toJSON;
FcDesigner.formCreate = formCreate;
FcDesigner.designerForm = designerForm;
FcDesigner.component = addComponent;
FcDesigner.useLocale = globalUseLocale;
FcDesigner.addMenu = addMenu;
FcDesigner.addDragRule = addDragRule;
FcDesigner.t = t;

FcDesigner.utils = {
    copyTextToClipboard,
    getInjectArg,
    localeOptions,
    localeProps,
    makeOptionsRule,
    makeRequiredRule,
    makeTreeOptions,
    makeTreeOptionsRule,
    toJSON
}

const minVersion = '3.2.24';

if (compareVersion(minVersion, formCreate.version) === 1) {
    console.warn('Please use FormCreate version ' + minVersion + ' or greater, see https://github.com/xaboy/form-create.');
}

FcDesigner.version = '3.4.0';

if (typeof window !== 'undefined') {
    window.FcDesigner = FcDesigner;
}

export default FcDesigner;

export {
    formCreate,
    designerForm,
    install,
    copyTextToClipboard,
    getInjectArg,
    localeOptions,
    localeProps,
    makeOptionsRule,
    makeRequiredRule,
    makeTreeOptions,
    makeTreeOptionsRule,
    addDragRule,
    addMenu,
    toJSON
};
