import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';
import {mergePropsRule} from './fcUtils';

const label = 'FC上传';
const name = 'fcUpload';

export default {
    menu: 'main',
    icon: 'icon-upload',
    label,
    name,
    input: true,
    event: ['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed'],
    validate: ['array'],
    rule({t}) {
        return {
            type: 'upload',
            field: uniqueId(),
            title: t('com.' + name + '.name'),
            info: '',
            $required: false,
            props: {
                action: '/',
                onSuccess: '$FNX:const res = $inject.args[0];\nconst file = $inject.args[1];\n\nfile.url = res.data.url;'
            }
        };
    },
    props(_, {t}) {
        const nativeRule = localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'action'
            },
            {
                type: 'switch',
                field: 'multiple'
            },
            {
                type: 'TableOptions',
                field: 'headers',
                props: {
                    column: [{label: t('props.key'), key: 'label'}, {label: t('props.value'), key: 'value'}],
                    valueType: 'object'
                }
            },
            {
                type: 'TableOptions',
                field: 'data',
                props: {
                    column: [{label: t('props.key'), key: 'label'}, {label: t('props.value'), key: 'value'}],
                    valueType: 'object'
                }
            },
            {
                type: 'input',
                field: 'accept'
            },
            {
                type: 'switch',
                field: 'withCredentials'
            },
            {
                type: 'select',
                field: 'listType',
                options: localeOptions(t, [
                    {label: 'text', value: 'text'},
                    {label: 'picture', value: 'picture'},
                    {label: 'picture-card', value: 'picture-card'}
                ])
            },
            {
                type: 'switch',
                field: 'autoUpload',
                value: true
            },
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'inputNumber',
                field: 'limit',
                props: {min: 0}
            }
        ]);

        return mergePropsRule(t, name, nativeRule, [
            {
                type: 'input',
                field: 'fileName'
            },
            {
                type: 'switch',
                field: 'showFileList'
            },
            {
                type: 'switch',
                field: 'drag'
            },
            {
                type: 'TableOptions',
                field: 'fileList',
                props: {
                    column: [
                        {label: t('props.key'), key: 'name'},
                        {label: 'url', key: 'url'}
                    ],
                    valueType: 'object'
                }
            }
        ]);
    }
};
