<script setup lang="ts">
import { useRoute, useFetch } from '#imports';
import { API_BASE_URL } from '~/constants';
import { GetArticleResponse } from '~/types';

const route = useRoute();
const slug = route.params.slug as string;

const { data, pending } = useFetch<GetArticleResponse>(
  new URL(`${API_BASE_URL}/articles/${slug}`).toString(),
  {
    method: 'GET',
  }
);
</script>

<template>
  <div>
    <Head>
      <!-- TODO: display dynamic and use the constant -->
      <title>
        {{
          data && data.article ? data.article.title : 'Loading the article...'
        }}
      </title>
    </Head>

    <ArticleJumbotron
      v-if="data && data.article"
      :title="data.article.title"
      :author-name="data.article.author.username"
      :author-image="data.article.author.image"
    />

    <TheContainer>
      <p v-if="pending">Loading the article...</p>
      <div v-else-if="data && data.article">
        <p class="article-content">{{ data.article.body }}</p>
        <ul v-if="data.article.tagList">
          <li v-for="tag in data.article.tagList" :key="tag" class="mr-1">
            <AppTag :name="tag" />
          </li>
        </ul>
      </div>
    </TheContainer>
  </div>
</template>

<style scoped>
.article-content {
  font-family: 'source serif pro',serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;
}

ul li {
  display: inline-block;
}
</style>