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
    validate: ['number', 'integer', 'float'],
    rule({t}) {
        return {
            type: 'inputNumber',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {}
        };
    },
    loadRule: createFieldLoad('inputNumber', {
        labelField: 'label'
    }),
    watch: createFieldWatch({
        labelField: 'label'
    }),
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled'
            },
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
