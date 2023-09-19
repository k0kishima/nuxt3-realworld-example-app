<script setup lang="ts">
import { authStore } from '~/stores/auth';
const auth = authStore();
</script>
<template>
  <ul>
    <li><NuxtLink href="/">Home</NuxtLink></li>
    <li><a>New Article</a></li>
    <li><NuxtLink href="/user/settings">Settings</NuxtLink></li>
    <li>
      <a>{{ auth.currentUser?.username }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

li {
  float: left;
}

li + li {
  margin-left: 1rem;
}

a {
  color: rgba(0, 0, 0, 0.3);
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
}
</style>
