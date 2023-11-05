<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <img
    :src="image"
    alt="User's profile image"
    class="rounded-full border-0 inline-block"
  />
</template>
