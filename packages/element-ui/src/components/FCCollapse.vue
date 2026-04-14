<template>
    <el-collapse class="_fd-fc-collapse" :class="{'_fc-child-empty' : !$slots.default}" v-bind="$attrs">
        <slot name="default"></slot>
    </el-collapse>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FCCollapse',
    mounted() {
    }
});
</script>

<style>
._fd-fc-collapse {
    width: 100%;
}
</style>