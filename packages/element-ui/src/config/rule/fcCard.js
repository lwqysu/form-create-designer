import {localeProps} from '../../utils';

const label = 'FC卡片';
const name = 'fcCard';

export default {
    menu: 'layout',
    icon: 'icon-card',
    label,
    name,
    drag: true,
    inside: false,
    mask: false,
    rule({t}) {
        return {
            type: name,
            props: {
                header: t('com.' + name + '.name')
            },
            style: {
                width: '100%'
            },
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'input',
            field: 'header',
        }, {
            type: 'input',
            field: 'footerText',
        }, {
            type: 'input',
            field: 'footerLink',
        }]);
    }
};