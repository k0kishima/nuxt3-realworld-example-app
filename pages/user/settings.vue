<script setup lang="ts">
import { authStore } from '~/stores/auth';

const onLogoutButtonClick = () => {
  const auth = authStore();
  auth.signOut();
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
        <h1>Your Settings</h1>
        <hr />
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
