import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps, makeStaticOptionsRule, makeTreeOptions} from '../../utils/index';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC多选框';
const name = 'fcCheckBox';

export default {
    menu: 'main',
    icon: 'icon-checkbox',
    label,
    name,
    input: true,
    event: ['change'],
    validate: false,
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'checkbox',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                requisite: false
            },
            options: makeTreeOptions(t('props.option'), {label: 'label', value: 'value'}, 1)
        };
    },
    loadRule: createFieldLoad('checkbox', {
        labelField: 'label',
        requisiteField: 'requisite'
    }),
    watch: createFieldWatch({
        labelField: 'label',
        requisiteField: 'requisite'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeStaticOptionsRule(t, 'options'),
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'inputNumber',
                field: 'min',
                props: {min: 0}
            },
            {
                type: 'inputNumber',
                field: 'max',
                props: {min: 0}
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'select',
                field: 'position',
                options: localeOptions(t, [
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ], 'props')
            },
            {
                type: 'switch',
                field: 'requisite'
            },
            {
                type: 'switch',
                field: 'indeterminate'
            }
        ]);
    }
};
