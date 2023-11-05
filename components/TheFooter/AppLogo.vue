<script setup>
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <span class="font-titillium text-custom-green font-bold">{{ title }}</span>
</template>
