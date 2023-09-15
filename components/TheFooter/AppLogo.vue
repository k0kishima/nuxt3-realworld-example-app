<script setup>
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <span>{{ title }}</span>
</template>

<style scoped>
span {
  color: #5cb85c;
}
</style>
