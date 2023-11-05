<script setup lang="ts">
import { navigateTo } from 'nuxt/app';
import { authStore } from '~/stores/auth';
import { APP_NAME } from '~/constants';

// TODO: use a middleware
const auth = authStore();

if (!auth.isAuthenticated) {
  await navigateTo('/');
}

const onLogoutButtonClick = async () => {
  auth.signOut();
  await navigateTo('/');
};
</script>

<template>
  <div>
    <Head>
      <title>Your Settings — {{ APP_NAME }}</title>
    </Head>

    <TheContainer>
      <div class="w-full md:w-1/2 md:mx-auto">
        <h1 class="text-center text-4xl font-medium mb-2">Your Settings</h1>
        <SettingForm class="mb-5" />
        <hr class="mb-5" />
        <button
          class="text-red-600 border-white inline-block text-center no-underline align-middle cursor-pointer p-2 text-base rounded hover:border-red-600 border"
          @click="onLogoutButtonClick"
        >
          Or click here to logout.
        </button>
      </div>
    </TheContainer>
  </div>
</template>
