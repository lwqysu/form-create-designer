import {localeProps} from '../../utils';

export function customDivider(t, name) {
    return {
        type: 'elDivider',
        field: `__${name}CustomDivider`,
        props: {
            contentPosition: 'left'
        },
        children: [t('designer.customProps')]
    };
}

export function mergePropsRule(t, name, nativeRule, customRule) {
    if (!customRule || !customRule.length) {
        return nativeRule;
    }

    return [
        ...nativeRule,
        customDivider(t, name),
        ...localeProps(t, name + '.props', customRule),
    ];
}

export function syncAlias(props, field, prop) {
    if (props[field] != null && props[prop] == null) {
        props[prop] = props[field];
    } else if (props[field] == null && props[prop] != null) {
        props[field] = props[prop];
    }
}

export function createFieldLoad(type, {
    labelField = false,
    visibleField = false,
    requisiteField = false,
    aliases = [],
    extra,
} = {}) {
    return (rule) => {
        const props = rule.props || (rule.props = {});

        rule.type = type;

        aliases.forEach(({field, prop}) => {
            syncAlias(props, field, prop);
        });

        if (extra) {
            extra(rule, props);
        }

        if (labelField && rule.title != null && props[labelField] == null) {
            props[labelField] = rule.title;
        }

        if (visibleField && props[visibleField] != null) {
            rule.display = props[visibleField] !== false;
        }

        if (requisiteField && props[requisiteField] != null) {
            rule.$required = props[requisiteField] === true;
        }
    };
}

export function createFieldParse(aliases = []) {
    return (rule) => {
        if (!rule.props) {
            return;
        }

        aliases.forEach(({field, prop}) => {
            if (rule.props[field] != null) {
                delete rule.props[prop];
            }
        });
    };
}

export function createFieldWatch({
    labelField = false,
    visibleField = false,
    requisiteField = false,
    aliases = [],
    extra = {},
} = {}) {
    const watch = {};

    aliases.forEach(({field, prop}) => {
        watch[field] = ({value, rule}) => {
            if (value === undefined || value === null || value === '') {
                delete rule.props[prop];
            } else {
                rule.props[prop] = value;
            }
        };
    });

    if (labelField) {
        watch[labelField] = ({value, rule}) => {
            rule.title = value || rule.title || '';
        };
    }

    if (visibleField) {
        watch[visibleField] = ({value, rule}) => {
            rule._display = value !== false;
        };
    }

    if (requisiteField) {
        watch[requisiteField] = ({value, rule}) => {
            rule.$required = value === true;
        };
    }

    return {
        ...watch,
        ...extra,
    };
}
