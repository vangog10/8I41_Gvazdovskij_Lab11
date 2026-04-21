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
          <input
            id="login"
            type="text"
            placeholder="Введите логин"
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
            autocomplete="username"
          />
        </div>
        <div class="space-y-1.5">
          <label for="password" class="block text-sm font-medium text-slate-300">Пароль</label>
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
            autocomplete="current-password"
          />
        </div>
        <div class="flex gap-3 pt-2">
          <RouterLink
            to="/main/"
            class="flex-1 flex justify-center items-center py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
          >
            Войти
          </RouterLink>
          <button
            type="button"
            class="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm rounded-xl transition-all duration-200 active:scale-95"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  </div>
</template>