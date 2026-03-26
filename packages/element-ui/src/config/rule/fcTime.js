import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC时间框';
const name = 'fcTime';

export default {
    menu: 'main',
    icon: 'icon-time',
    label,
    name,
    input: true,
    event: ['change', 'blur', 'focus'],
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'timePicker',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                clearable: true,
                backTrigger: false,
                noinput: false
            },
        };
    },
    loadRule: createFieldLoad('timePicker', {
        labelField: 'label'
    }),
    watch: createFieldWatch({
        labelField: 'label',
        extra: {
            isRange({rule}) {
                rule.key = uniqueId();
            }
        }
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'readonly'
            },
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'clearable',
                value: true
            },
            {
                type: 'input',
                field: 'placeholder'
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
                type: 'switch',
                field: 'isRange'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'input',
                field: 'pickerOptions>start'
            },
            {
                type: 'input',
                field: 'pickerOptions>end'
            },
            {
                type: 'input',
                field: 'pickerOptions>step'
            },
            {
                type: 'input',
                field: 'pickerOptions>selectableRange'
            },
            {
                type: 'input',
                field: 'valueFormat'
            },
            {
                type: 'input',
                field: 'defaultValue'
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
                type: 'input',
                field: 'label'
            }
        ]);
    }
};
