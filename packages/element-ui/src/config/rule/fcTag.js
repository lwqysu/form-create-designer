import {localeOptions, localeProps} from '../../utils';
import {createFieldLoad, createFieldParse, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC标签';
const name = 'fcTag';

export default {
    menu: 'aide',
    icon: 'icon-tag',
    label,
    name,
    mask: true,
    event: ['close'],
    rule({t}) {
        return {
            type: 'elTag',
            title: '',
            native: true,
            children: [t('com.' + name + '.name')]
        };
    },
    loadRule: createFieldLoad('elTag', {
        aliases: [{field: 'backgroundColor', prop: 'color'}]
    }),
    parseRule: createFieldParse([{field: 'backgroundColor', prop: 'color'}]),
    watch: {
        ...createFieldWatch({
            aliases: [{field: 'backgroundColor', prop: 'color'}]
        }),
        formCreateNative({value, rule}) {
            if (value) {
                rule.title = '';
            }
        }
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
                    {label: 'success', value: 'success'},
                    {label: 'info', value: 'info'},
                    {label: 'warning', value: 'warning'},
                    {label: 'danger', value: 'danger'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'switch',
                field: 'closable'
            },
            {
                type: 'switch',
                field: 'disableTransitions'
            },
            {
                type: 'select',
                field: 'size',
                options: localeOptions(t, [
                    {label: 'medium', value: 'medium'},
                    {label: 'small', value: 'small'},
                    {label: 'mini', value: 'mini'}
                ], 'com.' + name + '.options')
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'ColorInput',
                field: 'backgroundColor'
            }
        ]);
    }
};
