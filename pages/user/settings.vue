<script setup lang="ts">
import { navigateTo } from 'nuxt/app';
import { authStore } from '~/stores/auth';

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
      <!-- TODO: display dynamic and use the constant -->
      <title>Settings — Conduit</title>
    </Head>

    <div class="container">
      <TheContainer>
        <h1 class="mb-5">Your Settings</h1>
        <SettingForm class="mb-5" />
        <hr class="mb-5" />
        <button @click="onLogoutButtonClick">Or click here to logout.</button>
      </TheContainer>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 60%;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
}

button {
  color: #b85c5c;
  background-image: none;
  background-color: transparent;
  border-color: #b85c5c;
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}
</style>
