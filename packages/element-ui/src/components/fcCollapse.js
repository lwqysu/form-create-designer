import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-collapse',
    name: 'FC折叠面板',
    icon: 'el-icon-s-unfold',
    rule() {
        return {
            type: 'FC-collapse',
            field: '',
            title: 'FC折叠面板',
            info: '',
            props: {
                accordion: false,
                options: [
                    {
                        name: '1',
                        title: '面板1',
                        value: false
                    },
                    {
                        name: '2',
                        title: '面板2',
                        value: false
                    }
                ]
            },
            children: []
        };
    },
    props() {
        return [
            {
                type: 'switch',
                field: 'accordion',
                title: '是否手风琴模式',
                value: false
            },
            {
                type: 'textarea',
                field: 'options',
                title: '折叠面板条目',
                value: JSON.stringify([
                    {
                        name: '1',
                        title: '面板1',
                        value: false
                    },
                    {
                        name: '2',
                        title: '面板2',
                        value: false
                    }
                ], null, 2)
            }
        ];
    }
};