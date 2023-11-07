<script setup lang="ts">
import { defineProps } from 'vue';
import { ref, navigateTo } from '#imports';
import { authStore } from '~/stores/auth';
import {
  addArticleToFavorites,
  removeArticleFromFavorites,
} from '~/lib/api/article';

const props = defineProps<{
  favoritesCount: number;
  active: boolean;
  articleSlug: string;
  text?: string | null;
}>();

const activeState = ref(props.active);

const auth = authStore();

const toggleFavorite = async () => {
  const token = auth.currentUser?.token;
  if (!token) {
    await navigateTo('/user/register');
    return;
  }

  if (!activeState.value) {
    try {
      await addArticleToFavorites(token, props.articleSlug);
      activeState.value = true;
    } catch (error) {
      // todo: Implement error handling
    }
  } else {
    try {
      await removeArticleFromFavorites(token, props.articleSlug);
      activeState.value = false;
    } catch (error) {
      // todo: Implement error handling
    }
  }
};
</script>

<template>
  <div>
    <button
      :class="[
        'inline-flex items-center justify-center border rounded text-xs px-2 py-1',
        activeState
          ? 'bg-custom-green text-white'
          : 'border-custom-green bg-white text-custom-green',
      ]"
      @click="toggleFavorite"
    >
      <span class="inline-flex">
        <IconHeart
          :color="activeState ? 'white' : 'currentColor'"
          class="w-4 h-4 mr-1"
        />
      </span>
      <div v-if="text">
        <span class="ml-1">{{ text }}</span>
        <span class="ml-1">({{ favoritesCount }})</span>
      </div>
      <div v-else>{{ favoritesCount }}</div>
    </button>
  </div>
</template>
