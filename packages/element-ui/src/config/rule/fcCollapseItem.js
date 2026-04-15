import {localeProps} from '../../utils';

const label = 'FC折叠面板项';
const name = 'elCollapseItem';

export default {
    icon: 'icon-cell',
    label,
    name,
    drag: true,
    dragBtn: false,
    inside: true,
    mask: false,
    rule({t}) {
        return {
            type: name,
            props: {
                title: 'FC折叠面板项'
            },
            style: {},
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'input',
            field: 'title',
        }, {
            type: 'input',
            field: 'name',
        }, {
            type: 'switch',
            field: 'disabled'
        }]);
    }
};
