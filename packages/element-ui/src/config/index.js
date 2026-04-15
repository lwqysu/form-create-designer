import radio from './rule/radio';
import fcRadio from './rule/fcRadio';
import checkbox from './rule/checkbox';
import fcCheckBox from './rule/fcCheckBox';
import input from './rule/input';
import fcInput from './rule/fcInput';
import textarea from './rule/textarea';
import fcTextarea from './rule/fcTextarea';
import password from './rule/password';
import fcPassword from './rule/fcPassword';
import number from './rule/number';
import fcNumberInput from './rule/fcNumberInput';
import fcCounter from './rule/fcCounter';
import select from './rule/select';
import fcSelect from './rule/fcSelect';
import _switch from './rule/switch';
import fcSwitch from './rule/fcSwitch';
import slider from './rule/slider';
import fcSlider from './rule/fcSlider';
import time from './rule/time';
import fcTime from './rule/fcTime';
import timeRange from './rule/timeRange';
import date from './rule/date';
import fcDate from './rule/fcDate';
import dateRange from './rule/dateRange';
import rate from './rule/rate';
import fcRate from './rule/fcRate';
import color from './rule/color';
import FCRow from './rule/fcRow';
import divider from './rule/divider';
import cascader from './rule/cascader';
import fcCascader from './rule/fcCascader';
import upload from './rule/upload';
import fcUpload from './rule/fcUpload';
import transfer from './rule/transfer';
import fcTransfer from './rule/fcTransfer';
import tree from './rule/tree';
import fcTree from './rule/fcTree';
import alert from './rule/alert';
import text from './rule/text';
import fcText from './rule/fcText';
import FCTabs from './rule/fcTabs';
import button from './rule/button';
import fcButton from './rule/fcButton';
import editor from './rule/editor';
import FCCard from './rule/fcCard';
import FCCollapse from './rule/fcCollapse';
import treeSelect from './rule/treeSelect';
import tag from './rule/tag';
import fcTag from './rule/fcTag';
import fcInputTag from './rule/fcInputTag';
import html from './rule/html';
import image from './rule/image';
import signaturePad from './rule/signaturePad';
import title from './rule/title';
import FCTabItem from './rule/fcTabItem';
import FCCollapseItem from './rule/fcCollapseItem';
import FCCol from './rule/fcCol';


const ruleList = [
    input, fcInput,
    textarea, fcTextarea,
    password, fcPassword,
    number, fcNumberInput, fcCounter,
    radio, fcRadio,
    checkbox, fcCheckBox,
    select, fcSelect,
    _switch, fcSwitch,
    rate, fcRate,
    time, fcTime, timeRange,
    slider, fcSlider,
    date, fcDate, dateRange,
    color,
    cascader, fcCascader,
    upload, fcUpload,
    transfer, fcTransfer,
    tree, fcTree,
    treeSelect, editor, signaturePad,
    alert,
    button, fcButton,
    text, fcText,
    title, html, divider,
    tag, fcTag, fcInputTag,
    image, FCRow, FCCard, FCCollapse,FCCollapseItem, FCTabs,
    FCTabItem, FCCol,
];

export default ruleList;

export function defaultDrag(rule) {
    return {
        icon: rule.field ? 'icon-input' : 'icon-cell',
        label: rule.field || rule.type,
        name: '_',
        mask: true,
        handleBtn: ['delete'],
        rule() {
            return rule;
        },
        props() {
            return [];
        }
    }
}
