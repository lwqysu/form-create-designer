<template>
    <el-card class="_fd-fc-card" :class="{'_fc-child-empty' : !$slots.default}" v-bind="$attrs">
        <template v-if="$slots.header" #header>
            <slot name="header"></slot>
        </template>
        <slot name="default"></slot>
        <template v-if="$slots.footer" #footer>
            <slot name="footer"></slot>
        </template>
    </el-card>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FCCard',
    mounted() {
    }
});
</script>

<style>
._fd-fc-card {
    width: 100%;
}
</style>