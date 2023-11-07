<script setup lang="ts">
import { defineProps } from 'vue';
import { ref, navigateTo } from '#imports';
import { authStore } from '~/stores/auth';
import { followUser, unfollowUser } from '~/lib/api/user';

const props = defineProps<{
  active: boolean;
  username: string;
}>();

const activeState = ref(props.active);

const auth = authStore();

const toggleFollow = async () => {
  const token = auth.currentUser?.token;
  if (!token) {
    await navigateTo('/user/register');
    return;
  }

  if (!activeState.value) {
    try {
      await followUser(token, props.username);
      activeState.value = true;
    } catch (error) {
      // todo: Implement error handling
    }
  } else {
    try {
      await unfollowUser(token, props.username);
      activeState.value = false;
    } catch (error) {
      // todo: Implement error handling
    }
  }
};
</script>

<template>
  <div>
    <button
      :class="[
        'inline-flex items-center justify-center border rounded text-xs px-2 py-1 bg-gray-300 text-gray-600',
      ]"
      @click="toggleFollow"
    >
      <span
        >{{ activeState ? '➖ Unfollow' : '＋ Follow' }} {{ username }}</span
      >
    </button>
  </div>
</template>
