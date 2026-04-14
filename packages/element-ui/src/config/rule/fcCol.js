import {localeProps} from '../../utils';

const label = 'FC格子';
const name = 'fcCol';

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
            props: {span: 12},
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'slider', field: 'span', value: 12, props: {min: 0, max: 24}},
            {type: 'slider', field: 'offset', props: {min: 0, max: 24}},
            {type: 'slider', field: 'push', props: {min: 0, max: 24}},
            {type: 'slider', field: 'pull', props: {min: 0, max: 24}},
            {type: 'input', field: 'order'},
            {type: 'input', field: 'background'}
        ]);
    }
};