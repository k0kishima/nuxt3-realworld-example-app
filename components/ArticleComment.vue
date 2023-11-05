<script setup lang="ts">
import { defineProps } from 'vue';
import { ArticleComment } from '~/types';
import { formatLongDate } from '~/utils/dateUtils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articleComment: ArticleComment;
}>();
</script>

<template>
  <div class="border border-gray-200 rounded">
    <p class="p-4 text-sm">{{ articleComment.body }}</p>
    <div
      class="p-2 text-sm bg-gray-50 border-t border-gray-200 font-light flex items-center"
    >
      <UserAvatar :image="articleComment.author.image" class="mr-4" />
      <div class="comment-meta text-xs">
        <ul class="list-inside list-disc inline">
          <li class="inline">{{ articleComment.author.username }}</li>
          <li class="inline ml-2 text-gray-400">
            {{ formatLongDate(articleComment.createdAt) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
