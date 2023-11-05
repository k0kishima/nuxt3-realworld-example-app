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
  <div class="jumbotron bg-gray-100 text-center py-4 overflow-auto">
    <TheContainer>
      <div class="w-full md:w-4/5 md:mx-auto">
        <UserAvatar :image="user.image" class="avatar w-24 h-24 mb-4" />
        <h4 class="font-semibold text-xl">{{ user.username }}</h4>
        <p class="text-gray-400 font-light max-w-xl mx-auto mb-2">
          {{ user.bio }}
        </p>
        <NuxtLink
          href="/user/settings"
          class="float-right text-gray-600 border border-gray-600 px-2 py-1 text-sm rounded-sm"
        >
          <i class="ion-gear-a"></i> Edit Profile Settings
        </NuxtLink>
      </div>
    </TheContainer>
  </div>
</template>

<style scoped>
.jumbotron:after,
.jumbotron:before {
  content: '';
  clear: both;
  display: block;
}
</style>
