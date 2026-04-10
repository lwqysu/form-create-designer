<template>
    <div class="_fd-fc-counter-preview">
        <div v-if="label" class="_fd-fc-counter-label">{{ label }}</div>
        <el-input-number
            :model-value="modelValue"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            @update:model-value="handleUpdate"
            @change="handleChange"
        />
    </div>
</template>

<script>
export default {
    name: 'FcCounterPreview',
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: Number.NEGATIVE_INFINITY
        },
        max: {
            type: Number,
            default: Number.POSITIVE_INFINITY
        },
        step: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue', 'change'],
    methods: {
        handleUpdate(value) {
            this.$emit('update:modelValue', value);
        },
        handleChange(value) {
            this.$emit('change', value);
        }
    }
};
</script>

<style scoped>
._fd-fc-counter-preview {
    display: inline-flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}

._fd-fc-counter-label {
    color: #606266;
    font-size: 13px;
    line-height: 1.2;
}
</style>
