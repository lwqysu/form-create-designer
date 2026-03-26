import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeTreeOptions, makeTreeOptionsRule} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC树形控件';
const name = 'fcTree';

export default {
    menu: 'main',
    icon: 'icon-tree',
    label,
    name,
    input: true,
    event: ['node-click', 'node-contextmenu', 'check-change', 'node-expand', 'node-collapse', 'node-drag-start', 'node-drag-enter', 'node-drag-leave', 'node-drag-over', 'node-drag-end', 'node-drop'],
    validate: ['string', 'number', 'array'],
    rule({t}) {
        return {
            type: 'tree',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            effect: {
                fetch: ''
            },
            $required: false,
            props: {
                props: {
                    label: 'label',
                },
                showCheckbox: true,
                nodeKey: 'id',
                data: makeTreeOptions(t('props.option'), {label: 'label', value: 'id'}, 3),
            },
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            makeTreeOptionsRule(t, 'props.data', 'label', 'id'),
            {
                type: 'input',
                field: 'emptyText'
            },
            {
                type: 'TableOptions',
                field: 'props',
                props: {
                    column: [{label: t('props.key'), key: 'label'}, {label: t('props.value'), key: 'value'}],
                    valueType: 'object'
                }
            },
            {
                type: 'switch',
                field: 'renderAfterExpand',
                value: true
            },
            {
                type: 'switch',
                field: 'defaultExpandAll'
            },
            {
                type: 'switch',
                field: 'checkStrictly'
            },
            {
                type: 'switch',
                field: 'accordion'
            },
            {
                type: 'input',
                field: 'nodeKey'
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'switch',
                field: 'showCheckbox'
            },
            {
                type: 'TableOptions',
                field: 'defaultExpandedKeys',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string'
                }
            },
            {
                type: 'TableOptions',
                field: 'defaultCheckedKeys',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string'
                }
            },
            {
                type: 'switch',
                field: 'lazy'
            },
            {
                type: 'switch',
                field: 'draggable'
            },
            {
                type: 'TableOptions',
                field: 'ids',
                props: {
                    column: [{label: t('props.value'), key: 'value'}],
                    valueType: 'string'
                }
            },
            {
                type: 'switch',
                field: 'folderBold'
            },
            {
                type: 'inputNumber',
                field: 'depthOpen',
                props: {min: 0}
            }
        ]);
    }
};
