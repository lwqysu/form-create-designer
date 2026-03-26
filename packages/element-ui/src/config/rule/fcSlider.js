import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';
import {createFieldLoad, createFieldParse, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC滑块';
const name = 'fcSlider';

export default {
    menu: 'main',
    icon: 'icon-slider',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['number', 'array'],
    rule({t}) {
        return {
            type: 'slider',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                showTooltip: true,
                direction: 'horizontal'
            },
        };
    },
    loadRule: createFieldLoad('slider', {
        aliases: [
            {field: 'showBreakpoint', prop: 'showStops'},
            {field: 'length', prop: 'height'}
        ],
        extra(rule, props) {
            if (props.direction === 'vertical') {
                props.vertical = true;
            } else if (props.vertical === true) {
                props.direction = 'vertical';
            }
        }
    }),
    parseRule: createFieldParse([
        {field: 'showBreakpoint', prop: 'showStops'},
        {field: 'length', prop: 'height'}
    ]),
    watch: createFieldWatch({
        aliases: [
            {field: 'showBreakpoint', prop: 'showStops'},
            {field: 'length', prop: 'height'}
        ],
        extra: {
            direction({value, rule}) {
                rule.props.vertical = value === 'vertical';
            }
        }
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
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
            },
            {
                type: 'inputNumber',
                field: 'step',
                props: {min: 0}
            },
            {
                type: 'switch',
                field: 'showInput'
            },
            {
                type: 'switch',
                field: 'showInputControls',
                value: true
            },
            {
                type: 'switch',
                field: 'showBreakpoint'
            },
            {
                type: 'select',
                field: 'direction',
                options: localeOptions(t, [
                    {label: 'horizontal', value: 'horizontal'},
                    {label: 'vertical', value: 'vertical'}
                ], 'props')
            },
            {
                type: 'input',
                field: 'length'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'switch',
                field: 'showTooltip'
            },
            {
                type: 'input',
                field: 'formatTooltip'
            },
            {
                type: 'switch',
                field: 'decimal'
            },
            {
                type: 'inputNumber',
                field: 'weight',
                props: {min: 0}
            }
        ]);
    }
};
