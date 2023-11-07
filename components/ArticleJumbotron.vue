<script setup lang="ts">
import { defineProps } from 'vue';
import { formatLongDate } from '~/utils/dateUtils';
import { authStore } from '~/stores/auth';
import { Article } from '~/types';

const auth = authStore();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  article: Article;
}>();
</script>

<template>
  <div class="p-8 overflow-auto text-white bg-zinc-700 shadow-inner">
    <TheContainer>
      <h1 class="text-4xl font-semibold mb-8">{{ article.title }}</h1>
      <UserAvatar :image="article.author.image" class="w-8 h-8" />
      <div class="ml-2 inline-block align-middle">
        <ul class="list-inside">
          <li class="text-sm font-medium">
            <NuxtLink
              :href="`/@${encodeURIComponent(article.author.username)}`"
              class="hover:underline"
              >{{ article.author.username }}</NuxtLink
            >
          </li>
          <li class="text-xs text-gray-400">
            {{ formatLongDate(article.createdAt) }}
          </li>
        </ul>
      </div>
      <div
        v-if="auth.currentUser?.username !== article.author.username"
        class="ml-4 inline-block align-middle"
      >
        <FollowButton
          :username="article.author.username"
          :active="article.author.following"
          class="inline-block align-middle"
        />
        <FavoriteButton
          :favorites-count="article.favoritesCount"
          :active="article.favorited"
          :article-slug="article.slug"
          text="Favorite Article"
          class="inline-block align-middle ml-1"
        />
      </div>
    </TheContainer>
  </div>
</template>
