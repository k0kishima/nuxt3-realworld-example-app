<script setup lang="ts">
import { useRoute } from '#imports';
const route = useRoute();

const menuItems = [
  { name: 'Home', href: '/', routeName: 'index' },
  { name: 'Sign in', href: '/user/login', routeName: 'user-login' },
  { name: 'Sign up', href: '/user/register', routeName: 'user-register' },
];
</script>

<template>
  <ul class="list-none">
    <li v-for="item in menuItems" :key="item.name" class="float-left text-sm">
      <NuxtLink
        :href="item.href"
        class="block py-1 px-2 text-gray-500 hover:text-gray-800"
        :class="{ 'text-gray-800': route.name === item.routeName }"
      >
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
