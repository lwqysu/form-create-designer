import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps, makeTreeOptions, makeStaticOptionsRule} from '../../utils/index';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC级联选择';
const name = 'fcCascader';

export default {
    menu: 'main',
    icon: 'icon-cascader',
    label,
    name,
    input: true,
    // event: ['active-item-change', 'change', 'show', 'hide'],
    validate: false,
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'cascader',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            effect: {
                fetch: ''
            },
            $required: false,
            props: {
                // visible: true,
                requisite: false,
                symbol: '*',
                position: 'left',
                backTrigger: false,
                options: makeTreeOptions(t('props.option'), {label: 'label', value: 'value'}, 3)
            }
        };
    },
    loadRule: createFieldLoad('cascader', {
        labelField: 'label',
        visibleField: 'visible',
        requisiteField: 'requisite',
        extra(rule, props) {
            if (props.multiple != null) {
                props.props = props.props || {};
                if (props.props.multiple == null) {
                    props.props.multiple = props.multiple;
                }
            }
            if (props.changeOnSelect != null) {
                props.props = props.props || {};
                if (props.props.checkStrictly == null) {
                    props.props.checkStrictly = props.changeOnSelect;
                }
            }
        }
    }),
    watch: createFieldWatch({
        labelField: 'label',
        visibleField: 'visible',
        requisiteField: 'requisite',
        extra: {
            multiple({value, rule}) {
                rule.props.props = rule.props.props || {};
                rule.props.props.multiple = value === true;
            },
            changeOnSelect({value, rule}) {
                rule.props.props = rule.props.props || {};
                rule.props.props.checkStrictly = value === true;
            }
        }
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeStaticOptionsRule(t, 'props.options'),
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'clearable'
            },
            {
                type: 'input',
                field: 'placeholder'
            },
            {
                type: 'Object',
                field: 'props',
                props: {
                    rule: localeProps(t, name + '.propsOpt', [
                        {
                            type: 'select',
                            field: 'expandTrigger',
                            options: localeOptions(t, [
                                {label: 'click', value: 'click'},
                                {label: 'hover', value: 'hover'}
                            ])
                        },
                        {
                            type: 'input',
                            field: 'value',
                            value: 'value'
                        },
                        {
                            type: 'input',
                            field: 'label',
                            value: 'label'
                        },
                        {
                            type: 'input',
                            field: 'children',
                            value: 'children'
                        },
                        {
                            type: 'input',
                            field: 'disabled',
                            value: 'disabled'
                        },
                        {
                            type: 'input',
                            field: 'checked'
                        },
                        {
                            type: 'input',
                            field: 'indeterminate'
                        }
                    ])
                }
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
                type: 'input',
                field: 'label'
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
                type: 'inputNumber',
                field: 'debounce',
                props: {min: 0}
            },
            {
                type: 'switch',
                field: 'changeOnSelect'
            },
            {
                type: 'input',
                field: 'inlineDesc'
            },
            {
                type: 'input',
                field: 'popoverType'
            },
            {
                type: 'input',
                field: 'popoverTitle'
            },
            {
                type: 'input',
                field: 'promptInformation'
            },
            {
                type: 'input',
                field: 'popoverContent'
            },
            {
                type: 'switch',
                field: 'multiple'
            },
            {
                type: 'input',
                field: 'title'
            }
        ]);
    }
};
