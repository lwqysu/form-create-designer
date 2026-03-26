import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps, makeStaticOptionsRule, makeTreeOptions} from '../../utils/index';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC单选框';
const name = 'fcRadio';

export default {
    menu: 'main',
    icon: 'icon-radio',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['string', 'number'],
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'radio',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                type: 'default'
            },
            options: makeTreeOptions(t('props.option'), {label: 'label', value: 'value'}, 1)
        };
    },
    loadRule: createFieldLoad('radio', {
        labelField: 'label'
    }),
    watch: createFieldWatch({
        labelField: 'label'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeStaticOptionsRule(t, 'options'),
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'select',
                field: 'type',
                options: localeOptions(t, [
                    {label: 'radio', value: 'default'},
                    {label: 'button', value: 'button'}
                ], 'com.' + name + '.options')
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'input',
                field: 'label'
            }
        ]);
    }
};
