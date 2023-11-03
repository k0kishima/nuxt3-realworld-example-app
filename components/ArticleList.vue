<script setup lang="ts">
import { defineProps } from 'vue';
import { GetArticlesResponse } from '~/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articles: GetArticlesResponse['articles'];
}>();
</script>

<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.slug"
      class="article-preview"
    >
      <div class="article-meta">
        <a :href="`/profile/${encodeURIComponent(article.author.username)}`">
          <img
            :data-src="article.author.image"
            :src="article.author.image"
            alt="author's profile image"
            class="lazyautosizes lazyloaded"
          />
        </a>

        <div class="info">
          <a
            class="author"
            :href="`/profile/${encodeURIComponent(article.author.username)}`"
          >
            <span>{{ article.author.username }}</span>
          </a>
          <span class="date">{{
            new Date(article.createdAt).toDateString()
          }}</span>
        </div>

        <div class="pull-xs-right">
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i> {{ article.favoritesCount }}
          </button>
        </div>
      </div>

      <a class="preview-link" :href="`/article/${article.slug}`">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>

        <ul class="tag-list" style="max-width: 100%">
          <li
            v-for="tag in article.tagList"
            :key="tag"
            class="tag-default tag-pill tag-outline"
            style="border-color: initial"
          >
            <span style="color: inherit">{{ tag }}</span>
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>

<style scoped>
.article-preview {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
}

.article-meta {
  display: block;
  position: relative;
  font-weight: 300;

  a {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    box-sizing: inherit;
    user-select: none;
    background-color: transparent;
    color: #5cb85c;
    text-decoration: none;
    touch-action: manipulation;
  }
  img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
  }

  .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem;
    .author {
      display: block;
      font-weight: 500 !important;
    }
    .date {
      color: #bbb;
      font-size: 0.8rem;
      display: block;
    }
  }
  .pull-xs-right {
    float: right !important;
    .btn {
      -webkit-text-size-adjust: 100%;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      font: inherit;
      overflow: visible;
      text-transform: none;
      touch-action: manipulation;
      margin: 0;
      display: inline-block;
      font-weight: 400;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      user-select: none;
      border: 1px solid transparent;
      color: #fff;
      background-color: #5cb85c;
      border-color: #5cb85c;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      border-radius: 0.2rem;
    }
  }

  .preview-link {
    color: inherit !important;

    h1 {
      font-weight: 600 !important;
      font-size: 1.5rem !important;
      margin-bottom: 3px;
    }

    p {
      font-weight: 300;
      font-size: 24px;
      color: #999 !important;
      margin-bottom: 15px;
      font-size: 1rem;
      line-height: 1.3rem;
    }

    span {
      max-width: 30%;
      font-size: 0.8rem;
      font-weight: 300;
      color: #bbb;
      vertical-align: middle;
    }

    ul.tag-list {
      padding-left: 0 !important;
      display: inline-block;
      list-style: none !important;

      li {
        display: inline-block !important;
        font-weight: 300;
        font-size: 0.8rem !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }
    .tag-default.tag-outline {
      border: 1px solid #ddd;
      color: #aaa !important;
      background: 0 0 !important;
    }
  }
}
</style>
