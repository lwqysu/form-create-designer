import {localeProps} from '../../utils';

const label = 'FC折叠面板';
const name = 'fcCollapse';

export default {
    menu: 'layout',
    icon: 'icon-collapse',
    label,
    name,
    drag: true,
    mask: false,
    event: ['change'],
    rule() {
        return {
            type: name,
            props: {},
            style: {
                width: '100%',
            },
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'switch',
            field: 'accordion'
        }, {
            type: 'input',
            field: 'options',
            props: {
                type: 'textarea'
            }
        }]);
    }
};