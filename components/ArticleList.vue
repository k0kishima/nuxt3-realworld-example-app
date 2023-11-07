<script setup lang="ts">
import { defineProps } from 'vue';
import { Article } from '~/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.slug"
      class="border-t border-gray-200 py-6"
    >
      <div class="font-light mb-4">
        <a :href="`/@${encodeURIComponent(article.author.username)}`">
          <img
            :data-src="article.author.image"
            :src="article.author.image"
            alt="author's profile image"
            class="inline-block align-middle h-8 w-8 rounded-full"
          />
        </a>

        <div class="inline-block align-middle mr-6 ml-1">
          <a
            class="author block font-medium text-green-500"
            :href="`/@${encodeURIComponent(article.author.username)}`"
          >
            <span>{{ article.author.username }}</span>
          </a>
          <span class="date block text-gray-400 text-xs">{{
            new Date(article.createdAt).toDateString()
          }}</span>
        </div>

        <div class="float-right">
          <FavoriteButton
            :favorites-count="article.favoritesCount"
            :active="article.favorited"
            :article-slug="article.slug"
          />
        </div>
      </div>

      <a
        class="preview-link block text-black"
        :href="`/article/${article.slug}`"
      >
        <h1 class="font-bold text-lg mb-1 text-gray-700">
          {{ article.title }}
        </h1>

        <p class="font-thin text-sm text-gray-400 mb-4">
          {{ article.description }}
        </p>

        <div class="flex justify-between items-center">
          <span class="text-xs font-light text-gray-400">Read more...</span>

          <ul class="tag-list list-none">
            <li
              v-for="tag in article.tagList"
              :key="tag"
              class="inline-block font-light text-xs py-0 border-gray-300 text-gray-400 mr-1"
            >
              <AppTag :name="tag" />
            </li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>
