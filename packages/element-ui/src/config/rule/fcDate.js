import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC日期框';
const name = 'fcDate';

export default {
    menu: 'main',
    icon: 'icon-date',
    label,
    name,
    input: true,
    event: ['change', 'blur', 'focus', 'show', 'hide'],
    validate: false,
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'datePicker',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                type: 'date',
                clearable: true,
                requisite: false,
                symbol: '*',
                position: 'left',
                noinput: true,
                backTrigger: false
            },
        };
    },
    loadRule: createFieldLoad('datePicker', {
        labelField: 'label',
        requisiteField: 'requisite'
    }),
    watch: createFieldWatch({
        labelField: 'label',
        requisiteField: 'requisite'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'readonly'
            },
            {
                type: 'input',
                field: 'placeholder'
            },
            {
                type: 'switch',
                field: 'clearable',
                value: true
            },
            {
                type: 'input',
                field: 'startPlaceholder'
            },
            {
                type: 'input',
                field: 'endPlaceholder'
            },
            {
                type: 'select',
                field: 'type',
                options: localeOptions(t, [
                    {label: 'year', value: 'year'},
                    {label: 'month', value: 'month'},
                    {label: 'date', value: 'date'},
                    {label: 'daterange', value: 'daterange'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'input',
                field: 'format'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'select',
                field: 'popoverType',
                props: {
                    clearable: true
                },
                options: localeOptions(t, [
                    {label: 'phone', value: 'phone'},
                    {label: 'amount', value: 'amount'},
                    {label: 'account', value: 'account'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'input',
                field: 'popoverTitle'
            },
            {
                type: 'input',
                field: 'popoverContent'
            },
            {
                type: 'input',
                field: 'label'
            },
            {
                type: 'switch',
                field: 'requisite'
            },
            {
                type: 'input',
                field: 'symbol'
            },
            {
                type: 'select',
                field: 'position',
                options: localeOptions(t, [
                    {label: 'left', value: 'left'},
                    {label: 'top', value: 'top'}
                ], 'props')
            },
            {
                type: 'switch',
                field: 'backTrigger'
            },
            {
                type: 'switch',
                field: 'noinput'
            },
            {
                type: 'TableOptions',
                field: 'defaultTime',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 2,
                }
            },
            {
                type: 'input',
                field: 'valueFormat'
            }
        ]);
    }
};
