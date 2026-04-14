<template>
    <el-col class="_fd-fc-col" :class="{ '_fc-child-empty': !$slots.default }" v-bind="$props">
        <slot name="default"></slot>
    </el-col>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FCCol',
    props: {
        span: {
            type: Number,
            default: 12
        },
        offset: {
            type: Number,
            default: 0
        },
        push: {
            type: Number,
            default: 0
        },
        pull: {
            type: Number,
            default: 0
        },
        order: {
            type: Number,
            default: 0
        }
    },
    mounted() {
    }
});
</script>

<style>
._fd-fc-col {
    box-sizing: border-box;
}
</style>