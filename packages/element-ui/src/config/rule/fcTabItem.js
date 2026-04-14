import {localeProps} from '../../utils';

const label = 'FC标签页项';
const name = 'fcTabItem';

export default {
    menu: 'layout',
    name,
    label,
    drag: true,
    dragBtn: false,
    inside: true,
    mask: false,
    rule() {
        return {
            type: name,
            props: {
                label: '标签页',
                name: ''
            },
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'input', field: 'label'},
            {type: 'input', field: 'name'},
            {type: 'switch', field: 'disabled'},
            {type: 'switch', field: 'closable'},
            {type: 'input', field: 'badgeLabel'},
            {type: 'input', field: 'badgeBackground'},
            {type: 'input', field: 'badgeColor'}
        ]);
    }
};