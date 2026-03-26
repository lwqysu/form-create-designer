import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC滑动开关';
const name = 'fcSwitch';

export default {
    menu: 'main',
    icon: 'icon-switch',
    label,
    name,
    input: true,
    event: ['change'],
    rule({t}) {
        return {
            type: 'switch',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                activeValue: true,
                inactiveValue: false,
            },
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'ColorInput',
                field: 'activeColor'
            },
            {
                type: 'ColorInput',
                field: 'inactiveColor'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'input',
                field: 'inlineDesc'
            },
            {
                type: 'switch',
                field: 'preventDefault'
            }
        ]);
    }
};
