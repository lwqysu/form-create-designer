import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC评分';
const name = 'fcRate';

export default {
    menu: 'main',
    icon: 'icon-rate',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['number'],
    rule({t}) {
        return {
            type: 'rate',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {},
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'inputNumber',
                field: 'max',
                props: {min: 0}
            },
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'allowHalf'
            },
            {
                type: 'input',
                field: 'voidIconClass'
            },
            {
                type: 'switch',
                field: 'showScore'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'TableOptions',
                field: 'colors',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 3,
                }
            },
            {
                type: 'input',
                field: 'sign'
            },
            {
                type: 'TableOptions',
                field: 'icons',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                    max: 3,
                }
            },
            {
                type: 'switch',
                field: 'showText'
            },
            {
                type: 'TableOptions',
                field: 'texts',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string',
                }
            },
            {
                type: 'inputNumber',
                field: 'space',
                props: {min: 0}
            }
        ]);
    }
};
