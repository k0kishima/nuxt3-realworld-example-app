<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  baseUrl: {
    type: String,
    required: true,
  },
  entityCount: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  maxPages: {
    type: Number,
    default: 20,
  },
});

const totalPages = ref(0);
const currentPage = ref(1);

onMounted(() => {
  totalPages.value = Math.min(
    Math.ceil(props.entityCount / props.perPage),
    props.maxPages
  );

  const offset = parseInt(
    new URLSearchParams(location.search).get('offset') || '0',
    10
  );
  currentPage.value = Math.floor(offset / props.perPage) + 1;
});

const buildPaginatedUrl = (page: number) => {
  const currentParams = new URLSearchParams(location.search);
  currentParams.set('offset', String((page - 1) * props.perPage));
  return {
    path: props.baseUrl,
    query: Object.fromEntries(currentParams.entries()),
  };
};
</script>

<template>
  <nav>
    <ul class="inline-block">
      <li v-for="page in totalPages" :key="page" class="inline text-xs">
        <NuxtLink
          :to="buildPaginatedUrl(page)"
          class="float-left p-3 ml-[-1px] bg-white text-green-500 hover:bg-custom-green hover:text-white border border-gray-300 hover:border-custom-green hover:underline"
          :class="{
            '!bg-custom-green text-white cursor-default': currentPage === page,
          }"
        >
          {{ page }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
