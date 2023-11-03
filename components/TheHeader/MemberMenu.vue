<script setup lang="ts">
import { useRoute } from '#imports';
import { authStore } from '~/stores/auth';
const auth = authStore();

const route = useRoute();
</script>
<template>
  <ul>
    <li>
      <NuxtLink href="/" :class="{ active: route.name === 'index' }">
        Home
      </NuxtLink>
    </li>
    <li><a>New Article</a></li>
    <li>
      <NuxtLink
        href="/user/settings"
        :class="{ active: route.name === 'user-settings' }"
      >
        Settings
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="'/@' + auth.currentUser?.username"
        :class="{ active: route.name === `@${auth.currentUser?.username}` }"
      >
        {{ auth.currentUser?.username }}
      </NuxtLink>
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
