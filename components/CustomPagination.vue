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
    <ul class="pagination">
      <li v-for="page in totalPages" :key="page" class="pagination-item">
        <NuxtLink
          :to="buildPaginatedUrl(page)"
          class="pagination-link"
          :class="{ 'is-active': currentPage === page }"
        >
          {{ page }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination {
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

li {
  display: inline;
}

.pagination-link {
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: #5cb85c;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.is-active {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #5cb85c;
  border-color: #5cb85c;
}
</style>
