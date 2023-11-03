<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  user: {
    image: string;
    username: string;
    bio: string;
  };
}>();
</script>
<template>
  <div class="jumbotron w-full justify-center items-center">
    <TheContainer>
      <img :src="user.image" alt="User's profile image" />
      <h4>{{ user.username }}</h4>
      <p>{{ user.bio }}</p>
      <NuxtLink href="/user/settings" class="user-setting-button"
        ><i class="ion-gear-a"></i> Edit Profile Settings</NuxtLink
      >
    </TheContainer>
  </div>
</template>

<style scoped>
.jumbotron {
  text-align: center;
  background: #f3f3f3;
  padding: 1rem 0 1rem 0;
  overflow: auto;
}
.jumbotron:after,
.jumbotron:before {
  content: '';
  clear: both;
  display: block;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 1rem;
  border: 0;
  display: inline-block;
}

h4 {
  font-weight: 700;
  font-size: 1.5rem;
}

p {
  margin: 0 auto 0.5rem;
  color: #aaa;
  max-width: 450px;
  font-weight: 300;
}

.user-setting-button {
  float: right;
  color: #999;
  border: 1px solid #999;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
}
</style>
