<script setup lang="ts">
    import Header from '../components/Header.vue';

</script>
<template>
    <header class="w-full bg-slate-800 border-b border-white/10">
        <Header />
    </header>
    <main class="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <RouterView/>
    </main>
</template>