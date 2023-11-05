<script setup>
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <h1 class="font-titillium text-custom-green font-bold text-2xl">
    <NuxtLink href="/">{{ title }}</NuxtLink>
  </h1>
</template>
