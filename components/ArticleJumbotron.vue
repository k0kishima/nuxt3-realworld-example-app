<script setup lang="ts">
import { defineProps } from 'vue';
import { formatLongDate } from '~/utils/dateUtils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  authorName: string;
  authorImage: string;
  date: string;
}>();
</script>

<template>
  <div class="p-8 overflow-auto text-white bg-zinc-700 shadow-inner">
    <TheContainer>
      <h1 class="text-4xl font-semibold mb-8">{{ title }}</h1>
      <UserAvatar :image="authorImage" class="w-8 h-8" />
      <div class="article-meta ml-4 inline-block align-middle">
        <ul class="list-inside">
          <li>{{ authorName }}</li>
          <li>{{ formatLongDate(date) }}</li>
        </ul>
      </div>
    </TheContainer>
  </div>
</template>
