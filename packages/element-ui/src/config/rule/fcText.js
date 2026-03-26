import {localeOptions, localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC文本文字';
const name = 'fcText';

export default {
    menu: 'aide',
    icon: 'icon-span',
    label,
    name,
    rule({t}) {
        return {
            type: 'div',
            title: '',
            native: true,
            style: {
                whiteSpace: 'pre-line',
                width: '100%',
            },
            children: [t('com.' + name + '.name')],
        };
    },
    watch: {
        formCreateNative({value, rule}) {
            if (value) {
                rule.title = '';
            }
        }
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch', field: 'formCreateNative', props: {
                    activeValue: false,
                    inactiveValue: true,
                },
                control: [{value: false, rule: ['formCreateTitle']}]
            },
            {
                type: 'input',
                field: 'formCreateTitle',
            },
            {
                type: 'input',
                field: 'formCreateChild',
                props: {
                    type: 'textarea'
                }
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'select',
                field: 'align',
                options: localeOptions(t, [
                    {label: 'right', value: 'right'},
                    {label: 'center', value: 'center'},
                    {label: 'justify', value: 'justify'}
                ], 'com.' + name + '.options')
            }
        ]);
    }
};
