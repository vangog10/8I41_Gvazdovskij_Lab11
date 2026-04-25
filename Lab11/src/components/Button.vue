<script setup lang="ts"></script>

<template>
    <button
        type="button"
        class="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm rounded-xl transition-all duration-200 active:scale-95"
    >
        <slot>Button</slot>
    </button>
</template>