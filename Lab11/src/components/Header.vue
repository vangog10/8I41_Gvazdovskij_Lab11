<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex items-center justify-center h-16 gap-6">
      <RouterLink
        to="/main"
        class="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        Главная
      </RouterLink>
      <RouterLink
        to="/main/about"
        class="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        О нас
      </RouterLink>
      <RouterLink
        to="/main/support"
        class="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
      >
        Поддержка
      </RouterLink>
    </div>
</template>