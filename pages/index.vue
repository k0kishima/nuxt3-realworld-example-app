<script setup lang="ts">
import { computed, ref, useFetch, useRoute } from '#imports';
import { API_BASE_URL } from '~/constants';
import { GetArticlesResponse } from '~/lib/api/article';

const route = useRoute();

const menuTabs = [{ label: 'Global Feed', href: `/` }];
const currentTab = ref('Global Feed');

const apiUrl = computed(() => {
  const url = new URL(`${API_BASE_URL}/articles`);
  url.searchParams.append('limit', '10');
  if (route.query.offset) {
    url.searchParams.append('offset', route.query.offset as string);
  }
  return url.toString();
});

const { data, pending } = useFetch<GetArticlesResponse>(apiUrl, {
  method: 'GET',
});
</script>

<template>
  <div>
    <Head>
      <!-- TODO: display dynamic and use the constant -->
      <title>Home — Conduit</title>
    </Head>

    <AppJumbotron />

    <TheContainer>
      <TabbedMenu :tabs="menuTabs" :active-tab="currentTab" />

      <div>
        <p v-if="pending">Loading articles...</p>
        <div v-else>
          <p v-if="data && data.articles && data.articles.length === 0">
            No articles are here... yet.
          </p>
          <div v-else-if="data && data.articles">
            <ArticleList :articles="data.articles" />
            <CustomPagination
              :base-url="`/`"
              :entity-count="data.articlesCount"
            />
          </div>
        </div>
      </div>
    </TheContainer>
  </div>
</template>
