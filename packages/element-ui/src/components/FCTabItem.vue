<template>
    <el-tab-pane class="_fd-fc-tab-item" :class="{'_fc-child-empty' : !$slots.default}" v-bind="$attrs">
        <slot name="default"></slot>
    </el-tab-pane>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FCTabItem',
    mounted() {
    }
});
</script>

<style>
._fd-fc-tab-item {
}
</style>