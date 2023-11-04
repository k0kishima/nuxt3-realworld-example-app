<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <span class="app-tag">{{ name }}</span>
</template>

<style scoped>
.app-tag {
  border: 1px solid #ddd;
  color: #aaa;
  background: 0 0;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  display: inline-block;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}
</style>
