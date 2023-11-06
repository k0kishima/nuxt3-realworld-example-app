<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  favoritesCount: number;
  active: boolean;
}>();
</script>

<template>
  <div>
    <button
      :class="[
        'inline-flex items-center justify-center border rounded text-xs px-2 py-1',
        active
          ? 'bg-custom-green text-white'
          : 'border-custom-green bg-white text-custom-green',
      ]"
    >
      <span class="inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 mr-1"
          :fill="active ? 'white' : 'currentColor'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </span>
      {{ favoritesCount }}
    </button>
  </div>
</template>
