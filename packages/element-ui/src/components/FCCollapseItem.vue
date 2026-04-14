<template>
    <el-collapse-item class="_fd-fc-collapse-item" :class="{'_fc-child-empty' : !$slots.default}" v-bind="$attrs">
        <slot name="default"></slot>
    </el-collapse-item>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FCCollapseItem',
    mounted() {
    }
});
</script>

<style>
._fd-fc-collapse-item {
}
</style>