<script setup lang="ts">
import { useRoute } from '#imports';
const route = useRoute();
</script>
<template>
  <ul>
    <li>
      <NuxtLink href="/" :class="{ active: route.name === 'index' }"
        >Home</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        href="/user/login"
        :class="{ active: route.name === 'user-login' }"
        >Sign in</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        href="/user/register"
        :class="{ active: route.name === 'user-register' }"
        >Sign up</NuxtLink
      >
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

.active {
  color: rgba(0, 0, 0, 0.8);
}
</style>
