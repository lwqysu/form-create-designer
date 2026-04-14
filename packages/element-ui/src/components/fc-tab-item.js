import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-tab-item',
    name: 'FC标签页项',
    icon: 'el-icon-s-grid',
    rule() {
        return {
            type: 'FC-tab-item',
            field: '',
            title: 'FC标签页项',
            info: '',
            props: {
                label: '标签页',
                name: '',
                disabled: false,
                closable: false,
                badgeLabel: '',
                badgeBackground: '',
                badgeColor: ''
            },
            children: []
        };
    },
    props() {
        return [
            {
                type: 'input',
                field: 'label',
                title: '选项卡标题'
            },
            {
                type: 'input',
                field: 'name',
                title: '与选项卡 activeName 对应的标识符'
            },
            {
                type: 'switch',
                field: 'disabled',
                title: '是否禁用',
                value: false
            },
            {
                type: 'switch',
                field: 'closable',
                title: '标签是否可关闭',
                value: false
            },
            {
                type: 'input',
                field: 'badgeLabel',
                title: '徽标文字'
            },
            {
                type: 'input',
                field: 'badgeBackground',
                title: '徽标背景颜色'
            },
            {
                type: 'input',
                field: 'badgeColor',
                title: '徽标文字颜色'
            }
        ];
    }
};