<script setup lang="ts">
import { computed, useFetch, useRoute } from '#imports';
import { API_BASE_URL, APP_NAME } from '~/constants';
import { GetArticlesResponse } from '~/lib/api/article';
import { GetTagsResponse } from '~/lib/api/tag';

const route = useRoute();

const menuTabs = computed(() => {
  const base = [{ label: 'Global Feed', href: `/` }];
  if (route.query.tag) {
    return [
      ...base,
      {
        label: `#${route.query.tag as string}`,
        href: `/?tag=${route.query.tag as string}`,
      },
    ];
  }
  return base;
});

const currentTab = route.query.tag
  ? `#${route.query.tag as string}`
  : 'Global Feed';

const apiUrl = computed(() => {
  const url = new URL(`${API_BASE_URL}/articles`);
  url.searchParams.append('limit', '10');
  if (route.query.offset) {
    url.searchParams.append('offset', route.query.offset as string);
  }
  if (route.query.tag) {
    url.searchParams.append('tag', route.query.tag as string);
  }
  return url.toString();
});

const { data: articleData, pending: articlePending } =
  useFetch<GetArticlesResponse>(apiUrl, {
    method: 'GET',
  });

const { data: tagData, pending: tagPending } = useFetch<GetTagsResponse>(
  new URL(`${API_BASE_URL}/tags`).toString(),
  {
    method: 'GET',
  }
);
</script>

<template>
  <div>
    <Head>
      <title>Home — {{ APP_NAME }}</title>
    </Head>

    <AppJumbotron />

    <TheContainer>
      <div class="flex md:space-x-4">
        <div class="md:w-3/4 mr-4">
          <TabbedMenu :tabs="menuTabs" :active-tab="currentTab" />

          <p v-if="articlePending">Loading articles...</p>
          <div v-else>
            <p
              v-if="
                articleData &&
                articleData.articles &&
                articleData.articles.length === 0
              "
            >
              No articles are here... yet.
            </p>
            <div v-else-if="articleData && articleData.articles">
              <ArticleList :articles="articleData.articles" />
              <CustomPagination
                :base-url="`/`"
                :entity-count="articleData.articlesCount"
              />
            </div>
          </div>
        </div>

        <div class="md:w-1/4 mt-2">
          <div class="sidebar p-3 rounded bg-gray-100">
            <p class="mb-2 text-sm font-medium">Popular Tags</p>

            <p v-if="tagPending">Loading tags...</p>
            <ul v-else-if="tagData && tagData.tags" class="tag-list list-none">
              <li
                v-for="tag in tagData.tags"
                :key="tag"
                class="mr-1 mb-1 inline-block"
              >
                <NuxtLink :href="`./?tag=${encodeURIComponent(tag)}`">
                  <AppTag :name="tag" class="tag text-white bg-gray-400" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TheContainer>
  </div>
</template>
