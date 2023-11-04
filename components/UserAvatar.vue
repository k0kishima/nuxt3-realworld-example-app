<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <img :src="image" alt="User's profile image" />
</template>

<style scoped>
img {
  border-radius: 100px;
  border: 0;
  display: inline-block;
}
</style>
