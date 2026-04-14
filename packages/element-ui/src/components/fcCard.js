import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-card',
    name: 'FC卡片',
    icon: 'el-icon-s-management',
    rule() {
        return {
            type: 'FC-card',
            field: '',
            title: 'FC卡片',
            info: '',
            props: {
                header: '',
                footerText: '',
                footerLink: ''
            },
            children: []
        };
    },
    props() {
        return [
            {
                type: 'input',
                field: 'header',
                title: '头部标题'
            },
            {
                type: 'input',
                field: 'footerText',
                title: '底部标题'
            },
            {
                type: 'input',
                field: 'footerLink',
                title: '底部链接'
            }
        ];
    }
};