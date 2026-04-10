<template>
    <div class="_fd-fc-input-tag-preview" v-if="visible">
        <div class="_fd-fc-input-tag" :class="{'_fd-fc-input-tag-large': size === 'large', '_fd-fc-input-tag-small': size === 'small'}">
            <span class="_fd-fc-input-tag-item" v-for="(tag, index) in modelValue" :key="index" 
                  :class="['_fd-fc-input-tag-item-' + tagType, '_fd-fc-input-tag-item-' + tagEffect]"
                  :draggable="draggable">
                {{ tag }}
                <span class="_fd-fc-input-tag-close" @click="removeTag(index)" v-if="!disabled && clearable && !readonly">×</span>
            </span>
            <input 
                type="text" 
                class="_fd-fc-input-tag-input" 
                :placeholder="placeholder || '请输入标签'" 
                @keyup.enter="handleKeyup('Enter')" 
                @keyup.space="handleKeyup('Space')" 
                @keyup.comma="handleKeyup('Comma')"
                v-model="inputValue"
                :disabled="disabled"
                :readonly="readonly"
                :id="id"
                :tabindex="tabindex"
                :maxlength="maxlength"
                :minlength="minlength"
                :autocomplete="autocomplete"
                :aria-label="ariaLabel"
                :autofocus="autofocus"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FcInputTagPreview',
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: true
        },
        max: {
            type: Number,
            default: Number.POSITIVE_INFINITY
        },
        min: {
            type: Number,
            default: 0
        },
        separator: {
            type: String,
            default: ''
        },
        tagType: {
            type: String,
            default: 'info'
        },
        tagEffect: {
            type: String,
            default: 'light'
        },
        trigger: {
            type: String,
            default: 'Enter'
        },
        draggable: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default'
        },
        validateEvent: {
            type: Boolean,
            default: true
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            default: ''
        },
        tabindex: {
            type: [String, Number],
            default: ''
        },
        maxlength: {
            type: [String, Number],
            default: ''
        },
        minlength: {
            type: [String, Number],
            default: ''
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        ariaLabel: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    emits: ['update:modelValue', 'change'],
    data() {
        return {
            inputValue: ''
        };
    },
    methods: {
        handleKeyup(key) {
            if (this.trigger === key) {
                this.addTag();
            }
        },
        addTag() {
            if (this.inputValue.trim() && !this.disabled && !this.readonly && this.modelValue.length < this.max) {
                let tags = this.inputValue.trim();
                if (this.separator) {
                    tags = tags.split(this.separator).map(t => t.trim()).filter(t => t);
                } else {
                    tags = [tags];
                }
                
                const newValue = [...this.modelValue, ...tags].slice(0, this.max);
                this.$emit('update:modelValue', newValue);
                this.$emit('change', newValue);
                this.inputValue = '';
            }
        },
        removeTag(index) {
            if (!this.disabled && !this.readonly && this.clearable && this.modelValue.length > this.min) {
                const newValue = this.modelValue.filter((_, i) => i !== index);
                this.$emit('update:modelValue', newValue);
                this.$emit('change', newValue);
            }
        }
    }
};
</script>

<style scoped>
._fd-fc-input-tag-preview {
    display: inline-flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}

._fd-fc-input-tag-label {
    color: #606266;
    font-size: 13px;
    line-height: 1.2;
}

._fd-fc-input-tag {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 4px;
    min-height: 32px;
    gap: 4px;
}

._fd-fc-input-tag-large {
    min-height: 40px;
    padding: 6px;
    gap: 6px;
}

._fd-fc-input-tag-small {
    min-height: 24px;
    padding: 2px;
    gap: 2px;
}

._fd-fc-input-tag-item {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
    gap: 4px;
}

._fd-fc-input-tag-item-info {
    background-color: #ecf5ff;
    color: #409eff;
}

._fd-fc-input-tag-item-success {
    background-color: #f0f9eb;
    color: #67c23a;
}

._fd-fc-input-tag-item-warning {
    background-color: #fdf6ec;
    color: #e6a23c;
}

._fd-fc-input-tag-item-danger {
    background-color: #fef0f0;
    color: #f56c6c;
}

._fd-fc-input-tag-item-dark {
    color: #ffffff;
}

._fd-fc-input-tag-item-dark._fd-fc-input-tag-item-info {
    background-color: #409eff;
}

._fd-fc-input-tag-item-dark._fd-fc-input-tag-item-success {
    background-color: #67c23a;
}

._fd-fc-input-tag-item-dark._fd-fc-input-tag-item-warning {
    background-color: #e6a23c;
}

._fd-fc-input-tag-item-dark._fd-fc-input-tag-item-danger {
    background-color: #f56c6c;
}

._fd-fc-input-tag-item-plain {
    background-color: transparent;
    border: 1px solid;
}

._fd-fc-input-tag-item-plain._fd-fc-input-tag-item-info {
    border-color: #d9ecff;
    color: #409eff;
}

._fd-fc-input-tag-item-plain._fd-fc-input-tag-item-success {
    border-color: #e1f3d8;
    color: #67c23a;
}

._fd-fc-input-tag-item-plain._fd-fc-input-tag-item-warning {
    border-color: #faecd8;
    color: #e6a23c;
}

._fd-fc-input-tag-item-plain._fd-fc-input-tag-item-danger {
    border-color: #fbc4c4;
    color: #f56c6c;
}

._fd-fc-input-tag-close {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
}

._fd-fc-input-tag-close:hover {
    opacity: 0.8;
}

._fd-fc-input-tag-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 4px 0;
    font-size: 14px;
    min-width: 100px;
}

._fd-fc-input-tag-large ._fd-fc-input-tag-item {
    font-size: 14px;
    padding: 4px 10px;
}

._fd-fc-input-tag-large ._fd-fc-input-tag-input {
    font-size: 16px;
    padding: 6px 0;
}

._fd-fc-input-tag-small ._fd-fc-input-tag-item {
    font-size: 10px;
    padding: 1px 6px;
}

._fd-fc-input-tag-small ._fd-fc-input-tag-input {
    font-size: 12px;
    padding: 2px 0;
}

._fd-fc-input-tag-input:disabled {
    background-color: #f5f7fa;
    color: #c0c4cc;
}

._fd-fc-input-tag-input:read-only {
    background-color: #f5f7fa;
    cursor: not-allowed;
}
</style>