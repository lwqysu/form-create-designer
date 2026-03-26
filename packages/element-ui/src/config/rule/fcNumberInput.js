import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';
import {createFieldLoad, createFieldParse, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC数字输入框';
const name = 'fcNumberInput';

export default {
    menu: 'main',
    icon: 'icon-number',
    label,
    name,
    input: true,
    event: ['blur', 'focus', 'input', 'change'],
    validate: ['number', 'integer', 'float'],
    rule({t}) {
        return {
            type: 'inputNumber',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {}
        };
    },
    loadRule: createFieldLoad('inputNumber', {
        aliases: [{field: 'decimal', prop: 'precision'}]
    }),
    parseRule: createFieldParse([{field: 'decimal', prop: 'precision'}]),
    watch: createFieldWatch({
        aliases: [{field: 'decimal', prop: 'precision'}]
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'inputNumber',
                field: 'min'
            },
            {
                type: 'inputNumber',
                field: 'max'
            },
            {
                type: 'inputNumber',
                field: 'decimal',
                props: {min: 0}
            },
            {
                type: 'inputNumber',
                field: 'step',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'placeholder'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'select',
                field: 'type',
                options: localeOptions(t, [
                    {label: 'text', value: 'text'},
                    {label: 'password', value: 'password'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'inputNumber',
                field: 'minLength',
                props: {min: 0}
            },
            {
                type: 'inputNumber',
                field: 'maxLength',
                props: {min: 0}
            },
            {
                type: 'select',
                field: 'size',
                options: localeOptions(t, [
                    {label: 'small', value: 'small'},
                    {label: 'normal', value: 'normal'},
                    {label: 'large', value: 'large'}
                ], 'com.' + name + '.options')
            },
            {
                type: 'select',
                field: 'align',
                options: localeOptions(t, [
                    {label: 'left', value: 'left'},
                    {label: 'center', value: 'center'},
                    {label: 'right', value: 'right'}
                ], 'props')
            }
        ]);
    }
};
