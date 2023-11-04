<script setup lang="ts">
import { useRoute, useFetch, ref, watchEffect } from '#imports';
import { authStore } from '~/stores/auth';
import { API_BASE_URL } from '~/constants';
import {
  GetArticleResponse,
  GetArticleCommentsResponse,
} from '~/lib/api/article';

const route = useRoute();
const slug = route.params.slug as string;
const auth = authStore();

const commentsData = ref<GetArticleCommentsResponse | null>(null);

const fetchComments = () => {
  const { data } = useFetch<GetArticleCommentsResponse>(
    new URL(`${API_BASE_URL}/articles/${slug}/comments`).toString(),
    {
      method: 'GET',
    }
  );

  watchEffect(() => {
    commentsData.value = data.value;
  });
};

fetchComments();

const { data: articleData, pending: articlePending } =
  useFetch<GetArticleResponse>(
    new URL(`${API_BASE_URL}/articles/${slug}`).toString(),
    {
      method: 'GET',
    }
  );

const handleCommentCreate = () => {
  fetchComments();
};
</script>

<template>
  <div>
    <Head>
      <title>
        {{
          articleData && articleData.article
            ? articleData.article.title
            : 'Loading the article...'
        }}
      </title>
    </Head>

    <ArticleJumbotron
      v-if="articleData && articleData.article"
      :title="articleData.article.title"
      :author-name="articleData.article.author.username"
      :author-image="articleData.article.author.image"
      :date="articleData.article.createdAt"
    />

    <TheContainer>
      <p v-if="articlePending">Loading the article...</p>
      <div v-else-if="articleData && articleData.article">
        <p class="article-content">{{ articleData.article.body }}</p>

        <ul v-if="articleData.article.tagList" class="mb-12">
          <li
            v-for="tag in articleData.article.tagList"
            :key="tag"
            class="mr-1"
          >
            <AppTag :name="tag" />
          </li>
        </ul>
      </div>

      <hr />

      <div
        v-if="
          articleData &&
          articleData.article &&
          auth.isAuthenticated &&
          auth.currentUser
        "
        class="comments w-full md:w-2/3 md:mx-auto mb-12"
      >
        <ArticleCommentForm
          :author="auth.currentUser"
          :article-slug="articleData.article.slug"
          @create:article-comment="handleCommentCreate"
        />
      </div>

      <div
        v-if="commentsData && commentsData.comments.length > 0"
        class="comments w-full md:w-2/3 md:mx-auto"
      >
        <ArticleComment
          v-for="comment in commentsData.comments"
          :key="comment.id"
          class="comment"
          :article-comment="comment"
        />
      </div>
      <p v-else>There are no comments yet...</p>
    </TheContainer>
  </div>
</template>

<style scoped>
.article-content {
  font-family: 'source serif pro', serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;
}

ul li {
  display: inline-block;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0;
}

.comments {
  margin-top: 3rem;
}
.comment {
  margin-bottom: 1rem;
}
</style>
