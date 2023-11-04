<script setup lang="ts">
import { defineProps } from 'vue';
import { formatLongDate } from '~/utils/dateUtils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  authorName: string;
  authorImage: string;
  date: string;
}>();
</script>

<template>
  <div class="jumbotron w-full justify-center items-center">
    <TheContainer>
      <h1>{{ title }}</h1>
      <UserAvatar :image="authorImage" class="avatar" />
      <div class="article-meta ml-4">
        <ul>
          <li>{{ authorName }}</li>
          <li>{{ formatLongDate(date) }}</li>
        </ul>
      </div>
    </TheContainer>
  </div>
</template>

<style scoped>
.jumbotron {
  padding: 2rem;
  overflow: auto;
  color: #fff;
  background: #333;
  box-shadow:
    inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
}
.jumbotron:after,
.jumbotron:before {
  content: '';
  clear: both;
  display: block;
}

h1 {
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.1em;
  margin-bottom: 2rem;
}

p {
  margin: 0 auto 0.5rem;
  max-width: 450px;
  font-weight: 300;
  padding-bottom: 0.5rem;
}

.article-meta {
  display: inline-block;
  vertical-align: middle;
}

.avatar {
  max-width: 30px;
}
</style>
