<template>
    <el-row class="_fd-fc-row" :class="{ '_fc-child-empty': !$slots.default }" v-bind="$attrs">
        <slot name="default"></slot>
    </el-row>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FCRow',
    mounted() {
    }
});
</script>

<style>
._fd-fc-row {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
</style>