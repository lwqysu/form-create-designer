import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps, makeStaticOptionsRule, makeTreeOptions} from '../../utils/index';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC下拉框';
const name = 'fcSelect';

export default {
    menu: 'main',
    icon: 'icon-select',
    label,
    name,
    input: true,
    event: ['focus', 'blur', 'change', 'remove-tag', 'clear'],
    validate: false,
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'select',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                visible: true,
                requisite: false,
                symbol: '*',
                readonly: false,
                backTrigger: false,
                isVmodelLabel: false,
                popoverType: false
            },
            options: makeTreeOptions(t('props.option'), {label: 'label', value: 'value'}, 1)
        };
    },
    loadRule: createFieldLoad('select', {
        labelField: 'label',
        visibleField: 'visible',
        requisiteField: 'requisite'
    }),
    watch: createFieldWatch({
        labelField: 'label',
        visibleField: 'visible',
        requisiteField: 'requisite',
        extra: {
            multiple({rule}) {
                rule.key = uniqueId();
            }
        }
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeStaticOptionsRule(t, 'options'),
            {
                type: 'switch',
                field: 'multiple'
            },
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'clearable'
            },
            {
                type: 'switch',
                field: 'collapseTags'
            },
            {
                type: 'inputNumber',
                field: 'multipleLimit',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'placeholder'
            },
            {
                type: 'switch',
                field: 'filterable'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'switch',
                field: 'readonly'
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
                field: 'visible'
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
                type: 'switch',
                field: 'isVmodelLabel'
            },
            {
                type: 'switch',
                field: 'backTrigger'
            },
            {
                type: 'TableOptions',
                field: 'valueMap',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 2,
                }
            },
            {
                type: 'inputNumber',
                field: 'maxLines',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'promptInformation'
            },
            {
                type: 'switch',
                field: 'popoverType'
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
                field: 'paraFile'
            },
            {
                type: 'input',
                field: 'listName'
            }
        ]);
    }
};
