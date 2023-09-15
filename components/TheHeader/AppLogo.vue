<script setup>
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <h1>
    <NuxtLink href="/">{{ title }}</NuxtLink>
  </h1>
</template>

<style scoped>
h1 {
  color: #5cb85c;
  font-family: 'Titillium Web', sans-serif;
  font-size: 1.5rem;
}
</style>
