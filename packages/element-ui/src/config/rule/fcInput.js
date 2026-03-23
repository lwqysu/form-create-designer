import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';

const label = 'FC文本框';
const name = 'fcInput';

export default {
    menu: 'main',
    icon: 'icon-input',
    label,
    name,
    input: true,
    validate: false,
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    event: ['blur', 'focus', 'change', 'enter', 'click-error-icon'],
    rule({t}) {
        return {
            type: 'input',
            field: uniqueId(),
            title: t('com.fcInput.name'),
            info: '',
            $required: false,
            props: {
                type: 'text',
                label: t('com.fcInput.name'),
                position: 'left',
                disabled: false,
                readonly: false,
                clearable: false,
                visible: true,
                requisite: false,
                symbol: '*',
                isSql: true,
                backTrigger: false
            }
        };
    },
    loadRule(rule) {
        const props = rule.props || (rule.props = {});

        rule.type = 'input';

        if (props.maxLength != null && props.maxlength == null) {
            props.maxlength = props.maxLength;
        } else if (props.maxLength == null && props.maxlength != null) {
            props.maxLength = props.maxlength;
        }

        if (rule.title != null && props.label == null) {
            props.label = rule.title;
        }

        if (props.visible != null) {
            rule.display = props.visible !== false;
        }

        if (props.requisite != null) {
            rule.$required = props.requisite === true;
        }
    },
    parseRule(rule) {
        if (rule.props && rule.props.maxLength != null) {
            delete rule.props.maxlength;
        }
    },
    watch: {
        maxLength({value, rule}) {
            if (value === undefined || value === null || value === '') {
                delete rule.props.maxlength;
            } else {
                rule.props.maxlength = value;
            }
        },
        label({value, rule}) {
            rule.title = value || rule.title || '';
        },
        visible({value, rule}) {
            rule._display = value !== false;
        },
        requisite({value, rule}) {
            rule.$required = value === true;
        }
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'select',
                field: 'type',
                options: localeOptions(t, [
                    {label: 'text', value: 'text'},
                    {label: 'number', value: 'number'},
                    {label: 'password', value: 'password'},
                ], 'com.' + name + '.options')
            },
            {
                type: 'inputNumber',
                field: 'maxLength',
                props: {min: 0}
            },
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
                type: 'switch',
                field: 'readonly'
            },
        ]);

        const customRule = localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'label'
            },
            {
                type: 'select',
                field: 'position',
                options: localeOptions(t, [
                    {label: 'left', value: 'left'},
                    {label: 'top', value: 'top'},
                ], 'props')
            },
            {
                type: 'input',
                field: 'prefixText'
            },
            {
                type: 'input',
                field: 'suffixText'
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
                type: 'input',
                field: 'promptInformation'
            },
            {
                type: 'select',
                field: 'popoverType',
                props: {
                    clearable: true
                },
                options: localeOptions(t, [
                    {label: 'phone', value: 'phone'},
                    {label: 'amount', value: 'amount'},
                    {label: 'account', value: 'account'},
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
                type: 'switch',
                field: 'isSql'
            },
            {
                type: 'switch',
                field: 'backTrigger'
            },
            {
                type: 'select',
                field: 'isType',
                props: {
                    clearable: true
                },
                options: localeOptions(t, [
                    {label: 'email', value: 'email'},
                    {label: 'id-card', value: 'id-card'},
                    {label: 'china-mobile', value: 'china-mobile'},
                ], 'com.' + name + '.options')
            },
        ]);

        return [
            ...nativeRule,
            {
                type: 'elDivider',
                field: '__fcInputCustomDivider',
                props: {
                    contentPosition: 'left'
                },
                children: [t('designer.customProps')]
            },
            ...customRule,
        ];
    }
};
