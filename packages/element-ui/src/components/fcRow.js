import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-row',
    name: 'FC栅格行',
    icon: 'el-icon-s-grid',
    rule() {
        return {
            type: 'FC-row',
            field: '',
            title: 'FC栅格行',
            info: '',
            props: {
                gutter: 0,
                type: '',
                justify: 'start',
                align: 'top',
                orient: 'horizontal',
                wrap: '',
                direction: ''
            },
            children: []
        };
    },
    props() {
        return [
            {
                type: 'number',
                field: 'gutter',
                title: '栅格间隔',
                value: 0
            },
            {
                type: 'select',
                field: 'type',
                title: '布局模式',
                options: [
                    {value: 'flex', label: 'flex'}
                ]
            },
            {
                type: 'select',
                field: 'justify',
                title: '水平排列方式',
                options: [
                    {value: 'start', label: 'start'},
                    {value: 'end', label: 'end'},
                    {value: 'center', label: 'center'},
                    {value: 'space-around', label: 'space-around'},
                    {value: 'space-between', label: 'space-between'}
                ]
            },
            {
                type: 'select',
                field: 'align',
                title: '垂直排列方式',
                options: [
                    {value: 'top', label: 'top'},
                    {value: 'middle', label: 'middle'},
                    {value: 'bottom', label: 'bottom'}
                ]
            },
            {
                type: 'select',
                field: 'orient',
                title: '排布方向',
                options: [
                    {value: 'horizontal', label: 'horizontal'},
                    {value: 'vertical', label: 'vertical'}
                ]
            },
            {
                type: 'input',
                field: 'wrap',
                title: 'flex-wrap属性'
            },
            {
                type: 'input',
                field: 'direction',
                title: 'flex-direction属性'
            }
        ];
    }
};