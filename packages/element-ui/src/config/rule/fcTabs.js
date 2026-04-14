import {localeProps} from '../../utils';

const label = 'FC标签页';
const name = 'fcTabs';

export default {
    menu: 'layout',
    icon: 'icon-tab',
    label,
    name,
    drag: true,
    mask: false,
    event: ['tabClick', 'tabChange', 'tabRemove', 'tabAdd'],
    children: 'fcTabItem',
    rule() {
        return {
            type: name,
            style: {width: '100%'},
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'select',
            field: 'type',
            options: [{
                label: 'tab-bar',
                value: 'tab-bar'
            }, {
                label: 'card',
                value: 'card'
            }, {
                label: 'border-card',
                value: 'border-card'
            }]
        }, {
            type: 'switch',
            field: 'closable'
        }, {
            type: 'switch',
            field: 'addable'
        }, {
            type: 'select',
            field: 'position',
            options: [{
                label: 'top',
                value: 'top'
            }, {
                label: 'right',
                value: 'right'
            }, {
                label: 'bottom',
                value: 'bottom'
            }, {
                label: 'left',
                value: 'left'
            }]
        }, {
            type: 'input',
            field: 'barColor'
        }, {
            type: 'input',
            field: 'activeTextColor'
        }, {
            type: 'input',
            field: 'defaultTextColor'
        }, {
            type: 'input',
            field: 'disabledTextColor'
        }]);
    }
};