import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';

const label = 'FC多行文本域';
const name = 'fcTextarea';

export default {
    menu: 'main',
    icon: 'icon-textarea',
    label,
    name,
    input: true,
    event: ['focus', 'change'],
    validate: ['string'],
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'input',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                type: 'textarea'
            }
        };
    },
    loadRule(rule) {
        const props = rule.props || (rule.props = {});

        rule.type = 'input';
        props.type = 'textarea';
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'inputNumber',
                field: 'maxlength',
                props: {min: 0}
            },
            {
                type: 'input',
                field: 'placeholder'
            }
        ]);
    }
};
