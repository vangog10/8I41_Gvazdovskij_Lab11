<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    const { to } = defineProps<{to: string}>();
</script>

<template>
    <RouterLink :to="to" class="flex-1 flex justify-center items-center py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95">
        <slot>Router</slot>
    </RouterLink>
</template>