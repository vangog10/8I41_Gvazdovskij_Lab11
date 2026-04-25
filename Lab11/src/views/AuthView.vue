<script setup lang="ts">
 import Button from "../components/Button.vue";
import Input from "../components/Input.vue"
import RouterButton from "../components/RouterButton.vue";
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 space-y-6">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-white tracking-tight">Вход в систему</h1>
        <p class="text-sm text-slate-400">Введите свои данные для авторизации</p>
      </div>
      <form class="space-y-5">
        <div class="space-y-1.5">
          <label for="login" class="block text-sm font-medium text-slate-300">Логин</label>
          <Input id="login" type="text" placeholder="Введите логин" autocomplete="username"/>
        </div>
        <div class="space-y-1.5">
          <label for="password" class="block text-sm font-medium text-slate-300">Пароль</label>
          <Input id="password" type="password" placeholder="Введите пароль" autocomplete="current-password" />
        </div>
        <div class="flex gap-3 pt-2">
          <Button>Отмена</Button>
          <RouterButton to="/main/">Войти</RouterButton>
        </div>
      </form>
    </div>
  </div>
</template>