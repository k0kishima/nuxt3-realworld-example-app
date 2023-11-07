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
      <div class="ml-4 inline-block align-middle">
        <ul class="list-inside">
          <li class="text-sm font-medium">
            <NuxtLink
              :href="`/@${encodeURIComponent(authorName)}`"
              class="hover:underline"
              >{{ authorName }}</NuxtLink
            >
          </li>
          <li class="text-xs text-gray-400">{{ formatLongDate(date) }}</li>
        </ul>
      </div>
    </TheContainer>
  </div>
</template>
