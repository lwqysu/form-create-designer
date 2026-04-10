import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, localeOptions} from '../../utils';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC标签输入';
const name = 'fcInputTag';

export default {
    menu: 'main',
    icon: 'icon-tag',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['array'],
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'fcInputTag',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                modelValue: [],
                label: t('com.' + name + '.name'),
                visible: true
            }
        };
    },
    loadRule: createFieldLoad('fcInputTag', {
        labelField: 'label',
        visibleField: 'visible'
    }),
    watch: createFieldWatch({
        labelField: 'label',
        visibleField: 'visible'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'placeholder'
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
                type: 'inputNumber',
                field: 'max'
            },
            {
                type: 'inputNumber',
                field: 'min'
            },
            {
                type: 'input',
                field: 'separator'
            },
            {
                type: 'select',
                field: 'tagType',
                options: localeOptions(t, [
                    {label: 'info', value: 'info'},
                    {label: 'success', value: 'success'},
                    {label: 'warning', value: 'warning'},
                    {label: 'danger', value: 'danger'}
                ])
            },
            {
                type: 'select',
                field: 'tagEffect',
                options: localeOptions(t, [
                    {label: 'light', value: 'light'},
                    {label: 'dark', value: 'dark'},
                    {label: 'plain', value: 'plain'}
                ])
            },
            {
                type: 'select',
                field: 'trigger',
                options: localeOptions(t, [
                    {label: 'Enter', value: 'Enter'},
                    {label: 'Space', value: 'Space'},
                    {label: 'Comma', value: 'Comma'}
                ])
            },
            {
                type: 'switch',
                field: 'draggable'
            },
            {
                type: 'select',
                field: 'size',
                options: localeOptions(t, [
                    {label: 'large', value: 'large'},
                    {label: 'default', value: 'default'},
                    {label: 'small', value: 'small'}
                ])
            },
            {
                type: 'switch',
                field: 'validateEvent'
            },
            {
                type: 'switch',
                field: 'readonly'
            },
            {
                type: 'switch',
                field: 'autofocus'
            },
            {
                type: 'input',
                field: 'id'
            },
            {
                type: 'input',
                field: 'tabindex'
            },
            {
                type: 'inputNumber',
                field: 'maxlength',
                props: {min: 0}
            },
            {
                type: 'inputNumber',
                field: 'minlength',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'autocomplete'
            },
            {
                type: 'input',
                field: 'ariaLabel'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'input',
                field: 'label'
            },
            {
                type: 'switch',
                field: 'visible'
            }
        ]);
    }
};