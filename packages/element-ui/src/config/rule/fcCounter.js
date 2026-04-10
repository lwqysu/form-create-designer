import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';
import {createFieldLoad, createFieldWatch, mergePropsRule} from './fcUtils';

const label = 'FC计数器';
const name = 'fcCounter';

export default {
    menu: 'main',
    icon: 'icon-number',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['number'],
    hiddenBaseField: ['info', 'formCreateWrap>labelWidth', '_control'],
    rule({t}) {
        return {
            type: 'fcCounter',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                step: 1
            }
        };
    },
    loadRule: createFieldLoad('fcCounter', {
        labelField: 'label'
    }),
    watch: createFieldWatch({
        labelField: 'label'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'inputNumber',
                field: 'min'
            },
            {
                type: 'inputNumber',
                field: 'max'
            },
            {
                type: 'inputNumber',
                field: 'step',
                props: {min: 0}
            },
            {
                type: 'switch',
                field: 'disabled'
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
