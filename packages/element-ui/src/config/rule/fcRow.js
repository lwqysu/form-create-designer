import {localeProps} from '../../utils';

const label = 'FC栅格布局';
const name = 'fcRow';

export default {
    menu: 'layout',
    icon: 'icon-row',
    label,
    name,
    drag: false,
    mask: false,
    children: 'fcCol',
    childrenLen: 2,
    rule() {
        return {
            type: name,
            props: { type: 'flex' },
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'inputNumber',
            field: 'gutter',
            props: {min: 0}
        }, {
            type: 'select',
            field: 'type',
            options: [{
                label: 'default',
                value: 'default'
            }, {
                label: 'flex',
                value: 'flex'
            }]
        }, {
            type: 'select',
            field: 'justify',
            options: [{
                label: 'start',
                value: 'start'
            }, {
                label: 'end',
                value: 'end'
            }, {
                label: 'center',
                value: 'center'
            }, {
                label: 'space-around',
                value: 'space-around'
            }, {
                label: 'space-between',
                value: 'space-between'
            }]
        }, {
            type: 'select',
            field: 'align',
            options: [{
                label: 'top',
                value: 'top'
            }, {
                label: 'middle',
                value: 'middle'
            }, {
                label: 'bottom',
                value: 'bottom'
            }]
        }, {
            type: 'select',
            field: 'orient',
            options: [{
                label: 'horizontal',
                value: 'horizontal'
            }, {
                label: 'vertical',
                value: 'vertical'
            }]
        }, {
            type: 'input',
            field: 'wrap'
        }, {
            type: 'input',
            field: 'direction'
        }]);
    }
};