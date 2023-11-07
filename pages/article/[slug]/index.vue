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
      :article="articleData.article"
    />

    <TheContainer>
      <p v-if="articlePending" class="mb-8">Loading the article...</p>
      <div v-else-if="articleData && articleData.article">
        <p class="article-content text-lg leading-relaxed mb-8">
          {{ articleData.article.body }}
        </p>

        <ul v-if="articleData.article.tagList" class="mb-12 space-x-1">
          <li
            v-for="tag in articleData.article.tagList"
            :key="tag"
            class="inline"
          >
            <AppTag :name="tag" />
          </li>
        </ul>
      </div>

      <hr class="my-4 border-t border-gray-200" />

      <div
        v-if="
          articleData &&
          articleData.article &&
          auth.isAuthenticated &&
          auth.currentUser
        "
        class="comments w-full md:w-2/3 md:mx-auto mb-12 mt-12"
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
          class="comment mb-4"
          :article-comment="comment"
        />
      </div>
      <p v-else>There are no comments yet...</p>
    </TheContainer>
  </div>
</template>
