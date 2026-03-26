import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC密码输入组件';
const name = 'fcPassword';

export default {
    menu: 'main',
    icon: 'icon-password',
    label,
    name,
    input: true,
    event: ['blur', 'focus', 'change', 'input', 'clear'],
    validate: ['string'],
    rule({t}) {
        return {
            type: 'input',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                type: 'password'
            }
        };
    },
    loadRule(rule) {
        const props = rule.props || (rule.props = {});

        rule.type = 'input';
        props.type = 'password';
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'readonly'
            },
            {
                type: 'inputNumber',
                field: 'maxlength',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'placeholder'
            },
            {
                type: 'switch',
                field: 'clearable'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, []);
    }
};
