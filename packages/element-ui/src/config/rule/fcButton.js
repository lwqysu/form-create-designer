import {localeOptions, localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC按钮';
const name = 'fcButton';

export default {
    menu: 'aide',
    icon: 'icon-button',
    label,
    name,
    mask: true,
    event: ['click'],
    rule({t}) {
        return {
            type: 'elButton',
            props: {},
            children: [t('com.' + name + '.name')],
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'formCreateChild'
            },
            {
                type: 'select',
                field: 'type',
                options: localeOptions(t, [
                    {label: 'primary', value: 'primary'},
                    {label: 'success', value: 'success'},
                    {label: 'warning', value: 'warning'},
                    {label: 'danger', value: 'danger'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'switch',
                field: 'plain'
            },
            {
                type: 'switch',
                field: 'loading'
            },
            {
                type: 'switch',
                field: 'disabled'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'inputNumber',
                field: 'cornerRadius',
                props: {min: 0}
            },
            {
                type: 'inputNumber',
                field: 'throttleTime',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'label'
            }
        ]);
    }
};
