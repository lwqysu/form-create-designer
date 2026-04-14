<template>
    <el-tabs class="_fd-fc-tabs" :class="{'_fc-child-empty' : !$slots.default}" v-bind="$attrs">
        <slot name="default"></slot>
    </el-tabs>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FCTabs',
    mounted() {
    }
});
</script>

<style>
._fd-fc-tabs {
    width: 100%;
}
</style>