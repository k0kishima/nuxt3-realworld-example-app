<script setup lang="ts">
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLowerCase();
</script>

<template>
  <div
    class="jumbotron w-full flex justify-center items-center text-center p-4 overflow-auto text-white bg-custom-green shadow-inner"
  >
    <TheContainer>
      <h1
        class="font-titillium text-6xl font-extrabold text-center text-shadow pb-4"
      >
        {{ title }}
      </h1>
      <p class="font-thin text-xl pb-4">A place to share your knowledge.</p>
    </TheContainer>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.jumbotron {
  box-shadow:
    inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
}
</style>
