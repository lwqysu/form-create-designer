import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeTreeOptions, makeTreeOptionsRule} from '../../utils';

const label = 'FC穿梭框';
const name = 'fcTransfer';

export default {
    menu: 'main',
    icon: 'icon-transfer',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['string', 'number', 'array'],
    rule({t}) {
        return {
            type: 'elTransfer',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                data: makeTreeOptions(t('props.option'), {label: 'label', value: 'key'}, 1)
            }
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeTreeOptionsRule(t, 'props.data', 'label', 'key'),
            {
                type: 'switch',
                field: 'filterable'
            },
            {
                type: 'input',
                field: 'filterPlaceholder'
            },
            {
                type: 'TableOptions',
                field: 'titles',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 2,
                }
            },
            {
                type: 'TableOptions',
                field: 'buttonTexts',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 2,
                }
            }
        ]);

        return [
            ...nativeRule,
            {
                type: 'elDivider',
                field: '__fcTransferCustomDivider',
                props: {
                    contentPosition: 'left'
                },
                children: [t('designer.customProps')]
            },
            {
                type: 'Object',
                field: 'format',
                title: t('com.' + name + '.props.format'),
                props: {
                    rule: [
                        {
                            type: 'input',
                            field: 'noChecked',
                            title: t('com.' + name + '.props.noChecked')
                        },
                        {
                            type: 'input',
                            field: 'hasChecked',
                            title: t('com.' + name + '.props.hasChecked')
                        }
                    ]
                }
            },
            {
                type: 'Object',
                field: 'props',
                title: t('com.' + name + '.props.props'),
                props: {
                    rule: [
                        {
                            type: 'input',
                            field: 'key',
                            title: t('com.' + name + '.props.key')
                        },
                        {
                            type: 'input',
                            field: 'label',
                            title: t('com.' + name + '.props.label')
                        },
                        {
                            type: 'input',
                            field: 'disabled',
                            title: t('com.' + name + '.props.disabledField')
                        }
                    ]
                }
            },
            {
                type: 'TableOptions',
                field: 'leftDefaultChecked',
                title: t('com.' + name + '.props.leftDefaultChecked'),
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string'
                }
            },
            {
                type: 'TableOptions',
                field: 'rightDefaultChecked',
                title: t('com.' + name + '.props.rightDefaultChecked'),
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string'
                }
            }
        ];
    }
};
