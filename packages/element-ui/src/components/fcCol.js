import {localeProps, localeOptions} from '../../utils';

export default {
    type: 'FC-col',
    name: 'FC栅格列',
    icon: 'el-icon-s-grid',
    rule() {
        return {
            type: 'FC-col',
            field: '',
            title: 'FC栅格列',
            info: '',
            props: {
                span: '',
                offset: 0,
                push: 0,
                pull: 0,
                sm: '',
                order: '',
                background: ''
            },
            children: []
        };
    },
    props() {
        return [
            {
                type: 'number',
                field: 'span',
                title: '栅格占据的列数'
            },
            {
                type: 'number',
                field: 'offset',
                title: '栅格左侧的间隔格数',
                value: 0
            },
            {
                type: 'number',
                field: 'push',
                title: '栅格向右移动格数',
                value: 0
            },
            {
                type: 'number',
                field: 'pull',
                title: '栅格向左移动格数',
                value: 0
            },
            {
                type: 'input',
                field: 'sm',
                title: '≥768px 响应式栅格数'
            },
            {
                type: 'input',
                field: 'order',
                title: 'flex的order属性'
            },
            {
                type: 'input',
                field: 'background',
                title: 'col列的背景颜色'
            }
        ];
    }
};