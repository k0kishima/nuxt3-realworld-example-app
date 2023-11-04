<script setup lang="ts">
import { defineProps } from 'vue';
import { ArticleComment } from '~/types';
import { formatLongDate } from '~/utils/dateUtils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articleComment: ArticleComment;
}>();
</script>

<template>
  <div class="card">
    <div class="card-block">
      <p>{{ articleComment.body }}</p>
    </div>
    <div class="card-footer">
      <UserAvatar :image="articleComment.author.image" />
      <div class="comment-meta ml-4">
        <ul>
          <li>{{ articleComment.author.username }}</li>
          <li>
            <span class="date-posted">{{
              formatLongDate(articleComment.createdAt)
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e5e5e5;
}
.card-block p {
  padding: 1.25rem;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  box-shadow: none !important;
  font-size: 0.8rem;
  font-weight: 300;
}

.card-footer li {
  display: inline;
}

.comment-meta {
  display: inline-block;
  vertical-align: middle;
}
.date-posted {
  margin-left: 10px;
  color: #bbb;
}
</style>
