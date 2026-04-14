import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-tabs',
    name: 'FC标签页',
    icon: 'el-icon-s-grid',
    rule() {
        return {
            type: 'FC-tabs',
            field: '',
            title: 'FC标签页',
            info: '',
            props: {
                type: 'tab-bar',
                closable: false,
                addable: false,
                'v-model': '1',
                position: 'top',
                barColor: '',
                activeTextColor: '',
                defaultTextColor: '',
                disabledTextColor: ''
            },
            children: [
                {
                    type: 'fc-tab-item',
                    field: 'tab1',
                    title: '标签1',
                    props: {
                        label: '标签1',
                        name: '1'
                    },
                    children: []
                },
                {
                    type: 'fc-tab-item',
                    field: 'tab2',
                    title: '标签2',
                    props: {
                        label: '标签2',
                        name: '2'
                    },
                    children: []
                }
            ]
        };
    },
    props() {
        return [
            {
                type: 'select',
                field: 'type',
                title: '风格类型',
                options: [
                    {value: 'tab-bar', label: 'tab-bar'},
                    {value: 'card', label: 'card'},
                    {value: 'border-card', label: 'border-card'}
                ]
            },
            {
                type: 'switch',
                field: 'closable',
                title: '标签是否可关闭',
                value: false
            },
            {
                type: 'switch',
                field: 'addable',
                title: '标签是否可增加',
                value: false
            },
            {
                type: 'input',
                field: 'v-model',
                title: '绑定值'
            },
            {
                type: 'select',
                field: 'position',
                title: '选项卡所在位置',
                options: [
                    {value: 'top', label: 'top'},
                    {value: 'right', label: 'right'},
                    {value: 'bottom', label: 'bottom'},
                    {value: 'left', label: 'left'}
                ]
            },
            {
                type: 'input',
                field: 'barColor',
                title: '底部bar颜色'
            },
            {
                type: 'input',
                field: 'activeTextColor',
                title: '选中时文字颜色'
            },
            {
                type: 'input',
                field: 'defaultTextColor',
                title: '默认文字颜色'
            },
            {
                type: 'input',
                field: 'disabledTextColor',
                title: '不可点击时文字颜色'
            }
        ];
    }
};