<script setup lang="ts">
import { authStore } from '~/stores/auth';
const auth = authStore();
</script>

<template>
  <header class="top-0 bg-white z-10 p-0.5">
    <nav class="py-2 px-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center">
          <TheHeaderAppLogo />
          <IconGithub class="w-4 h-4 ml-8" />
          <a
            href="https://github.com/k0kishima/nuxt3-realworld-example-app"
            target="_blank"
            class="ml-1 text-sm text-gray-500 hover:text-gray-800"
            >Source code</a
          >
        </div>
        <div class="menu">
          <TheHeaderMemberMenu v-if="auth.isAuthenticated" />
          <TheHeaderGuestMenu v-else />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
