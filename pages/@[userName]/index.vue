<script setup lang="ts">
import { useRoute, ref, useFetch, computed } from '#imports';
import { authStore } from '~/stores/auth';
import { API_BASE_URL } from '~/constants';
import { GetArticlesResponse } from '~/lib/api/article';

const route = useRoute();
const userName = route.params.userName;

const auth = authStore();
const user = auth.currentUser;

if (user == null) {
  throw new Error('User is not logged in');
}
if (typeof userName !== 'string') {
  throw new TypeError("userName can't be a string");
}

const menuTabs = [
  { label: 'My Article', href: `@${userName}` },
  { label: 'Favorited Articles', href: `@${userName}?favorited=true` },
];
const currentTab = ref(
  route.query.favorited ? 'Favorited Articles' : 'My Article'
);

const handleActiveTabChange = (newActiveTab: string) => {
  currentTab.value = newActiveTab;
};

const apiUrl = computed(() => {
  const url = new URL(`${API_BASE_URL}/articles`);
  url.searchParams.append('limit', '10');
  if (currentTab.value === 'Favorited Articles') {
    url.searchParams.append('favorited', userName);
  } else {
    url.searchParams.append('author', userName);
  }
  if (route.query.offset) {
    url.searchParams.append('offset', route.query.offset as string);
  }
  return url.toString();
});

const { data, pending } = useFetch<GetArticlesResponse>(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${encodeURIComponent(user.token)}`,
  },
});
</script>

<template>
  <div>
    <Head>
      <!-- TODO: display dynamic and use the constant -->
      <title>{{ userName }} — Conduit</title>
    </Head>

    <UserJumbotron :user="user" />

    <TheContainer>
      <TabbedMenu
        :tabs="menuTabs"
        :active-tab="currentTab"
        @update:active-tab="handleActiveTabChange"
      />
      <div>
        <p v-if="pending">Loading articles...</p>
        <div v-else>
          <p v-if="data && data.articles && data.articles.length === 0">
            No articles are here... yet.
          </p>
          <div v-else-if="data && data.articles">
            <ArticleList :articles="data.articles" />
            <CustomPagination
              :base-url="`/@${userName}`"
              :entity-count="data.articlesCount"
            />
          </div>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 60%;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 1.5rem;
  a {
    color: #5cb85c;
    text-decoration: none;
  }
}
</style>
